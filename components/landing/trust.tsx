import { ShieldCheck, Lock, Heart } from "lucide-react";
import type { getDictionary } from "@/lib/i18n/get-dictionary";

interface TrustProps {
  dict: ReturnType<typeof getDictionary>;
}

export function Trust({ dict }: TrustProps) {
  const stats = [
    { value: dict.trust.stat1Value, label: dict.trust.stat1Label },
    { value: dict.trust.stat2Value, label: dict.trust.stat2Label },
    { value: dict.trust.stat3Value, label: dict.trust.stat3Label },
    { value: dict.trust.stat4Value, label: dict.trust.stat4Label },
  ];

  const pillars = [
    {
      icon: ShieldCheck,
      title: dict.trust.compliantTitle,
      description: dict.trust.compliantDesc,
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
    },
    {
      icon: Lock,
      title: dict.trust.privateTitle,
      description: dict.trust.privateDesc,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      icon: Heart,
      title: dict.trust.freeTitle,
      description: dict.trust.freeDesc,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200 mb-20 shadow-sm">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white px-8 py-8 text-center hover:bg-gray-50 transition-colors">
              <p className="text-3xl lg:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {dict.trust.title}
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            {dict.trust.subtitle}
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-11 h-11 rounded-xl ${pillar.iconBg} flex items-center justify-center mb-5`}>
                <pillar.icon className={`w-5 h-5 ${pillar.iconColor}`} />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{pillar.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
