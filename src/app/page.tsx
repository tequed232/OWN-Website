import React from "react";
import { getContributionSummary, getRecentActivity } from "@/lib/github";
import { HomeClient } from "@/components/HomeClient";

export const revalidate = 900;

export default async function HomePage() {
  const [contributions, activityData] = await Promise.all([
    getContributionSummary(),
    getRecentActivity(),
  ]);

  return (
    <HomeClient
      contributions={contributions}
      activity={activityData.events}
    />
  );
}
