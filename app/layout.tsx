import type { Metadata } from "next";
import { Work_Sans, IBM_Plex_Sans_JP } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sikasur Smart",
    template: "Sikasur Smart - %s",
  },
  description:
    "Sikasur Smart - Berbagi Ide dan Inovasi untuk Membangun Desa yang Cerdas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
