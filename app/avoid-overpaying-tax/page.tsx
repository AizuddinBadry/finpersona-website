import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { ArrowRight, Check, ShieldCheck, Calendar, FileText, X } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Stop Overpaying Income Tax in Malaysia | Finpersona",
  description: "Practical strategies to ensure you never pay more income tax than you should in Malaysia. Learn how to optimize your PCB, claim all LHDN relief, and use Finpersona to track year-round.",
  keywords: [
    "avoid overpaying tax malaysia", "reduce income tax malaysia", "pcb optimization malaysia",
    "lhdn tax saving tips", "income tax planning malaysia", "how to pay less tax malaysia"
  ],
  openGraph: {
    title: "How to Stop Overpaying Income Tax in Malaysia",
    description: "Practical strategies to ensure you never pay more income tax than you should. Track relief year-round with Finpersona.",
    url: "https://finpersona.com/avoid-overpaying-tax",
    type: "article",
  },
  alternates: {
    canonical: "https://finpersona.com/avoid-overpaying-tax",
  },
};

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.finpersona.com";

const overpayingReasons = [
  { reason: "Not tracking qualifying expenses throughout the year", fix: "Use Finpersona to snap receipts the moment you spend." },
  { reason: "Filing without knowing all 11 LHDN relief categories", fix: "Read our full tax relief guide to understand every category." },
  { reason: "Incorrect PCB setup with employer (under-claiming spouse relief)", fix: "Submit a CP21 or updated CP22 to your HR department." },
  { reason: "Forgetting EPF and life insurance relief (often pre-filled but missed)", fix: "Verify your EA form matches your actual EPF contributions." },
  { reason: "Missing SSPN contributions that could yield RM 8,000 relief", fix: "Start a Tabung SSPN account for your child before year-end." },
  { reason: "Not utilizing domestic tourism receipts from Malaysia holidays", fix: "Save hotel and attraction receipts from every local trip." },
];

const strategies = [
  {
    title: "Track expenses from January, not March",
    desc: "The biggest mistake is waiting until tax season. By then, receipts are lost and opportunities are gone. Snap every qualifying purchase as it happens.",
    icon: "📅",
  },
  {
    title: "Declare your relief to your employer",
    desc: "Submit a PCB (CP38) declaration to your employer each January. This reduces your Monthly Tax Deduction so you get more take-home pay throughout the year instead of a refund later.",
    icon: "📋",
  },
  {
    title: "Maximize EPF voluntary contributions",
    desc: "Beyond mandatory EPF, voluntary contributions up to the RM 7,000 combined limit (with insurance) reduce your taxable income directly. Especially useful if you're freelancing or earning bonuses.",
    icon: "💰",
  },
  {
    title: "Start SSPN for your children early",
    desc: "Parents can claim up to RM 8,000 relief on net SSPN savings annually. Opening an account early and contributing regularly compounds both the education fund and your annual tax savings.",
    icon: "🎓",
  },
  {
    title: "Time large qualifying purchases strategically",
    desc: "Buying a new laptop, smartphone, or gym membership near year-end? Consider timing it to fall within the current tax year to claim it immediately rather than waiting 12 months.",
    icon: "🕐",
  },
  {
    title: "Keep digital copies of every receipt",
    desc: "LHDN can audit claims going back 7 years. A photo in Finpersona is as valid as a paper receipt. Make it a habit to snap every qualifying purchase immediately.",
    icon: "📸",
  },
];

const faqs = [
  {
    q: "Is it legal to minimize my tax in Malaysia?",
    a: "Absolutely. Tax minimization through legitimate LHDN relief claims is not only legal but actively encouraged. LHDN publishes these categories specifically so taxpayers can reduce their liability. This is different from tax evasion, which involves hiding income.",
  },
  {
    q: "What's the difference between tax avoidance and tax evasion in Malaysia?",
    a: "Tax avoidance means legally reducing your tax bill using reliefs, deductions, and exemptions that LHDN allows. Tax evasion means hiding income or falsely claiming relief — which is illegal. Finpersona only supports lawful tax avoidance.",
  },
  {
    q: "Can I claim relief if I pay in cash?",
    a: "Yes, but you must keep the official receipt. LHDN requires receipts as proof of payment regardless of the payment method. Cash receipts are fully valid as long as they're from a registered business.",
  },
  {
    q: "Does my working spouse affect my tax relief?",
    a: "If both spouses are working and filing separately, each can claim their own individual reliefs. If you elect to assess jointly, different rules apply. In most cases, separate assessment is more beneficial for dual-income families.",
  },
  {
    q: "How does Finpersona help me avoid overpaying?",
    a: "Finpersona tracks all your qualifying expenses against LHDN categories automatically throughout the year. You get a real-time estimate of your tax liability and savings, so you always know where you stand — eliminating year-end surprises.",
  },
];

export default function AvoidOverpayingTaxPage() {
  return (
    <PageShell>
      <div className="bg-white">
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(16,185,129,0.05),transparent)]" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-violet-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-900">Avoid Overpaying Tax</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Tax Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              How to Stop Overpaying Income Tax in Malaysia
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-6">
              The average Malaysian taxpayer overpays by RM 1,000 to RM 3,000 every year. Not because the rules are complicated, but because eligible expenses aren&apos;t tracked. Here&apos;s how to change that.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Updated for YA 2025</span>
              <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> 7 min read</span>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-14">

          {/* Why people overpay */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Why most Malaysians overpay</h2>
            <p className="text-gray-500 text-sm mb-6">And the simple fix for each one.</p>
            <div className="space-y-3">
              {overpayingReasons.map((r) => (
                <div key={r.reason} className="border border-gray-100 rounded-xl p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-gray-900">{r.reason}</p>
                  </div>
                  <div className="flex items-start gap-3 ml-7">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-emerald-700">{r.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Strategies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6 strategies to stop overpaying</h2>
            <div className="space-y-5">
              {strategies.map((s, i) => (
                <div key={s.title} className="flex gap-4">
                  <div className="text-2xl shrink-0 mt-0.5">{s.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1.5">
                      <span className="text-gray-400 mr-2">{String(i + 1).padStart(2, "0")}.</span>
                      {s.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Year-round calendar */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your tax-saving calendar</h2>
            <div className="space-y-3">
              {[
                { period: "January", action: "Submit PCB declaration to employer. Review last year's filing. Start fresh receipt tracking." },
                { period: "March to April", action: "LHDN e-Filing opens. File early for faster processing. Cross-reference your Finpersona summary with EA form." },
                { period: "May to November", action: "Track all qualifying expenses month by month. Check your running tax estimate in Finpersona." },
                { period: "October to December", action: "Review your year-to-date relief. Make strategic purchases (gym membership, laptop) before Dec 31 to count in current year." },
                { period: "December 31", action: "Last day qualifying expenses count for the current year of assessment. Finalize SSPN and EPF voluntary contributions." },
              ].map((item) => (
                <div key={item.period} className="flex gap-4 border border-gray-100 rounded-xl p-4">
                  <div className="w-28 shrink-0">
                    <p className="text-xs font-bold text-violet-600 uppercase tracking-wide">{item.period}</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.action}</p>
                </div>
              ))}
            </div>
          </section>

          {/* App callout */}
          <div className="bg-violet-50 border border-violet-100 rounded-2xl p-7">
            <h3 className="text-lg font-bold text-gray-900 mb-2">See your real-time tax estimate with Finpersona</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              Instead of a year-end panic, Finpersona gives you a running tax estimate every month. As you snap receipts and log expenses, your projected tax liability and savings update in real time. You&apos;ll know exactly where you stand, all year.
            </p>
            <div className="flex flex-wrap gap-3 mb-5">
              {["Real-time tax estimate", "All 11 LHDN categories", "Receipt scanning", "No spreadsheets"].map((b) => (
                <span key={b} className="flex items-center gap-1.5 text-xs text-violet-700 font-medium">
                  <Check className="w-3.5 h-3.5" /> {b}
                </span>
              ))}
            </div>
            <a href={`${appUrl}?auth=register`} className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-xl transition-colors">
              Start for free <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
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
              <Link href="/tax-return" className="border border-gray-100 rounded-xl p-5 hover:border-violet-200 hover:bg-violet-50/30 transition-all group">
                <p className="font-medium text-gray-900 text-sm group-hover:text-violet-700 mb-1">Maximize Your Tax Return</p>
                <p className="text-xs text-gray-500">How to claim your full refund from LHDN after filing.</p>
              </Link>
              <Link href="/tax-relief" className="border border-gray-100 rounded-xl p-5 hover:border-violet-200 hover:bg-violet-50/30 transition-all group">
                <p className="font-medium text-gray-900 text-sm group-hover:text-violet-700 mb-1">Complete LHDN Tax Relief Guide</p>
                <p className="text-xs text-gray-500">Every category, what qualifies, and how much you can claim.</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
