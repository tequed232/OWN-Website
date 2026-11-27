import { NextResponse } from "next/server";
import { getRecentActivity } from "@/lib/github";

export async function GET() {
  const activity = await getRecentActivity();
  return NextResponse.json(activity, {
    headers: {
      "Cache-Control": "public, s-maxage=600, stale-while-revalidate=1800",
    },
  });
}
