import { Submission } from "@/types";
import { supabase, isSupabaseConfigured } from "@/lib/supabaseClient";

const KEY = "matcha_feedback_submissions_v1";

// Anyone can insert (public feedback form) or read/delete (results page) -
// enforced by permissive RLS policies on the Supabase side, since there's no
// authentication gate for either link. See project notes for the policy SQL.
//
// When Supabase isn't configured (local demo mode), everything falls back to
// this browser's localStorage.

export async function saveSubmission(submission: Submission): Promise<void> {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from("submissions").insert({
      id: submission.id,
      language: submission.language,
      answers: submission.answers,
      submitted_at: submission.submittedAt,
    });
    if (error) throw error;
    return;
  }

  const all = getLocalSubmissions();
  all.push(submission);
  localStorage.setItem(KEY, JSON.stringify(all));
}

export async function getSubmissions(): Promise<Submission[]> {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from("submissions")
      .select("id, language, answers, submitted_at")
      .order("submitted_at", { ascending: false });
    if (error) throw error;
    return (data ?? []).map((row) => ({
      id: row.id,
      language: row.language,
      answers: row.answers,
      submittedAt: row.submitted_at,
    }));
  }

  return getLocalSubmissions();
}

export async function clearSubmissions(): Promise<void> {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from("submissions").delete().neq("id", "");
    if (error) throw error;
    return;
  }
  localStorage.removeItem(KEY);
}

function getLocalSubmissions(): Submission[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Submission[]) : [];
  } catch {
    return [];
  }
}

export function makeId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}