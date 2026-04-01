import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageLines from "@/components/PageLines";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/providers/ThemeProvider";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeetCode - A Better Way to Prepare for Coding Interviews",
  description: "Master coding interviews with NeetCode. Structured learning paths including Blind 75, NeetCode 150 & 250. Detailed video explanations for 1000+ problems. Trusted by 2M+ engineers at top tech companies.",
  keywords: ["coding interviews", "leetcode", "algorithms", "data structures", "system design", "interview preparation", "neetcode"],
  authors: [{ name: "NeetCode" }],
  openGraph: {
    title: "NeetCode - A Better Way to Prepare for Coding Interviews",
    description: "Master coding interviews with structured learning paths and detailed video explanations. Trusted by 2M+ engineers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
    suppressHydrationWarning
      lang="en"
      className={`${geistMono.variable} antialiased`}
    >
      <body className="flex flex-col w-full max-w-[100vw] overflow-x-hidden">
        <ThemeProvider>
          <PageLines />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
