import { Submission } from "@/types";
import { supabase, isSupabaseConfigured } from "@/lib/supabaseClient";

const KEY = "matcha_feedback_submissions_v1";

// Two modes:
//
// 1. Supabase configured (recommended for real deployments): the public form
//    INSERTS rows into Supabase. Only an authenticated company account can
//    SELECT them back out, enforced by Row Level Security policies on the
//    database side (see README) - so customers filling out the form on their
//    own device or a shared kiosk have no way to read other people's data.
//
// 2. Not configured (local demo mode): everything falls back to this
//    browser's localStorage, purely so you can try the app without setting
//    up a backend first. In this mode /admin is protected only by a simple
//    password check (see lib/auth.ts) - fine for local testing, but do not
//    rely on it once you deploy publicly. Set up Supabase before going live.

export async function saveSubmission(submission: Submission): Promise<void> {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from("submissions").insert({
      id: submission.id,
      language: submission.language,
      path: submission.path,
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

// Only ever called from the authenticated /admin page.
export async function getSubmissions(): Promise<Submission[]> {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from("submissions")
      .select("id, language, path, answers, submitted_at")
      .order("submitted_at", { ascending: false });
    if (error) throw error;
    return (data ?? []).map((row) => ({
      id: row.id,
      language: row.language,
      path: row.path,
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
