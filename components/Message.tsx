
import React from 'react';
import { MESSAGE_DATA } from '../constants';
import { Quote } from 'lucide-react';

const Message: React.FC = () => {
  return (
    <section className="py-20 bg-primary-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary-700 p-4 rounded-full mb-8 shadow-xl">
                <Quote size={40} className="text-yellow-400" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                "{MESSAGE_DATA.title}"
            </h2>
            <p className="text-xl md:text-2xl font-light text-primary-50 italic mb-8 leading-relaxed">
                "{MESSAGE_DATA.content}"
            </p>
            <div className="flex flex-col items-center">
                <img 
                    src="https://thedailymorningglory.com/wp-content/uploads/2025/11/003.jpg" 
                    alt={MESSAGE_DATA.author} 
                    className="w-20 h-20 rounded-full border-4 border-primary-500 shadow-lg mb-3 object-cover"
                />
                <h3 className="text-xl font-bold text-yellow-400">{MESSAGE_DATA.author}</h3>
                <span className="text-primary-300 text-sm">সাবেক সংসদ সদস্য, কক্সবাজার-৩</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
