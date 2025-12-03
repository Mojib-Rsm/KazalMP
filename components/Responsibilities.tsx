import React from 'react';
import { RESPONSIBILITIES_DATA } from '../constants';
import { Gavel, Flag, Heart, Briefcase, Activity } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Gavel': <Gavel size={32} />,
  'Flag': <Flag size={32} />,
  'Heart': <Heart size={32} />,
  'Briefcase': <Briefcase size={32} />,
  'Default': <Activity size={32} />
};

const Responsibilities: React.FC = () => {
  return (
    <section id="responsibilities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-primary-600 inline-block pb-2">
            রাজনৈতিক ও সামাজিক দায়িত্বসমূহ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            জাতীয় সংসদ, বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি) এবং সামাজিকভাবে পালিত বিভিন্ন গুরুত্বপূর্ণ দায়িত্ব।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {RESPONSIBILITIES_DATA.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-primary-500 group">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 mx-auto md:mx-0">
                {iconMap[item.iconName] || iconMap['Default']}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center md:text-left">{item.title}</h3>
              <h4 className="text-sm font-semibold text-primary-600 mb-4 uppercase tracking-wide text-center md:text-left">{item.role}</h4>
              <p className="text-gray-600 text-sm leading-relaxed text-center md:text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Responsibilities;