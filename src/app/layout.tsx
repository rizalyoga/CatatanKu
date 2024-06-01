import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ProgressBarProviders from "@/components/progress-bar/ProgressBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CatatanKu",
  description: "Created by Rizalyoga 💕",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressBarProviders>{children}</ProgressBarProviders>
      </body>
    </html>
  );
}
