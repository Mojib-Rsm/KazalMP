
import React, { useState, useEffect } from 'react';

// Recommended Image Size: 1920x600px or 1920x800px
// File Size: Keep under 300KB for faster loading
// Format: WebP or JPG
const BANNER_BG_IMAGE = "https://d2u0ktu8omkpf6.cloudfront.net/f6c28c59a4de6d27f612cb5f16171ba1db64cdf75bca42b6.jpg";

const CampaignBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      type: 'fade',
      content: (
        <div className="flex items-center justify-center w-full h-full p-2">
           <img 
             src="https://ik.imagekit.io/uekohag7w/bnp/mojib.png" 
             alt="Campaign Special Banner" 
             className="w-full max-w-5xl h-auto max-h-[400px] object-contain animate-pop-in drop-shadow-2xl"
           />
        </div>
      )
    },
    {
      id: 1,
      type: 'stomp',
      content: (
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
           <div className="relative animate-stomp">
              <img 
                src="https://ik.imagekit.io/uekohag7w/bnp/dhaner-shish-seeklogo.png" 
                alt="Dhaner Shish" 
                className="h-32 md:h-48 w-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              />
           </div>
           <div className="text-center md:text-left z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight animate-slide-up" style={{animationDelay: '0.3s'}}>
                তারুণ্যের প্রথম ভোট
              </h2>
              <h2 className="text-4xl md:text-6xl font-black text-yellow-400 text-shadow-glow mt-2 animate-stomp" style={{animationDelay: '0.6s'}}>
                ধানের শীষের <span className="text-white">পক্ষে হোক</span>
              </h2>
           </div>
        </div>
      )
    },
    {
      id: 2,
      type: 'wipe',
      content: (
        <div className="flex flex-col items-center justify-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 animate-slide-up">
               দেশ বাঁচাতে
            </h2>
            <div className="relative">
                <img 
                    src="https://ik.imagekit.io/uekohag7w/bnp/dhaner-shish-a-vote-din-seeklogo.png" 
                    alt="Vote Logo" 
                    className="h-40 md:h-56 w-auto drop-shadow-2xl animate-pop-in"
                />
            </div>
             <h2 className="text-4xl md:text-6xl font-black text-red-500 mt-4 text-shadow-strong animate-wipe" style={{animationDelay: '0.5s'}}>
               গণতন্ত্র পুনরুদ্ধার করুন
            </h2>
        </div>
      )
    },
    {
      id: 3,
      type: 'succession',
      content: (
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
           <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-200 mb-2 animate-slide-up" style={{animationDelay: '0.1s'}}>
                 আমার ভোট, আপনার ভোট
              </h2>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-200 mb-4 animate-slide-up" style={{animationDelay: '0.3s'}}>
                 সবার ভোট —
              </h2>
              <div className="bg-green-700 text-white px-6 py-2 rounded transform -skew-x-12 inline-block shadow-lg animate-stomp" style={{animationDelay: '0.6s'}}>
                 <h2 className="text-4xl md:text-6xl font-black transform skew-x-12">
                    ধানের শীষে হোক
                 </h2>
              </div>
           </div>
           <div className="order-1 md:order-2 animate-pulse-glow">
              <img 
                src="https://ik.imagekit.io/uekohag7w/bnp/dhaner-shish-seeklogo.png" 
                alt="Logo" 
                className="h-32 md:h-48 w-auto"
              />
           </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-[450px] md:h-[500px] bg-gray-900 overflow-hidden border-y-4 border-yellow-500 shadow-2xl flex items-center justify-center">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-black/80 to-green-900/90 z-10"></div>
         <img 
            src={BANNER_BG_IMAGE}
            alt="Campaign Background" 
            className="w-full h-full object-cover object-center opacity-30 animate-pulse-glow"
            style={{animationDuration: '10s'}}
         />
         {/* Texture Overlay */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 z-10 mix-blend-overlay"></div>
      </div>

      {/* Slide Content */}
      <div className="container mx-auto px-4 relative z-20 w-full h-full flex items-center justify-center">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out transform ${
              index === currentSlide 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-95 translate-y-8 pointer-events-none'
            }`}
          >
            {slide.content}
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 border-2 border-white/50 ${
              index === currentSlide 
                ? 'bg-yellow-400 w-8 md:w-10' 
                : 'bg-transparent hover:bg-white/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default CampaignBanner;
