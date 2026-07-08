import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FeedbackForm } from "@/components/FeedbackForm";
import { ResultsPage } from "@/pages/ResultsPage";

export default function App() {
  return (
    <BrowserRouter>
      {/* Renders your exact structural pattern background globally */}
      <div className="aurora-bg" aria-hidden="true" />

      {/* Renders your active layout pages on top */}
      <div className="relative z-10 w-full min-h-screen">
        <Routes> {/*[cite: 4] */}
          <Route path="/" element={<FeedbackForm />} /> {/*[cite: 4] */}
          <Route path="/company-dashboard" element={<ResultsPage />} /> {/*[cite: 4] */}
        </Routes> {/*[cite: 4] */}
      </div>
    </BrowserRouter>
  );
}
