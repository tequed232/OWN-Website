import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/providers/AppProvider";
import { SiteNav } from "@/components/SiteNav";
import { CookieConsent } from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: {
    default: "OWN — Personal Hub · Tequed.win",
    template: "%s — OWN Tequed.win",
  },
  description:
    "BUILD · COMMIT · CONTRIBUTE — 构建多智能体协作系统与开源工具。万物至简——Less decoration. More information. Stronger structure.",
  icons: {
    icon: "/icon.svg",
  },
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-theme="light" translate="no" className="notranslate">
      <body>
        <AppProvider>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <SiteNav />
          <main id="main-content">{children}</main>
          <CookieConsent />
        </AppProvider>
      </body>
    </html>
  );
}
