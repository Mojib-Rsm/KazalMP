import React from 'react';
import { TIMELINE_DATA } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 relative inline-block">
            <span className="relative z-10">রাজনৈতিক পথচলা</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-primary-200 -z-0 opacity-60"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            তৃণমূল থেকে জাতীয় পর্যায়ে নেতৃত্বের ক্রমবিকাশ
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical central line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1.5 bg-gradient-to-b from-primary-300 via-primary-500 to-primary-300 rounded-full opacity-30"></div>

          {TIMELINE_DATA.map((event, index) => (
            <div key={index} className={`relative mb-16 md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center group`}>
              
              {/* Central Node */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg z-20 group-hover:scale-125 transition-transform duration-300"></div>
                {/* Pulse Effect */}
                <div className="absolute w-12 h-12 bg-primary-400 rounded-full opacity-0 group-hover:opacity-30 animate-ping z-10"></div>
              </div>

              {/* Date Badge (Desktop: Opposite side of card) */}
              <div className={`hidden md:flex md:w-1/2 ${index % 2 === 0 ? 'justify-start pl-12' : 'justify-end pr-12'}`}>
                 <span className="text-5xl font-black text-gray-200 group-hover:text-primary-200 transition-colors duration-500 select-none">
                   {event.year}
                 </span>
              </div>

              {/* Content Card */}
              <div className="ml-20 md:ml-0 md:w-1/2">
                 <div className={`
                    bg-white p-6 md:p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] 
                    border border-gray-100 hover:border-primary-200 transition-all duration-300 
                    relative group-hover:-translate-y-2
                    ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}
                 `}>
                    {/* Arrow/Connector */}
                    <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rotate-45 
                      ${index % 2 === 0 ? '-right-2 border-r border-t border-gray-100' : '-left-2 border-l border-b border-gray-100'}
                    `}></div>
                    
                    {/* Mobile Date Badge (Visible only on mobile inside/above card) */}
                    <span className="md:hidden inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-bold rounded-full mb-3">
                      {event.year}
                    </span>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary-700 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;