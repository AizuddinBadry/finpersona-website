import { TrendingUp, Tag, ShieldCheck, ArrowRight, Check } from "lucide-react";
import type { getDictionary } from "@/lib/i18n/get-dictionary";

interface CategoriesProps {
  dict: ReturnType<typeof getDictionary>;
}

export function Categories({ dict }: CategoriesProps) {
  const cards = [
    {
      icon: TrendingUp,
      title: dict.taxFeatures.card1Title,
      description: dict.taxFeatures.card1Desc,
      stat: dict.taxFeatures.card1Stat,
      statLabel: dict.taxFeatures.card1StatLabel,
      iconBg: "bg-violet-600",
      statColor: "text-violet-600",
      border: "border-violet-100 hover:border-violet-200",
      shadow: "",
      bullets: ["Auto-detect all LHDN categories", "Maximize refund year-round", "ezHASiL-ready export"],
      bulletColor: "text-violet-500",
    },
    {
      icon: Tag,
      title: dict.taxFeatures.card2Title,
      description: dict.taxFeatures.card2Desc,
      stat: dict.taxFeatures.card2Stat,
      statLabel: dict.taxFeatures.card2StatLabel,
      iconBg: "bg-pink-600",
      statColor: "text-pink-600",
      border: "border-pink-100 hover:border-pink-200",
      shadow: "",
      bullets: ["Medical, lifestyle, education", "Sports, SSPN, EPF tracking", "Auto-categorize receipts"],
      bulletColor: "text-pink-500",
    },
    {
      icon: ShieldCheck,
      title: dict.taxFeatures.card3Title,
      description: dict.taxFeatures.card3Desc,
      stat: dict.taxFeatures.card3Stat,
      statLabel: dict.taxFeatures.card3StatLabel,
      iconBg: "bg-emerald-600",
      statColor: "text-emerald-600",
      border: "border-emerald-100 hover:border-emerald-200",
      shadow: "",
      bullets: ["Real-time tax estimate", "Progressive rate calculator", "No filing-day surprises"],
      bulletColor: "text-emerald-500",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-violet-50/40" id="tax">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(124,58,237,0.06),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-5">
            {dict.taxFeatures.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {dict.taxFeatures.title}{" "}
            <span className="gradient-text">{dict.taxFeatures.titleHighlight}</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {dict.taxFeatures.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group bg-white border ${card.border} rounded-2xl p-7 transition-all duration-300 card-hover shadow-sm ${card.shadow}`}
            >
              <div className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center mb-5 shadow-sm`}>
                <card.icon className="w-5 h-5 text-white" />
              </div>

              <div className="mb-4">
                <p className={`text-2xl font-bold ${card.statColor}`}>{card.stat}</p>
                <p className="text-sm text-gray-400">{card.statLabel}</p>
              </div>

              <h3 className="text-base font-semibold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{card.description}</p>

              <ul className="space-y-2">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2.5 text-sm text-gray-500">
                    <Check className={`w-3.5 h-3.5 ${card.bulletColor} shrink-0`} />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://app.finpersona.com"
            className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium text-sm transition-colors group"
          >
            Explore all tax features
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
