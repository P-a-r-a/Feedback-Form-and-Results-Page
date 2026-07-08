import { useEffect, useRef, useState, useCallback } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { Download, Trash2, RefreshCw } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Submission } from "@/types";
import { getSubmissions, clearSubmissions } from "@/lib/storage";
import {
  allQuestions,
  averageRating,
  choiceBreakdown,
  pathBreakdown,
  ratingBreakdown,
  textAnswers,
  yesNoBreakdown,
} from "@/lib/aggregate";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { languageLabels } from "@/data/questions";

const PIE_COLORS = ["#5C7A3F", "#C97B4A", "#BFD69A"];

export function ResultsPage() {
  const reportRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const questions = allQuestions();

  const load = useCallback(async () => {
    setLoading(true);
    setLoadError(null);
    try {
      const data = await getSubmissions();
      setSubmissions(data);
    } catch (err) {
      setLoadError(err instanceof Error ? err.message : "Couldn't load responses.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const avg = averageRating(submissions);
  const ratingRows = ratingBreakdown(submissions);
  const pathRows = pathBreakdown(submissions);

  const choiceQuestions = questions.filter((q) => q.type === "choice");
  const yesNoQuestions = questions.filter((q) => q.type === "yesno" && q.id !== "anchor");
  const textQuestions = questions.filter((q) => q.type === "text");

  async function handleDownloadPdf() {
    if (!reportRef.current) return;
    setExporting(true);
    try {
      const canvas = await html2canvas(reportRef.current, {
        scale: 2,
        backgroundColor: "#F6F2E7",
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`matcha-feedback-results-${new Date().toISOString().slice(0, 10)}.pdf`);
    } finally {
      setExporting(false);
    }
  }

  async function handleClear() {
    if (confirm("Delete all collected responses? This can't be undone.")) {
      await clearSubmissions();
      load();
    }
  }

  if (loading) {
    return (
      <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center">
        <p className="text-matcha-700">Loading responses...</p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-2 font-display text-2xl text-matcha-900">Couldn't load responses</h1>
        <p className="mb-6 text-matcha-700">{loadError}</p>
        <Button onClick={load}>Try again</Button>
      </div>
    );
  }

  if (submissions.length === 0) {
    return (
      <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-2 font-display text-2xl text-matcha-900">No responses yet</h1>
        <p className="mb-6 text-matcha-700">Once people complete the feedback form, results will show up here.</p>
        <Button variant="outline" onClick={load}>
          <RefreshCw size={16} /> Refresh
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-6 py-12">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-bamboo">
          Company dashboard - not for public link
        </span>
        <div className="flex gap-3">
          <Button variant="ghost" onClick={load}>
            <RefreshCw size={16} /> Refresh
          </Button>
          <Button variant="outline" onClick={handleClear}>
            <Trash2 size={16} /> Clear data
          </Button>
          <Button onClick={handleDownloadPdf} disabled={exporting}>
            <Download size={16} /> {exporting ? "Preparing PDF..." : "Download PDF"}
          </Button>
        </div>
      </div>

      <div ref={reportRef} className="space-y-8 rounded-bowl bg-cream p-2">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-bamboo">Results</span>
          <h1 className="font-display text-3xl font-medium text-matcha-900">Matcha Tasting Feedback</h1>
          <p className="text-matcha-700">
            {submissions.length} response{submissions.length === 1 ? "" : "s"} collected · average rating{" "}
            {avg.toFixed(1)} / 5
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card className="p-6">
            <h2 className="mb-4 font-display text-lg text-matcha-900">Overall rating</h2>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={ratingRows}>
                <CartesianGrid strokeDasharray="3 3" stroke="#DFEAC9" />
                <XAxis dataKey="label" tick={{ fontSize: 12, fill: "#374B25" }} />
                <YAxis allowDecimals={false} tick={{ fontSize: 12, fill: "#374B25" }} />
                <Tooltip />
                <Bar dataKey="count" fill="#5C7A3F" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h2 className="mb-4 font-display text-lg text-matcha-900">Response sentiment</h2>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={pathRows} dataKey="count" nameKey="label" outerRadius={80} label>
                  {pathRows.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {yesNoQuestions.map((q) => {
          const rows = yesNoBreakdown(q.id, submissions);
          if (rows.every((r) => r.count === 0)) return null;
          return (
            <Card className="p-6" key={q.id}>
              <h2 className="mb-4 font-display text-lg text-matcha-900">{q.text}</h2>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={rows} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#DFEAC9" />
                  <XAxis type="number" allowDecimals={false} tick={{ fontSize: 12, fill: "#374B25" }} />
                  <YAxis type="category" dataKey="label" width={80} tick={{ fontSize: 12, fill: "#374B25" }} />
                  <Tooltip />
                  <Bar dataKey="count" fill="#7CA845" radius={[0, 6, 6, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          );
        })}

        {choiceQuestions.map((q) => {
          const rows = choiceBreakdown(q.id, submissions);
          if (rows.every((r) => r.count === 0)) return null;
          return (
            <Card className="p-6" key={q.id}>
              <h2 className="mb-4 font-display text-lg text-matcha-900">{q.text}</h2>
              <ResponsiveContainer width="100%" height={Math.max(180, rows.length * 50)}>
                <BarChart data={rows} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#DFEAC9" />
                  <XAxis type="number" allowDecimals={false} tick={{ fontSize: 12, fill: "#374B25" }} />
                  <YAxis type="category" dataKey="label" width={150} tick={{ fontSize: 12, fill: "#374B25" }} />
                  <Tooltip />
                  <Bar dataKey="count" fill="#A67C52" radius={[0, 6, 6, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          );
        })}

        {textQuestions.map((q) => {
          const answers = textAnswers(q.id, submissions);
          if (answers.length === 0) return null;
          return (
            <Card className="p-6" key={q.id}>
              <h2 className="mb-4 font-display text-lg text-matcha-900">{q.text}</h2>
              <ul className="space-y-2">
                {answers.map((a, i) => (
                  <li key={i} className="rounded-xl bg-matcha-50 px-4 py-3 text-sm text-matcha-800">
                    "{a}"
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}

        <Card className="overflow-x-auto p-6">
          <h2 className="mb-4 font-display text-lg text-matcha-900">Raw responses</h2>
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead>
              <tr className="border-b border-matcha-100 text-matcha-600">
                <th className="py-2 pr-4 font-mono font-medium">Date</th>
                <th className="py-2 pr-4 font-mono font-medium">Language</th>
                <th className="py-2 pr-4 font-mono font-medium">Sentiment</th>
                <th className="py-2 pr-4 font-mono font-medium">Rating</th>
              </tr>
            </thead>
            <tbody>
              {submissions
                .slice()
                .reverse()
                .map((s) => (
                  <tr key={s.id} className="border-b border-matcha-50 text-matcha-800">
                    <td className="py-2 pr-4">{new Date(s.submittedAt).toLocaleString()}</td>
                    <td className="py-2 pr-4">{languageLabels[s.language]}</td>
                    <td className="py-2 pr-4">
                      {s.path === "A" ? "Positive" : s.path === "B" ? "Negative" : "Neutral"}
                    </td>
                    <td className="py-2 pr-4">
                      {s.answers.find((a) => a.questionId === "final")?.value ?? "-"} / 5
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}
