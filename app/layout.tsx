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

export const metadata = {
  title: "INTR Auto Detail",
  description: "Clean. Restore. Renew. Premium mobile auto detailing serving Chicagoland, IL.",
  icons: {
    icon: "/intr-logo-blue.png",
  },
  openGraph: {
    title: "INTR Auto Detail",
    description: "Clean. Restore. Renew. Premium mobile auto detailing serving Chicagoland, IL.",
    url: "https://intrdetail.com",
    siteName: "INTR Auto Detail",
    images: [
      {
        url: "/intr-logo-blue.png",
        width: 1200,
        height: 630,
        alt: "INTR Auto Detail",
      },
    ],
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
