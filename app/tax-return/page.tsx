import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { ArrowRight, Check, TrendingUp, FileText, Calendar, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Maximize Your Income Tax Return in Malaysia | Finpersona",
  description: "A complete guide to getting the most out of your Malaysian income tax return. Learn which LHDN relief categories apply to you, how to file Borang BE, and how Finpersona automates it all.",
  keywords: [
    "malaysia income tax return", "lhdn tax refund", "borang be 2025", "income tax malaysia guide",
    "maximize tax refund malaysia", "lhdn tax filing malaysia", "how to file income tax malaysia"
  ],
  openGraph: {
    title: "How to Maximize Your Income Tax Return in Malaysia",
    description: "Complete guide to LHDN tax relief, Borang BE filing, and getting back every ringgit you're owed.",
    url: "https://finpersona.com/tax-return",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Maximize Your Income Tax Return in Malaysia | Finpersona",
    description: "Complete guide to LHDN tax relief, Borang BE filing, and getting back every ringgit you're owed.",
  },
  alternates: {
    canonical: "https://finpersona.com/tax-return",
  },
};

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.finpersona.com";

const commonMistakes = [
  "Not keeping receipts for medical expenses throughout the year",
  "Forgetting to claim lifestyle purchases like books, electronics, and gym memberships",
  "Missing EPF and insurance relief that's often worth RM 3,000–7,000",
  "Not claiming childcare relief if you have children under 6",
  "Skipping domestic travel receipts from holidays within Malaysia",
  "Ignoring SSPN contributions that are worth up to RM 8,000 in relief",
];

const reliefHighlights = [
  { category: "Medical & Health", amount: "Up to RM 10,000", tip: "Includes medical checkups, dental treatment, serious illness, and medical devices." },
  { category: "Lifestyle", amount: "Up to RM 2,500", tip: "Books, electronics, sports equipment, internet subscription, and gym memberships." },
  { category: "Education Fees", amount: "Up to RM 7,000", tip: "Covers courses to improve work skills or degree/master/PhD for self." },
  { category: "Life Insurance & EPF", amount: "Up to RM 7,000", tip: "Combined limit for EPF and life insurance. Already deducted if you're salaried." },
  { category: "SSPN", amount: "Up to RM 8,000", tip: "Saving for your child's education through Tabung SSPN gives direct tax relief." },
];

const faqs = [
  {
    q: "Who needs to file income tax in Malaysia?",
    a: "Any individual earning more than RM 34,000 per year (after EPF deduction) is required to file income tax in Malaysia. This includes salaried employees, freelancers, and business owners.",
  },
  {
    q: "When is the income tax filing deadline in Malaysia?",
    a: "For individuals with employment income (Borang BE), the filing deadline is 30 April each year. e-Filing via MyTax or ezHASiL is available from March 1.",
  },
  {
    q: "How do I know if I'm due a tax refund?",
    a: "If you've paid more Monthly Tax Deduction (PCB) through your salary than your final tax liability, you're entitled to a refund. Filing Borang BE correctly ensures LHDN calculates and returns the difference.",
  },
  {
    q: "How long does it take to receive an LHDN refund?",
    a: "Typically 30 working days after filing if done via e-Filing (MyTax). Refunds are deposited directly to your bank account if you've registered it with LHDN.",
  },
  {
    q: "Can Finpersona help me file my taxes?",
    a: "Finpersona tracks all your qualifying expenses and tax relief year-round and generates a ready-to-use summary. However, actual filing must be completed through LHDN's MyTax or ezHASiL portal. Think of us as your preparation tool.",
  },
];

export default function TaxReturnPage() {
  return (
    <PageShell>
      <div className="bg-white">
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(124,58,237,0.05),transparent)]" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-violet-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-900">Tax Return</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-5">
              <TrendingUp className="w-3.5 h-3.5" />
              Tax Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              How to Maximize Your Income Tax Return in Malaysia
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-6">
              Most Malaysians leave between RM 1,000 and RM 3,000 on the table every tax year simply by not tracking their eligible deductions. This guide walks you through every relief category, common mistakes to avoid, and how to file confidently.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-10">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Updated for YA 2025</span>
              <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> 8 min read</span>
            </div>
            <div className="h-px bg-gray-100" />
          </div>
        </section>

        {/* Content */}
        <article className="pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What is an income tax return in Malaysia?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                In Malaysia, income tax is assessed annually through LHDN (Lembaga Hasil Dalam Negeri). Salaried employees file using <strong>Borang BE</strong>, while those with business income use Borang B. The process involves declaring your total income, applying eligible tax relief, and calculating your final tax liability.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If your Monthly Tax Deduction (PCB) has been over-deducted by your employer throughout the year, LHDN will refund the difference after you file. This is your <strong>tax return</strong> — and the more relief you claim, the larger it can be.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tax relief categories that most people miss</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                LHDN allows you to reduce your taxable income through 11 official relief categories. Here are the ones most commonly missed:
              </p>
              <div className="space-y-4">
                {reliefHighlights.map((r) => (
                  <div key={r.category} className="border border-gray-100 rounded-xl p-5 hover:border-violet-100 transition-colors">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-semibold text-gray-900 text-sm">{r.category}</h3>
                      <span className="text-violet-600 font-bold text-sm shrink-0">{r.amount}</span>
                    </div>
                    <p className="text-sm text-gray-500">{r.tip}</p>
                  </div>
                ))}
                <div className="text-center pt-2">
                  <Link href="/tax-relief" className="text-sm text-violet-600 hover:text-violet-700 font-medium inline-flex items-center gap-1">
                    See the complete LHDN tax relief guide <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Common mistakes that reduce your tax return</h2>
              <ul className="space-y-3">
                {commonMistakes.map((m) => (
                  <li key={m} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    </span>
                    {m}
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to file your income tax in Malaysia</h2>
              <div className="space-y-4">
                {[
                  { n: 1, t: "Gather your documents", d: "Collect EA form from employer, all receipts for claimable expenses, bank statements, and investment proofs." },
                  { n: 2, t: "Log in to MyTax", d: "Visit mytax.hasil.gov.my and log in with your MyKad or Tax Reference Number. First-time filers need to register first." },
                  { n: 3, t: "Complete your Borang BE", d: "Enter your income, deductions, and tax relief. Use your Finpersona summary to fill in relief categories accurately." },
                  { n: 4, t: "Submit and pay (or receive refund)", d: "Review your final tax amount. If you've overpaid via PCB, LHDN will process your refund within 30 working days." },
                ].map((s) => (
                  <div key={s.n} className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-violet-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {s.n}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">{s.t}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* App callout */}
            <div className="bg-violet-50 border border-violet-100 rounded-2xl p-7">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Track it all year with Finpersona</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                The biggest reason Malaysians miss deductions is not tracking receipts as they happen. Finpersona lets you snap receipts instantly, categorizes them automatically against LHDN rules, and builds your tax summary in real time — so tax season is just a review, not a scramble.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Covers all 11 LHDN categories", "Receipt scanning with AI", "Real-time tax estimate", "Export-ready summary"].map((b) => (
                  <span key={b} className="flex items-center gap-1.5 text-xs text-violet-700 font-medium">
                    <Check className="w-3.5 h-3.5" /> {b}
                  </span>
                ))}
              </div>
              <a href={`${appUrl}?auth=register`} className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-xl transition-colors">
                Start tracking free <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-violet-600" /> Frequently asked questions
              </h2>
              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border-b border-gray-100 pb-5">
                    <h3 className="font-semibold text-gray-900 text-sm mb-2">{faq.q}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Related guides</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/tax-relief" className="border border-gray-100 rounded-xl p-5 hover:border-violet-200 hover:bg-violet-50/30 transition-all group">
                  <p className="font-medium text-gray-900 text-sm group-hover:text-violet-700 mb-1">Complete LHDN Tax Relief Guide</p>
                  <p className="text-xs text-gray-500">All 11 categories, claim limits, and tips for maximizing each one.</p>
                </Link>
                <Link href="/avoid-overpaying-tax" className="border border-gray-100 rounded-xl p-5 hover:border-violet-200 hover:bg-violet-50/30 transition-all group">
                  <p className="font-medium text-gray-900 text-sm group-hover:text-violet-700 mb-1">How to Avoid Overpaying Tax</p>
                  <p className="text-xs text-gray-500">Practical strategies to reduce your tax bill before year-end.</p>
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </PageShell>
  );
}
