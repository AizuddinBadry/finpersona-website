import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://finpersona.com"),
  title: {
    default: "Finpersona — AI-Powered Personal Finance & Tax for Malaysians",
    template: "%s | Finpersona",
  },
  description: "Track receipts, maximize LHDN tax relief, and take control of your money with AI-powered personal finance built for Malaysians.",
  keywords: ["personal finance malaysia", "tax relief malaysia", "lhdn tax tracker", "budgeting app malaysia", "finpersona"],
  authors: [{ name: "Finpersona", url: "https://finpersona.com" }],
  creator: "Finpersona",
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://finpersona.com",
    siteName: "Finpersona",
    title: "Finpersona — AI-Powered Personal Finance & Tax for Malaysians",
    description: "Track receipts, maximize LHDN tax relief, and take control of your money with AI-powered personal finance built for Malaysians.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Finpersona" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finpersona — AI-Powered Personal Finance & Tax for Malaysians",
    description: "Track receipts, maximize LHDN tax relief, and take control of your money with AI-powered personal finance built for Malaysians.",
    images: ["/og.png"],
    creator: "@finpersona",
  },
  icons: {
    icon: [
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    shortcut: "/icons/favicon-32x32.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
