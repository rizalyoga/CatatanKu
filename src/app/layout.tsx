import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProgressBarProviders from "@/components/progress-bar/ProgressBar";
import Breadcrumb from "@/components/breadcrumbs/Breadcrumbs";

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
        <ProgressBarProviders>
          <Breadcrumb
            homeElement={"Home"}
            separator={<span> &gt; </span>}
            activeClasses="!text-blue-700 mx-2 font-semibold pointer-events-none"
            listClasses=" text-slate-500 hover:underline mx-2 font-semibold"
            capitalizeLinks
          />
          {children}
        </ProgressBarProviders>
      </body>
    </html>
  );
}
