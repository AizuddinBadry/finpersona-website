import { Camera, Wand2, TrendingUp, Calculator } from "lucide-react";
import type { getDictionary } from "@/lib/i18n/get-dictionary";

interface FeaturesProps {
  dict: ReturnType<typeof getDictionary>;
}

export function Features({ dict }: FeaturesProps) {
  const features = [
    {
      icon: Camera,
      title: dict.features.feature1Title,
      description: dict.features.feature1Desc,
    },
    {
      icon: Wand2,
      title: dict.features.feature2Title,
      description: dict.features.feature2Desc,
    },
    {
      icon: TrendingUp,
      title: dict.features.feature3Title,
      description: dict.features.feature3Desc,
    },
    {
      icon: Calculator,
      title: dict.features.feature4Title,
      description: dict.features.feature4Desc,
    },
  ];

  return (
    <section className="py-24 relative bg-gradient-to-b from-white via-gray-50 to-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            {dict.features.title}{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">{dict.features.titleHighlight}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {dict.features.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl bg-white/60 border border-gray-200/60 rounded-2xl p-8 transition-all duration-300 hover:border-indigo-300/60 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-sm">
                <feature.icon className="w-7 h-7 text-indigo-600" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="relative text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
