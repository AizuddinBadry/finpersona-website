import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { ArrowRight, Check, Tag, Calendar, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Complete LHDN Tax Relief Guide 2025 Malaysia | Finpersona",
  description: "Full guide to all 11 LHDN income tax relief categories in Malaysia for Year of Assessment 2025. Claim limits, eligible expenses, and tips to maximize every deduction.",
  keywords: [
    "lhdn tax relief 2025", "malaysia income tax relief categories", "borang be relief",
    "lhdn tax deduction malaysia", "tax relief malaysia list", "income tax relief ya 2025"
  ],
  openGraph: {
    title: "Complete LHDN Tax Relief Guide 2025 Malaysia",
    description: "All 11 LHDN tax relief categories, claim limits, and tips to maximize every deduction in Malaysia.",
    url: "https://finpersona.com/tax-relief",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete LHDN Tax Relief Guide 2025 Malaysia | Finpersona",
    description: "All 11 LHDN tax relief categories, claim limits, and tips to maximize every deduction in Malaysia.",
  },
  alternates: {
    canonical: "https://finpersona.com/tax-relief",
  },
};

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.finpersona.com";

const reliefCategories = [
  {
    name: "Medical Expenses",
    limit: "RM 10,000",
    color: "bg-red-50",
    badge: "text-red-600",
    items: [
      "Medical treatment for serious illness for self, spouse, or child",
      "Complete medical examination (up to RM 1,000 of the RM 10,000 limit)",
      "COVID-19 vaccination costs",
      "Mental health examination and treatment",
      "Fertility treatment for self or spouse",
    ],
    tip: "Keep all hospital receipts, pharmacy bills, and medical reports.",
  },
  {
    name: "Lifestyle",
    limit: "RM 2,500",
    color: "bg-blue-50",
    badge: "text-blue-600",
    items: [
      "Books, journals, magazines, printed newspapers",
      "Computers, smartphones, and tablets",
      "Sports equipment for active sports",
      "Internet subscription (monthly bill)",
      "Gymnasium membership fees",
    ],
    tip: "Your monthly Unifi, Maxis, or Celcom bill counts — save those receipts.",
  },
  {
    name: "Education Fees",
    limit: "RM 7,000",
    color: "bg-purple-50",
    badge: "text-purple-600",
    items: [
      "Tertiary education (degree, masters, PhD) at recognized institutions",
      "Technical, vocational, industrial or law courses at approved institutions",
      "Upskilling and self-enhancement courses (up to RM 2,000 sub-limit)",
    ],
    tip: "Tuition fees paid to recognized Malaysian or international universities qualify.",
  },
  {
    name: "Sports Equipment",
    limit: "RM 1,000",
    color: "bg-orange-50",
    badge: "text-orange-600",
    items: [
      "Equipment for active sports (badminton rackets, running shoes, footballs)",
      "Sports competition entry fees",
      "Gymnasium or sports complex rental fees",
    ],
    tip: "Passive sports like chess don't qualify — must be physically active sports.",
  },
  {
    name: "Childcare Fees",
    limit: "RM 3,000",
    color: "bg-pink-50",
    badge: "text-pink-600",
    items: [
      "Fees paid to registered childcare centres for children under 6",
      "Kindergarten and pre-school fees for children under 6",
    ],
    tip: "The childcare centre must be registered with the Social Welfare Department.",
  },
  {
    name: "SSPN",
    limit: "RM 8,000",
    color: "bg-yellow-50",
    badge: "text-yellow-700",
    items: [
      "Net savings in SSPN (Skim Simpanan Pendidikan Nasional)",
      "Contributions to Tabung SSPN for your child's future education",
    ],
    tip: "Only net savings count (new deposits minus withdrawals). Contribue regularly to maximize this relief.",
  },
  {
    name: "Life Insurance & EPF",
    limit: "RM 7,000",
    color: "bg-teal-50",
    badge: "text-teal-600",
    items: [
      "Life insurance premiums and takaful contributions (up to RM 3,000)",
      "Employee EPF contributions (combined limit with insurance up to RM 7,000)",
      "Voluntary EPF contributions also qualify",
    ],
    tip: "Your EPF is usually already pre-filled by LHDN based on employer submissions.",
  },
  {
    name: "Domestic Tourism",
    limit: "RM 1,000",
    color: "bg-sky-50",
    badge: "text-sky-600",
    items: [
      "Hotel accommodation in Malaysia",
      "Entrance fees to tourism attractions in Malaysia",
      "Tourism packages provided by registered Malaysian travel agents",
    ],
    tip: "Applicable for holidays within Malaysia only. Keep hotel invoices and attraction tickets.",
  },
  {
    name: "EV Charging Equipment",
    limit: "RM 2,500",
    color: "bg-green-50",
    badge: "text-green-600",
    items: [
      "Purchase and installation of Electric Vehicle (EV) charging facilities at home",
      "One-time relief for residential EV charger setup",
    ],
    tip: "Only for EV charger installation at personal residence. Requires invoice from certified installer.",
  },
  {
    name: "Breastfeeding Equipment",
    limit: "RM 1,000",
    color: "bg-rose-50",
    badge: "text-rose-600",
    items: [
      "Breast pumps and accessories",
      "Milk storage bags and containers",
      "Applicable for mothers with children under 2 years old",
    ],
    tip: "Claim this every 2 years per child. Keep receipts from purchase.",
  },
  {
    name: "Basic Supporting Equipment",
    limit: "RM 6,000",
    color: "bg-indigo-50",
    badge: "text-indigo-600",
    items: [
      "Equipment for disabled self, spouse, child, or parent",
      "Wheelchairs, crutches, hearing aids, prosthetics",
      "Applicable only if the disabled person is registered with the Social Welfare Department",
    ],
    tip: "Keep the proof of disability registration alongside purchase receipts.",
  },
];

export default function TaxReliefPage() {
  const totalRelief = reliefCategories.reduce((sum, c) => sum + parseInt(c.limit.replace(/[^0-9]/g, "")), 0);

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
              <span className="text-gray-900">Tax Relief</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 text-violet-700 text-sm font-medium mb-5">
              <Tag className="w-3.5 h-3.5" />
              Tax Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Complete LHDN Tax Relief Guide for Malaysia (YA 2025)
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-6">
              LHDN allows Malaysian taxpayers to reduce taxable income through 11 official relief categories. The maximum combined relief available is <strong className="text-gray-700">RM {totalRelief.toLocaleString()}</strong>. Here&apos;s every category, what qualifies, and how to claim it.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> YA 2025</span>
              <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> 10 min read</span>
            </div>
            <div className="inline-flex items-center gap-3 bg-violet-50 border border-violet-100 rounded-xl px-5 py-3">
              <span className="text-2xl font-bold text-violet-600">RM {totalRelief.toLocaleString()}</span>
              <span className="text-sm text-gray-600">maximum total relief available across all categories</span>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {reliefCategories.map((cat, i) => (
              <div key={cat.name} className="border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-colors">
                <div className={`${cat.color} px-6 py-4 flex items-center justify-between`}>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-gray-400">{String(i + 1).padStart(2, "0")}</span>
                    <h2 className="font-bold text-gray-900">{cat.name}</h2>
                  </div>
                  <span className={`text-sm font-bold ${cat.badge}`}>{cat.limit}</span>
                </div>
                <div className="px-6 py-5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">What qualifies</p>
                  <ul className="space-y-2 mb-4">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-amber-50 border border-amber-100 rounded-lg px-4 py-2.5">
                    <p className="text-xs text-amber-700"><strong>Tip:</strong> {cat.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* App callout */}
        <section className="py-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-violet-50 border border-violet-100 rounded-2xl p-7">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Let Finpersona track all of this for you</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Instead of remembering 11 categories and saving receipts manually, Finpersona automatically matches every receipt you scan to the correct LHDN relief category. Year-round tracking. No spreadsheets.
              </p>
              <a href={`${appUrl}?auth=register`} className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-xl transition-colors">
                Start tracking free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/tax-return" className="border border-gray-100 rounded-xl p-5 hover:border-violet-200 hover:bg-violet-50/30 transition-all group">
                <p className="font-medium text-gray-900 text-sm group-hover:text-violet-700 mb-1">How to Maximize Your Tax Return</p>
                <p className="text-xs text-gray-500">Step-by-step guide to filing Borang BE and claiming your full refund.</p>
              </Link>
              <Link href="/avoid-overpaying-tax" className="border border-gray-100 rounded-xl p-5 hover:border-violet-200 hover:bg-violet-50/30 transition-all group">
                <p className="font-medium text-gray-900 text-sm group-hover:text-violet-700 mb-1">How to Avoid Overpaying Tax</p>
                <p className="text-xs text-gray-500">Strategies to reduce your tax bill before the year ends.</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
