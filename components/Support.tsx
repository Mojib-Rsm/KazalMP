import React from 'react';
import { SUPPORT_DATA } from '../constants';
import { Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const Support: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary-800 to-primary-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-white/10">
          <div className="md:w-2/3">
            <div className="flex items-center gap-4 mb-4">
               <div className="bg-white/20 p-3 rounded-full">
                  <Handshake size={32} />
               </div>
               <h2 className="text-3xl md:text-4xl font-bold">
                 {SUPPORT_DATA.title}
               </h2>
            </div>
            <p className="text-primary-100 text-lg leading-relaxed mb-6 md:mb-0">
              {SUPPORT_DATA.description}
            </p>
          </div>
          
          <div className="md:w-1/3 flex justify-center md:justify-end w-full">
            <Link 
              to="/contact" 
              className="w-full md:w-auto bg-white text-primary-800 font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-center"
            >
              {SUPPORT_DATA.actionText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;