import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 border-b border-gray-800 pb-12">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">লুৎফুর রহমান কাজল</h2>
            <p className="text-gray-400 max-w-sm mb-6">
              সাবেক সংসদ সদস্য, কক্সবাজার-৩। <br/>
              দেশের উন্নয়ন ও মানুষের কল্যাণে নিবেদিত প্রাণ।
            </p>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} সর্বস্বত্ব সংরক্ষিত।
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-primary-500">দ্রুত লিংক</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#biography" className="hover:text-white transition">জীবনী</a></li>
              <li><a href="#achievements" className="hover:text-white transition">সাফল্য</a></li>
              <li><a href="#media" className="hover:text-white transition">মিডিয়া গ্যালারি</a></li>
              <li><a href="#documents" className="hover:text-white transition">ডাউনলোড</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-primary-500">তথ্যসূত্র ও লিংক</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://www.parliament.gov.bd/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">বাংলাদেশ জাতীয় সংসদ</a></li>
              <li><a href="https://www.ecs.gov.bd/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">নির্বাচন কমিশন</a></li>
              <li><a href="https://www.bnpbd.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">বিএনপি অফিসিয়াল সাইট</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-600 text-sm">
           Design and Developed by Mojib Rsm
        </div>
      </div>
    </footer>
  );
};

export default Footer;