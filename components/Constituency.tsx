import React from 'react';
import { MapPin, Users, TrendingUp, Sun } from 'lucide-react';

const Constituency: React.FC = () => {
  return (
    <section id="constituency" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-b-4 border-primary-600 inline-block pb-2">
              কক্সবাজার-৩ নির্বাচনী এলাকার তথ্য
            </h2>
            <h3 className="text-xl font-semibold text-primary-600 mb-4">সদর, রামু ও ঈদগাঁও উপজেলা</h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              সদর, রামু ও ঈদগাঁও উপজেলা নিয়ে গঠিত কক্সবাজার-৩ আসনটি বাংলাদেশের পর্যটন ও অর্থনীতির অন্যতম কেন্দ্রবিন্দু। অপার প্রাকৃতিক সৌন্দর্য এবং বিপুল সম্ভাবনার এই জনপদ উন্নয়নের রোল মডেল হতে পারে।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex items-start space-x-4">
                <Users className="text-primary-600 flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-gray-800">জনসংখ্যা</h4>
                  <p className="text-sm text-gray-600">প্রায় ৫ লক্ষাধিক (আনুমানিক)</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex items-start space-x-4">
                <Sun className="text-primary-600 flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-gray-800">পর্যটন</h4>
                  <p className="text-sm text-gray-600">বিশ্বের দীর্ঘতম সমুদ্র সৈকত</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex items-start space-x-4">
                <TrendingUp className="text-primary-600 flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-gray-800">অর্থনীতি</h4>
                  <p className="text-sm text-gray-600">মৎস্য, লবণ, শুঁটকি ও পর্যটন</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex items-start space-x-4">
                <MapPin className="text-primary-600 flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-gray-800">উপজেলা</h4>
                  <p className="text-sm text-gray-600">সদর, রামু ও ঈদগাঁও</p>
                </div>
              </div>
            </div>
          </div>

          <a 
            href="https://maps.app.goo.gl/wpd9u6QqCWqcQDXAs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="lg:w-1/2 w-full block group"
            title="গুগল ম্যাপে কক্সবাজার-৩ নির্বাচনী এলাকা দেখুন"
          >
            {/* Map Container */}
            <div className="rounded-2xl overflow-hidden shadow-2xl relative h-96 w-full bg-white border border-gray-100 transition duration-300 group-hover:shadow-3xl">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/%E0%A6%95%E0%A6%95%E0%A7%8D%E0%A6%B8%E0%A6%AC%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0-%E0%A7%A9.svg/500px-%E0%A6%95%E0%A6%95%E0%A7%8D%E0%A6%B8%E0%A6%AC%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0-%E0%A7%A9.svg.png" 
                alt="মানচিত্র: কক্সবাজার-৩ (সদর, রামু, ঈদগাঁও)" 
                className="w-full h-full object-contain p-6 transition duration-500 group-hover:scale-105"
              />
              {/* Overlay with Button */}
              <div className="absolute inset-0 bg-black/5 hover:bg-black/10 transition duration-300 flex items-center justify-center">
                 <span className="bg-white/90 text-primary-700 px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 transform transition duration-300 group-hover:-translate-y-1">
                   <MapPin size={20} />
                   গুগল ম্যাপে দেখুন
                 </span>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Constituency;