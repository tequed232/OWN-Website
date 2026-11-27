import { NextResponse } from "next/server";
import type { MetricsPayload } from "@/types/site";

export async function GET() {
  const payload: MetricsPayload = {
    ali: {
      cpu: 0.9,
      ram: 47.3,
      at: Date.now(),
    },
    tencent: {
      cpu: null,
      ram: null,
      note: "tencent agent pending",
      at: 0,
    },
    ts: Date.now(),
    source: "push",
  };

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
