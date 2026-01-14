import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@poly/ui/globals.css";
import { Providers } from "@/components/providers";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Poly Automations | AI-Powered Business Automation",
  description:
    "We build custom AI automation systems that eliminate repetitive tasks, reduce human error, and let your team focus on growing your business.",
  keywords: [
    "AI automation",
    "business automation",
    "workflow automation",
    "AI agents",
    "CRM integration",
  ],
  openGraph: {
    title: "Poly Automations | Stop Working Harder. Start Working Smarter.",
    description:
      "Custom AI automation solutions that save 40+ hours per week and eliminate human error.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
