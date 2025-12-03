
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-48 md:pt-64 pb-20 text-white overflow-hidden bg-gray-900">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: 'url("https://d2u0ktu8omkpf6.cloudfront.net/f6c28c59a4de6d27f612cb5f16171ba1db64cdf75bca42b6.jpg")' }} 
      ></div>

      <div className="container mx-auto px-4 relative z-20 text-center md:text-left md:flex md:items-center md:justify-between">
        
        <div className="md:w-1/2 space-y-6 animate-fade-in-up order-2 md:order-1">
          <span className="inline-block bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wider mb-2 shadow-sm">
            কক্সবাজার-৩ (সদর-রামু-ঈদগাঁও)
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            লুৎফুর রহমান <span className="text-primary-500">কাজল</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light">
            রাজনীতিবিদ ও শিল্প উদ্যোক্তা
          </p>
          <p className="text-gray-300 max-w-lg leading-relaxed mx-auto md:mx-0">
            গণতন্ত্র, উন্নয়ন এবং জনগণের অধিকার আদায়ের সংগ্রামে সর্বদা অবিচল। কক্সবাজারের মাটি ও মানুষের নেতা।
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <Link 
              to="/biography" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded shadow-lg transition duration-300 font-medium text-center"
            >
              বিস্তারিত জানুন
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded shadow-lg transition duration-300 font-medium text-center"
            >
              যোগাযোগ করুন
            </Link>
          </div>
        </div>

        {/* Profile Image Area */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0">
          <div className="relative w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-white/20 rounded-full overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 backdrop-blur-sm bg-white/10">
             <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full z-30 shadow-lg animate-pulse">
                জননেতা
             </div>
             <img 
               src="https://thedailymorningglory.com/wp-content/uploads/2025/11/003.jpg" 
               alt="Lutfur Rahman Kajal" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
