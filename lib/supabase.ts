import { createClient } from "@supabase/supabase-js";

function normalizeSupabaseUrl(rawUrl: string | undefined): string | null {
  if (!rawUrl) return null;

  const trimmedUrl = rawUrl.trim();

  try {
    const parsedUrl = new URL(trimmedUrl);
    parsedUrl.pathname = parsedUrl.pathname.replace(/\/$/, "").replace(/\/rest\/v1$/, "");

    return parsedUrl.toString().replace(/\/$/, "");
  } catch {
    return null;
  }
}

const supabaseUrl = normalizeSupabaseUrl(process.env.NEXT_PUBLIC_SUPABASE_URL);
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;
