import type { Metadata } from "next";
import { ProductClient } from "@/components/ProductClient";

export const metadata: Metadata = {
  title: "Product — DeepSeek Harness",
};

export default function ProductPage() {
  return <ProductClient />;
}
