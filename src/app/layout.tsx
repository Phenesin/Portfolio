import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { AppShell } from "@/components/AppShell";
import { ThemeProvider } from "@/components/ThemeContext";

export const metadata: Metadata = {
  title: "Siddhartha Manu | Software Developer",
  description: "Portfolio of Siddhartha Manu (Dotachin), Software Developer specializing in Machine Learning, Backend Systems, and Technical Experiments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="flex flex-col bg-p3-blue-dark">
        <ThemeProvider>
          <AppShell>
            {children}
          </AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
