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
import { AudioProvider } from "@/components/AudioManager";

export const metadata: Metadata = {
  title: "Siddhartha Manu | Software Developer",
  description: "Portfolio of Siddhartha Manu (Dotachin), Software Developer specializing in Machine Learning, Backend Systems, and Technical Experiments.",
};

import { profile } from "@/data/profile";
import { navItems } from "@/data/navigation";

import { LoadingScreen } from "@/components/LoadingScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="flex flex-col bg-p3-blue-dark">
        <LoadingScreen />
        <ThemeProvider>
          <AudioProvider>
            <AppShell profile={profile} navItems={navItems}>
              {children}
            </AppShell>
          </AudioProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
