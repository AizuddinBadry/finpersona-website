import {
  Users,
  PieChart,
  Receipt,
  Calculator,
  Brain,
  Wallet,
} from "lucide-react";
import type { getDictionary } from "@/lib/i18n/get-dictionary";

interface FeaturesProps {
  dict: ReturnType<typeof getDictionary>;
}

export function Features({ dict }: FeaturesProps) {
  const features = [
    {
      icon: Users,
      title: dict.appFeatures.feature1Title,
      description: dict.appFeatures.feature1Desc,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      accent: "group-hover:border-pink-200 group-hover:shadow-pink-100/60",
    },
    {
      icon: PieChart,
      title: dict.appFeatures.feature2Title,
      description: dict.appFeatures.feature2Desc,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      accent: "group-hover:border-blue-200",
    },
    {
      icon: Receipt,
      title: dict.appFeatures.feature3Title,
      description: dict.appFeatures.feature3Desc,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      accent: "group-hover:border-amber-200",
    },
    {
      icon: Calculator,
      title: dict.appFeatures.feature4Title,
      description: dict.appFeatures.feature4Desc,
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
      accent: "group-hover:border-violet-200",
    },
    {
      icon: Brain,
      title: dict.appFeatures.feature5Title,
      description: dict.appFeatures.feature5Desc,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      accent: "group-hover:border-emerald-200",
    },
    {
      icon: Wallet,
      title: dict.appFeatures.feature6Title,
      description: dict.appFeatures.feature6Desc,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      accent: "group-hover:border-indigo-200",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white" id="features">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_100%,rgba(124,58,237,0.04),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {dict.appFeatures.title}{" "}
            <span className="gradient-text">{dict.appFeatures.titleHighlight}</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {dict.appFeatures.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white border border-gray-100 rounded-2xl p-6 transition-all duration-300 card-hover shadow-sm ${feature.accent}`}
            >
              <div className={`w-11 h-11 rounded-xl ${feature.iconBg} flex items-center justify-center mb-5`}>
                <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
