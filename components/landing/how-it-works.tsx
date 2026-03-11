import { LinkIcon, Cpu, FileCheck } from "lucide-react";
import type { getDictionary } from "@/lib/i18n/get-dictionary";

interface HowItWorksProps {
  dict: ReturnType<typeof getDictionary>;
}

export function HowItWorks({ dict }: HowItWorksProps) {
  const steps = [
    {
      icon: LinkIcon,
      step: dict.howItWorks.step1Label,
      title: dict.howItWorks.step1Title,
      description: dict.howItWorks.step1Desc,
      gradientBadge: "bg-violet-600",
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
      connector: "bg-gradient-to-r from-violet-300 to-pink-300",
    },
    {
      icon: Cpu,
      step: dict.howItWorks.step2Label,
      title: dict.howItWorks.step2Title,
      description: dict.howItWorks.step2Desc,
      gradientBadge: "bg-pink-600",
      iconBg: "bg-pink-50",
      iconColor: "text-pink-600",
      connector: "bg-gradient-to-r from-pink-300 to-emerald-300",
    },
    {
      icon: FileCheck,
      step: dict.howItWorks.step3Label,
      title: dict.howItWorks.step3Title,
      description: dict.howItWorks.step3Desc,
      gradientBadge: "bg-emerald-600",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      connector: null,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white" id="how-it-works">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(124,58,237,0.03),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {dict.howItWorks.title}{" "}
            <span className="gradient-text">{dict.howItWorks.titleHighlight}</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            {dict.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-[3.25rem] left-[22%] right-[22%] h-px bg-gradient-to-r from-violet-200 via-pink-200 to-emerald-200" />

          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
                {/* Step badge */}
                <div className={`relative z-10 inline-flex items-center justify-center w-10 h-10 rounded-full ${item.gradientBadge} text-white text-sm font-bold mb-5 shadow-md`}>
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-5`}>
                  <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>

                <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>

              {/* Mobile connector */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-4">
                  <div className="w-px h-6 bg-gray-200" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
