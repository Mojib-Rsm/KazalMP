
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { PlayCircle, Image as ImageIcon } from 'lucide-react';

const MediaGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Political' | 'Development' | 'Social' | 'Family'>('All');

  const filteredImages = activeCategory === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <section id="media" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-primary-600 inline-block pb-2">
            ফটো ও ভিডিও গ্যালারি
          </h2>
          <p className="text-gray-600">জনসভা, উন্নয়ন কার্যক্রম এবং সামাজিক মুহূর্তের স্থিরচিত্র</p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {['All', 'Political', 'Development', 'Social', 'Family'].map((cat) => (
                <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat as any)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeCategory === cat ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                    {cat === 'All' && 'সব'}
                    {cat === 'Political' && 'রাজনৈতিক'}
                    {cat === 'Development' && 'উন্নয়ন'}
                    {cat === 'Social' && 'সামাজিক'}
                    {cat === 'Family' && 'পারিবারিক'}
                </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-md aspect-square cursor-pointer">
              <img 
                src={item.url} 
                alt={item.caption} 
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm">
                {item.category === 'Political' && 'রাজনৈতিক'}
                {item.category === 'Development' && 'উন্নয়ন'}
                {item.category === 'Social' && 'সামাজিক'}
                {item.category === 'Family' && 'পারিবারিক'}
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center p-4 text-center">
                 {item.type === 'video' ? <PlayCircle className="text-white w-12 h-12 mb-2" /> : <ImageIcon className="text-white w-8 h-8 mb-2" />}
                 <p className="text-white font-medium text-sm">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
