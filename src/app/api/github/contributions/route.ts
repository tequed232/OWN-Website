import { NextResponse } from "next/server";
import { getContributionSummary } from "@/lib/github";

export async function GET() {
  const summary = await getContributionSummary();
  return NextResponse.json(summary, {
    headers: {
      "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600",
    },
  });
}
