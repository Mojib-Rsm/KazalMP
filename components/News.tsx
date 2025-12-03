
import React, { useState } from 'react';
import { NEWS_DATA } from '../constants';
import { Newspaper, Video, FileText, ArrowRight } from 'lucide-react';

const News: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'News' | 'Interview' | 'PressNote'>('All');

  const filteredNews = filter === 'All' ? NEWS_DATA : NEWS_DATA.filter(item => item.type === filter);

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-primary-600 inline-block pb-2">
            সংবাদ ও মিডিয়া কাভারেজ
          </h2>
          <p className="text-gray-600">লুৎফুর রহমান কাজলের সাম্প্রতিক কর্মকাণ্ড নিয়ে গণমাধ্যমের প্রতিবেদন</p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button 
                onClick={() => setFilter('All')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition ${filter === 'All' ? 'bg-primary-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-200'}`}
            >
                সকল সংবাদ
            </button>
            <button 
                onClick={() => setFilter('News')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition ${filter === 'News' ? 'bg-primary-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-200'}`}
            >
                খবর
            </button>
            <button 
                onClick={() => setFilter('Interview')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition ${filter === 'Interview' ? 'bg-primary-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-200'}`}
            >
                সাক্ষাৎকার
            </button>
            <button 
                onClick={() => setFilter('PressNote')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition ${filter === 'PressNote' ? 'bg-primary-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-200'}`}
            >
                প্রেস নোট
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition duration-500 hover:scale-105" />
                <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded shadow">
                    {item.type === 'News' && 'খবর'}
                    {item.type === 'Interview' && 'সাক্ষাৎকার'}
                    {item.type === 'PressNote' && 'প্রেস নোট'}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
                    <span className="flex items-center gap-1"><Newspaper size={12}/> {item.source}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-primary-600 transition-colors line-clamp-2">
                    {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {item.summary}
                </p>
                <a href={item.link} className="inline-flex items-center text-primary-600 font-semibold hover:underline mt-auto">
                    আরও পড়ুন <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
