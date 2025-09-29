import type { Metadata } from "next";
import { Inter_Tight, Inter } from "next/font/google";
import "./globals.css";

const Inter_tight = Inter_Tight({
  variable: "--font-secondary",
  subsets: ["latin"],
});

const Inter_ = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BYD PIPO",
  description: "BYD PIPO WEBSITE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Inter_.variable} ${Inter_tight.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
