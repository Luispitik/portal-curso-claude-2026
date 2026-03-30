import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 10;
const WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429 }
    );
  }

  let body: { file?: string; section?: string; timestamp?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { file, section } = body;

  if (
    !file ||
    !section ||
    typeof file !== "string" ||
    typeof section !== "string" ||
    file.length > 200 ||
    section.length > 20
  ) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json({ ok: true });
  }

  try {
    await supabase.from("downloads").insert({
      file,
      section,
      user_agent: request.headers.get("user-agent")?.slice(0, 500) || null,
    });
  } catch {
    // Fire and forget — don't block on Supabase errors
  }

  return NextResponse.json({ ok: true });
}
