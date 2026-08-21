import { NextResponse } from "next/server";

const ALLOWED_ORIGINS = [
  "https://black-smith.jp",
  "https://www.black-smith.jp",
];

// Simple in-memory rate limiter (per IP, 5 requests per minute)
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    // --- Origin check (CSRF protection) ---
    const origin = request.headers.get("origin");
    if (
      process.env.NODE_ENV === "production" &&
      (!origin || !ALLOWED_ORIGINS.includes(origin))
    ) {
      return NextResponse.json(
        { error: "不正なリクエストです" },
        { status: 403 }
      );
    }

    // --- Content-Type check ---
    const contentType = request.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      return NextResponse.json(
        { error: "不正なリクエスト形式です" },
        { status: 415 }
      );
    }

    // --- Rate limiting ---
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "送信回数の上限に達しました。しばらく経ってからお試しください。" },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message } = body;

    // --- Validate required fields ---
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "お名前を入力してください" },
        { status: 400 }
      );
    }
    if (name.trim().length > 100) {
      return NextResponse.json(
        { error: "お名前は100文字以内で入力してください" },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "有効なメールアドレスを入力してください" },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "お問い合わせ内容を入力してください" },
        { status: 400 }
      );
    }
    if (message.trim().length > 5000) {
      return NextResponse.json(
        { error: "お問い合わせ内容は5000文字以内で入力してください" },
        { status: 400 }
      );
    }

    // TODO: Implement actual email sending (e.g., Resend, SendGrid, Nodemailer)
    // For now, log the submission
    console.log("=== New Contact Form Submission ===");
    console.log("Name:", name.trim());
    console.log("Email:", email.trim());
    console.log("Phone:", body.phone || "(未入力)");
    console.log("Message:", message.trim());
    console.log("Timestamp:", new Date().toISOString());
    console.log("===================================");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "送信に失敗しました。しばらく経ってからお試しください。" },
      { status: 500 }
    );
  }
}
