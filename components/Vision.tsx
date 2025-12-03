
import React from 'react';
import { VISION_DATA } from '../constants';
import { Palmtree, GraduationCap, ShieldCheck, Briefcase, Fish, Truck, Lightbulb } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Palmtree': <Palmtree size={40} />,
  'GraduationCap': <GraduationCap size={40} />,
  'ShieldCheck': <ShieldCheck size={40} />,
  'Briefcase': <Briefcase size={40} />,
  'Fish': <Fish size={40} />,
  'Truck': <Truck size={40} />,
  'Default': <Lightbulb size={40} />
};

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-primary-600 inline-block pb-2">
            উন্নয়ন ভিশন ও প্রতিশ্রুতি
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            কক্সবাজার-৩ আসনের উন্নয়নে আমার সুনির্দিষ্ট পরিকল্পনা ও প্রতিশ্রুতি
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VISION_DATA.map((item) => (
            <div key={item.id} className="bg-primary-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary-100 group">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-6 text-primary-600 shadow-md group-hover:scale-110 transition-transform duration-300 mx-auto">
                {iconMap[item.iconName] || iconMap['Default']}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
