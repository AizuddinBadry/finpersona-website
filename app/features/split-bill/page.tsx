import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { Users, ArrowRight, Check, Receipt, Bell, History, UserPlus, Divide } from "lucide-react";

export const metadata: Metadata = {
  title: "Split Bills Easily with Friends | Finpersona",
  description: "Stop the awkward money conversations. Split any bill instantly with Finpersona — dinners, trips, rent, and more. Track who owes what and settle up fast.",
  keywords: ["split bill app malaysia", "bill splitter", "share expenses friends", "finpersona split bill"],
  openGraph: {
    title: "Split Bills Easily with Friends | Finpersona",
    description: "Stop the awkward money conversations. Split any bill instantly — dinners, trips, rent, and more.",
    url: "https://finpersona.com/features/split-bill",
  },
  twitter: {
    card: "summary_large_image",
    title: "Split Bills Easily with Friends | Finpersona",
    description: "Stop the awkward money conversations. Split any bill instantly — dinners, trips, rent, and more.",
  },
  alternates: {
    canonical: "https://finpersona.com/features/split-bill",
  },
};

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.finpersona.com";

const features = [
  { icon: Divide, title: "Split any way you like", desc: "Equal split, custom amounts, or percentage-based. Handle any situation fairly." },
  { icon: UserPlus, title: "Add anyone instantly", desc: "Add friends by name or phone number. They don't need an account to be included." },
  { icon: Receipt, title: "Scan receipts directly", desc: "Point your camera at the bill and Finpersona extracts every line item automatically." },
  { icon: History, title: "Full history, always", desc: "Every split is saved. Look back at who paid what on any trip or outing." },
  { icon: Bell, title: "Gentle reminders", desc: "Stop chasing people manually. Finpersona sends polite nudges on your behalf." },
  { icon: Check, title: "Mark as settled", desc: "When someone pays you back, mark it done. Balances update in real time." },
];

const steps = [
  { n: "1", title: "Add the expense", desc: "Enter an amount or scan the receipt directly. Takes under 10 seconds." },
  { n: "2", title: "Choose who's splitting", desc: "Select from your contacts or add someone new. Pick how to divide it." },
  { n: "3", title: "Track and settle", desc: "Everyone sees what they owe. Settle when ready and the balance clears automatically." },
];

export default function SplitBillPage() {
  return (
    <PageShell>
      <div className="bg-white">
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(124,58,237,0.06),transparent)]" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 text-violet-700 text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Split Bill
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight">
              Split bills without<br />
              <span className="gradient-text">the awkwardness.</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              Dinner with friends, a group trip, shared rent — Finpersona makes splitting expenses fast, fair, and completely drama-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`${appUrl}?auth=register`} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-xl transition-colors">
                Get Started Free <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/#features" className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 hover:border-gray-300 text-gray-700 text-sm font-medium rounded-xl transition-colors">
                See all features
              </Link>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">How it works</h2>
              <p className="text-gray-500">Three steps. Under a minute.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div key={s.n} className="bg-white rounded-2xl p-7 border border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-violet-600 text-white text-sm font-bold flex items-center justify-center mb-5">
                    {s.n}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Everything you need</h2>
              <p className="text-gray-500">Built for how Malaysians actually share money.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <div key={f.title} className="border border-gray-100 rounded-2xl p-6 hover:border-gray-200 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-violet-600" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-950">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to split smarter?</h2>
            <p className="text-white/50 mb-8">Free to use. No credit card required.</p>
            <a href={`${appUrl}?auth=register`} className="inline-flex items-center gap-2 px-7 py-3 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-xl transition-colors">
              Create your account <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
