
import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-primary-600 inline-block pb-2">
            সচরাচর জিজ্ঞাসিত প্রশ্ন
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            লুৎফুর রহমান কাজল, তাঁর রাজনীতি এবং উন্নয়ন ভাবনা সম্পর্কে সাধারণ কিছু প্রশ্নের উত্তর।
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <div 
              key={faq.id} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="text-primary-500 flex-shrink-0" size={20} />
                  <span className={`font-semibold text-lg ${openIndex === index ? 'text-primary-700' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="text-primary-600 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-8 text-gray-600 leading-relaxed border-l-2 border-primary-100 ml-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
