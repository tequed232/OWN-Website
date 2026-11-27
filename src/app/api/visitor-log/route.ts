import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const consent = req.headers.get("x-ph-consent");
  if (consent !== "visitor-log") {
    return NextResponse.json({ ok: false, reason: "consent_required" }, { status: 403 });
  }
  return NextResponse.json({ ok: true, recorded: true });
}
