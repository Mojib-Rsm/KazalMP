import React from 'react';
import { ACHIEVEMENTS_DATA } from '../constants';
import { Truck, BookOpen, Umbrella, Fish, Activity, CheckCircle } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Road': <Truck size={32} />,
  'BookOpen': <BookOpen size={32} />,
  'Umbrella': <Umbrella size={32} />,
  'Fish': <Fish size={32} />,
  'Default': <Activity size={32} />
};

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-primary-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            সাফল্য ও অবদান
          </h2>
          <p className="text-primary-100 max-w-2xl mx-auto">
            জনপ্রতিনিধি হিসেবে দায়িত্ব পালনকালে এলাকার উন্নয়নে গৃহীত কিছু উল্লেখযোগ্য পদক্ষেপ।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS_DATA.map((item) => (
            <div key={item.id} className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/20 transition duration-300 group">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition duration-300">
                {iconMap[item.iconName] || iconMap['Default']}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-primary-100 text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="flex items-center text-xs font-semibold uppercase tracking-wider text-primary-200">
                <CheckCircle size={14} className="mr-1" />
                বাস্তবায়িত
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;