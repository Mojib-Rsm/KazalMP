
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, Facebook, Youtube, Printer, Users } from 'lucide-react';

const Contact: React.FC = () => {
  const [formType, setFormType] = useState<'Message' | 'Volunteer'>('Message');
  const [designation, setDesignation] = useState('কোনো পদ নেই');

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-primary-600 inline-block pb-2">যোগাযোগ ও টিম</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              লুৎফুর রহমান কাজলের সাথে যোগাযোগের বিস্তারিত তথ্য এবং আমাদের ক্যাম্পেইন টিমে যোগ দেওয়ার সুযোগ।
            </p>

            <div className="space-y-8">
              {/* Address Section */}
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-full text-primary-600 mt-1">
                  <MapPin size={24} />
                </div>
                <div className="space-y-4 w-full">
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">ঢাকা ঠিকানা</h4>
                    <p className="text-gray-600">{CONTACT_INFO.dhakaAddress}</p>
                  </div>
                  <div className="border-t border-gray-100 pt-2">
                    <h4 className="font-bold text-gray-800 text-lg">স্থায়ী ঠিকানা</h4>
                    <p className="text-gray-600">{CONTACT_INFO.permanentAddress}</p>
                  </div>
                </div>
              </div>

              {/* Phones Section */}
              <div className="flex items-start gap-4">
                 <div className="bg-primary-100 p-3 rounded-full text-primary-600 mt-1">
                  <Phone size={24} />
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-gray-800 text-lg mb-2">ফোন নম্বরসমূহ</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-gray-600">
                    <p><span className="font-semibold text-gray-700">মোবাইল:</span> {CONTACT_INFO.phones.cell}</p>
                    <p><span className="font-semibold text-gray-700">অফিস:</span> {CONTACT_INFO.phones.office}</p>
                    <p><span className="font-semibold text-gray-700">বাসা:</span> {CONTACT_INFO.phones.home}</p>
                    <p className="flex items-center gap-2">
                      <Printer size={16} className="text-gray-500"/>
                      <span className="font-semibold text-gray-700">ফ্যাক্স:</span> {CONTACT_INFO.phones.fax}
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Section */}
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-full text-primary-600 mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">ইমেইল</h4>
                  <div className="space-y-1">
                    {CONTACT_INFO.emails.map((email, idx) => (
                      <p key={idx} className="text-primary-700 hover:underline cursor-pointer">
                        <a href={`mailto:${email}`}>{email}</a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-bold text-gray-800 mb-4">সোশ্যাল মিডিয়া</h4>
              <div className="flex gap-4">
                <a href={CONTACT_INFO.facebook} target="_blank" rel="noreferrer" className="bg-[#1877F2] text-white p-3 rounded-full hover:bg-blue-700 transition shadow-sm">
                  <Facebook size={24} />
                </a>
                <a href={CONTACT_INFO.youtube} target="_blank" rel="noreferrer" className="bg-[#FF0000] text-white p-3 rounded-full hover:bg-red-700 transition shadow-sm">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Dynamic Form */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm h-fit">
            <div className="flex mb-6 border-b border-gray-200">
                <button 
                    className={`flex-1 pb-3 font-bold text-lg transition ${formType === 'Message' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setFormType('Message')}
                >
                    বার্তা পাঠান
                </button>
                <button 
                    className={`flex-1 pb-3 font-bold text-lg transition ${formType === 'Volunteer' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setFormType('Volunteer')}
                >
                    ভলান্টিয়ার হোন
                </button>
            </div>

            {formType === 'Message' ? (
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">আপনার নাম</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="নাম লিখুন" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ফোন নম্বর</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="ফোন নম্বর" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">বার্তা</label>
                    <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="আপনার মতামত বা পরামর্শ লিখুন..."></textarea>
                </div>
                <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded transition duration-300 shadow-md">
                    বার্তা প্রেরণ করুন
                </button>
                </form>
            ) : (
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="p-4 bg-primary-50 rounded-lg mb-4 text-sm text-primary-800 flex items-start gap-2">
                        <Users size={18} className="mt-0.5 flex-shrink-0" />
                        আমাদের নির্বাচনী প্রচারণায় স্বেচ্ছাসেবী হিসেবে যোগ দিন এবং পরিবর্তনের অংশ হোন।
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">আপনার নাম</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="পূর্ণ নাম" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">বয়স</label>
                            <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="বয়স" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">ইউনিয়ন/এলাকা</label>
                            <select className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition">
                                <option>সদর</option>
                                <option>রামু</option>
                                <option>ঈদগাঁও</option>
                            </select>
                        </div>
                    </div>
                    
                    {/* পদ-পদবী অপশন */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">বর্তমান পদবী (যদি থাকে)</label>
                        <select 
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition cursor-pointer"
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                        >
                            <option value="কোনো পদ নেই">কোনো পদ নেই</option>
                            <option value="সদস্য">সদস্য</option>
                            <option value="কর্মী">কর্মী</option>
                            <option value="সভাপতি">সভাপতি</option>
                            <option value="সহ-সভাপতি">সহ-সভাপতি</option>
                            <option value="সাধারণ সম্পাদক">সাধারণ সম্পাদক</option>
                            <option value="যুগ্ম সাধারণ সম্পাদক">যুগ্ম সাধারণ সম্পাদক</option>
                            <option value="সাংগঠনিক সম্পাদক">সাংগঠনিক সম্পাদক</option>
                            <option value="অন্যান্য">অন্যান্য</option>
                        </select>
                        
                        {designation === 'অন্যান্য' && (
                            <input 
                                type="text" 
                                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition animate-fade-in" 
                                placeholder="আপনার পদবী লিখুন" 
                            />
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">মোবাইল নম্বর</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="সচল মোবাইল নম্বর" />
                    </div>
                    <button type="submit" className="w-full bg-primary-700 hover:bg-primary-800 text-white font-bold py-3 rounded transition duration-300 shadow-md">
                        টিমে যোগ দিন
                    </button>
                </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
