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

export const metadata: Metadata = {
  title: "Driveway Detail",
  description: "Clean car. No hassle. Mobile detailing that comes to you.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Driveway Detail",
    description: "Mobile detailing by a local college student. Simple, reliable, and done right.",
    url: "https://drivewaydetail.us",
    siteName: "Driveway Detail",
    images: [
      {
        url: "https://drivewaydetail.us/driveway-detail-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Driveway Detail",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Driveway Detail",
    description: "Clean car. No hassle.",
    images: ["https://intrdetail.com/driveway-detail-logo.jpg"],
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
