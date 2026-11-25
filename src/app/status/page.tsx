import type { Metadata } from "next";
import { StatusClient } from "@/components/StatusClient";

export const metadata: Metadata = {
  title: "Status",
};

export default function StatusPage() {
  return <StatusClient />;
}
