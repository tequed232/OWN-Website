import type { Metadata } from "next";
import { DownloadClient } from "@/components/DownloadClient";

export const metadata: Metadata = {
  title: "Download — DeepSeek Harness",
};

export default function DownloadPage() {
  return <DownloadClient />;
}
