import React from 'react';
import { User, BookOpen, Briefcase, Flag } from 'lucide-react';

const Biography: React.FC = () => {
  return (
    <section id="biography" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-primary-600 inline-block pb-2">
            লুৎফুর রহমান কাজলের জীবনী - অভিজ্ঞতা, নেতৃত্ব ও সেবা
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            একজন বিশিষ্ট রাজনীতিবিদ, শিল্প উদ্যোক্তা এবং সমাজসেবক হিসেবে তাঁর বর্ণাঢ্য কর্মময় জীবন ও রাজনৈতিক ইতিহাস।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="mt-1">
                <div className="bg-primary-100 p-3 rounded-full text-primary-700">
                  <User size={24} />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">প্রারম্ভিক জীবন ও পরিবার</h2>
                <p className="text-gray-600 leading-relaxed text-justify">
                   লুৎফুর রহমান কাজলের জন্ম ১৯৬০ সালের ১৮ নভেম্বর। তিনি কক্সবাজারের এক সম্ভ্রান্ত রাজনৈতিক ও ব্যবসায়ী পরিবারের সন্তান। তাঁর পিতা মরহুম আলহাজ্ব মোস্তাফিজুর রহমান ছিলেন প্রখ্যাত শিল্প উদ্যোক্তা এবং মাতা সালেহা খানম ছিলেন সাবেক সংসদ সদস্য। পরিবারের জনসেবামূলক ঐতিহ্যই তাঁকে রাজনীতিতে উদ্বুদ্ধ করেছে।
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1">
                <div className="bg-primary-100 p-3 rounded-full text-primary-700">
                  <BookOpen size={24} />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">শিক্ষা ও মেধা</h2>
                <p className="text-gray-600 leading-relaxed">
                  তিনি বাণিজ্যে স্নাতক (B.Com) ডিগ্রি অর্জন করেছেন। প্রাতিষ্ঠানিক শিক্ষার পাশাপাশি বাস্তব জীবনের অভিজ্ঞতা এবং ব্যবসায়িক জ্ঞান তাঁকে একজন দূরদর্শী নেতা হিসেবে গড়ে তুলেছে।
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
             <div className="flex gap-4">
              <div className="mt-1">
                <div className="bg-primary-100 p-3 rounded-full text-primary-700">
                  <Flag size={24} />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">রাজনীতি ও নেতৃত্ব</h2>
                <p className="text-gray-600 leading-relaxed text-justify">
                  ১৯৮০ সালে ছাত্রদলের মাধ্যমে রাজনীতিতে হাতেখড়ি। তিনি ২০০৮ সালে কক্সবাজার-৩ আসন থেকে প্রথমবার সংসদ সদস্য নির্বাচিত হন (নবম জাতীয় সংসদ) এবং ২০০৯ থেকে ২০১৪ সাল পর্যন্ত দায়িত্ব পালন করেন। বর্তমানে তিনি বিএনপির কেন্দ্রীয় নির্বাহী কমিটির মৎস্যজীবী বিষয়ক সম্পাদক।
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1">
                <div className="bg-primary-100 p-3 rounded-full text-primary-700">
                  <Briefcase size={24} />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">পেশা ও শিল্প উদ্যোগ</h2>
                <p className="text-gray-600 leading-relaxed">
                  রাজনীতির পাশাপাশি তিনি একজন সফল ব্যবসায়ী। তাঁর পেশা মূলত কৃষিভিত্তিক ব্যবসা (Agri-based Business) এবং হোটেল শিল্প। তিনি 'হোটেল নিরিবিলি অর্কিড লিমিটেড' এবং 'নিরিবিলি গ্রুপ'-এর সাথে যুক্ত থেকে কক্সবাজারের অর্থনীতি ও কর্মসংস্থানে গুরুত্বপূর্ণ অবদান রাখছেন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;