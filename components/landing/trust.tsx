import { Check, Shield, Heart } from "lucide-react";
import type { getDictionary } from "@/lib/i18n/get-dictionary";

interface TrustProps {
  dict: ReturnType<typeof getDictionary>;
}

export function Trust({ dict }: TrustProps) {
  const trustPoints = [
    {
      icon: Check,
      title: "100% LHDN compliant",
      description: dict.trust.compliantDesc,
    },
    {
      icon: Shield,
      title: "Your receipts are private",
      description: dict.trust.privateDesc,
    },
    {
      icon: Heart,
      title: "Actually free. Forever.",
      description: dict.trust.freeDesc,
    },
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            {dict.trust.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {dict.trust.subtitle}
          </p>
        </div>

        {/* Trust Points */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {trustPoints.map((point) => (
            <div key={point.title} className="text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <point.icon className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">{point.title}</h3>
              <p className="text-sm text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
