import {
  Heart,
  Smartphone,
  GraduationCap,
  Dumbbell,
  Baby,
  PiggyBank,
  Shield,
  Plane,
  Zap,
  Accessibility,
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import type { getDictionary } from "@/lib/i18n/get-dictionary";

interface CategoriesProps {
  dict: ReturnType<typeof getDictionary>;
}

export function Categories({ dict }: CategoriesProps) {
  const categories = [
    { icon: Heart, name: dict.categories.medicalExpenses, maxRelief: 10000, color: "text-red-400" },
    { icon: Smartphone, name: dict.categories.lifestyle, maxRelief: 2500, color: "text-blue-400" },
    { icon: GraduationCap, name: dict.categories.educationFees, maxRelief: 7000, color: "text-purple-400" },
    { icon: Dumbbell, name: dict.categories.sportsEquipment, maxRelief: 1000, color: "text-orange-400" },
    { icon: Baby, name: dict.categories.childcareFees, maxRelief: 3000, color: "text-pink-400" },
    { icon: PiggyBank, name: dict.categories.sspn, maxRelief: 8000, color: "text-yellow-400" },
    { icon: Shield, name: dict.categories.lifeInsuranceEPF, maxRelief: 7000, color: "text-cyan-400" },
    { icon: Plane, name: dict.categories.domesticTourism, maxRelief: 1000, color: "text-indigo-400" },
    { icon: Zap, name: dict.categories.evCharging, maxRelief: 2500, color: "text-green-400" },
    { icon: Baby, name: dict.categories.breastfeeding, maxRelief: 1000, color: "text-rose-400" },
    { icon: Accessibility, name: dict.categories.basicSupporting, maxRelief: 6000, color: "text-teal-400" },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            {dict.categories.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {dict.categories.subtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="backdrop-blur-xl bg-white/60 border border-gray-200/60 rounded-xl p-4 text-center hover:border-indigo-300/60 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center mx-auto mb-3 ${category.color} shadow-sm`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="font-medium text-sm mb-1 text-gray-900">{category.name}</h3>
              <p className="text-xs text-gray-600">
                {dict.categories.upTo} {formatCurrency(category.maxRelief)}
              </p>
            </div>
          ))}
        </div>

        {/* Total Relief Note */}
        <div className="mt-12 text-center">
          <div className="inline-block backdrop-blur-xl bg-gradient-to-br from-indigo-50/80 to-blue-50/80 border border-indigo-200/60 rounded-xl px-6 py-4 shadow-lg shadow-indigo-500/10">
            <p className="text-sm text-gray-600 mb-1">{dict.categories.maxClaimTitle}</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              {formatCurrency(categories.reduce((sum, c) => sum + c.maxRelief, 0))}
            </p>
            <p className="text-xs text-gray-600 mt-1">{dict.categories.maxClaimSubtext}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
