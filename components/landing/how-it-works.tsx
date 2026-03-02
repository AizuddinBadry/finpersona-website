import { Upload, Cpu, LineChart } from "lucide-react";
import type { getDictionary } from "@/lib/i18n/get-dictionary";

interface HowItWorksProps {
  dict: ReturnType<typeof getDictionary>;
}

export function HowItWorks({ dict }: HowItWorksProps) {
  const steps = [
    {
      icon: Upload,
      step: dict.howItWorks.step1Label,
      title: dict.howItWorks.step1Title,
      description: dict.howItWorks.step1Desc,
    },
    {
      icon: Cpu,
      step: dict.howItWorks.step2Label,
      title: dict.howItWorks.step2Title,
      description: dict.howItWorks.step2Desc,
    },
    {
      icon: LineChart,
      step: dict.howItWorks.step3Label,
      title: dict.howItWorks.step3Title,
      description: dict.howItWorks.step3Desc,
    },
  ];

  return (
    <section className="py-24 bg-gray-50/50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            {dict.howItWorks.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {dict.howItWorks.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-indigo-300 via-blue-300 to-transparent" />
              )}

              <div className="relative backdrop-blur-xl bg-white/70 border border-gray-200/60 rounded-2xl p-8 text-center shadow-lg shadow-gray-900/5 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-sm font-bold rounded-full shadow-lg shadow-indigo-500/30">
                  {item.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center mx-auto mb-6 mt-4 shadow-sm">
                  <item.icon className="w-8 h-8 text-indigo-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
