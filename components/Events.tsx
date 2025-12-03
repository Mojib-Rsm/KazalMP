import React from 'react';
import { EVENTS_DATA } from '../constants';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 border-b-4 border-primary-600 inline-block pb-2">
                    অনুষ্ঠান ও সম্মেলন
                </h2>
                <p className="text-gray-600">সাম্প্রতিক ও আসন্ন দলীয় কর্মসূচি</p>
            </div>
            <button className="hidden md:block text-primary-600 font-semibold hover:underline mt-4 md:mt-0">
                সকল ইভেন্ট দেখুন &rarr;
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENTS_DATA.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100">
              <div className={`p-1 ${event.type === 'Upcoming' ? 'bg-primary-500' : 'bg-gray-400'}`}></div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${event.type === 'Upcoming' ? 'bg-primary-50 text-primary-700' : 'bg-gray-100 text-gray-600'}`}>
                        {event.type === 'Upcoming' ? 'আসন্ন' : 'সম্পন্ন'}
                    </span>
                    <div className="text-center bg-gray-50 rounded p-2 min-w-[60px] border border-gray-200">
                        <span className="block text-xl font-bold text-gray-800">{event.date.split(',')[0].split(' ')[0]}</span>
                        <span className="block text-xs text-gray-500">{event.date.split(',')[0].split(' ')[1]}</span>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-primary-600 transition-colors cursor-pointer">
                    {event.title}
                </h3>
                
                <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={16} className="mr-2 text-primary-500" />
                        {event.date}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                        <MapPin size={16} className="mr-2 text-primary-500" />
                        {event.location}
                    </div>
                </div>

                <p className="text-gray-600 text-sm mb-6 flex-grow border-t border-gray-50 pt-4">
                    {event.description}
                </p>

                <button className="w-full mt-auto py-2 border border-primary-600 text-primary-600 rounded font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-300 text-sm">
                    বিস্তারিত দেখুন
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;