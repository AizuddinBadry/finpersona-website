import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Challenges",
  description: "Join Finpersona events, savings challenges, and financial wellness competitions. Win prizes while building better money habits.",
  keywords: ["finpersona events", "savings challenge malaysia", "financial wellness challenge", "money challenges"],
  openGraph: {
    title: "Events & Challenges | Finpersona",
    description: "Join savings challenges and financial wellness events. Win prizes while building better money habits.",
    url: "https://finpersona.com/events",
  },
  twitter: {
    card: "summary_large_image",
    title: "Events & Challenges | Finpersona",
    description: "Join savings challenges and financial wellness events. Win prizes while building better money habits.",
  },
  alternates: {
    canonical: "https://finpersona.com/events",
  },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
