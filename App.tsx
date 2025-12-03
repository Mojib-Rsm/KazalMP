import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CampaignBanner from './components/CampaignBanner';
import Biography from './components/Biography';
import Timeline from './components/Timeline';
import Responsibilities from './components/Responsibilities';
import Constituency from './components/Constituency';
import Achievements from './components/Achievements';
import ElectionStats from './components/ElectionStats';
import MediaGallery from './components/MediaGallery';
import News from './components/News';
import Documents from './components/Documents';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Vision from './components/Vision';
import Support from './components/Support';
import Events from './components/Events';
import FAQ from './components/FAQ';
import Message from './components/Message';
import SEO from './components/SEO';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Internal Page Wrapper for consistent spacing
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="pt-32 md:pt-40 min-h-screen bg-gray-50">
    {children}
  </div>
);

// Common keywords for the entire site
const COMMON_KEYWORDS = [
  "Lutfur Rahman Kajal", "লুৎফুর রহমান কাজল", 
  "Kajal MP", "কাজল এমপি", 
  "Cox's Bazar-3", "কক্সবাজার-৩", 
  "BNP Cox's Bazar", "বিএনপি কক্সবাজার", 
  "Former MP Bangladesh", "সাবেক সংসদ সদস্য",
  "Ramu", "রামু", "Eidgaon", "ঈদগাঁও",
  "Bangladesh Nationalist Party", "বাংলাদেশ জাতীয়তাবাদী দল",
  "Niribili Group", "নিরিবিলি গ্রুপ"
];

// HomePage now includes ALL sections to provide the "full page" experience on the root URL
const HomePage: React.FC = () => (
  <>
    <SEO 
      title="Lutfur Rahman Kajal | লুৎফুর রহমান কাজল | Former MP Cox's Bazar-3" 
      description="Official website of Lutfur Rahman Kajal, former Member of Parliament (Cox's Bazar-3) and BNP Central Fisheries Affairs Secretary. Explore his biography, vision, and development works."
      keywords={[...COMMON_KEYWORDS, "Lutfur Rahman Kajal Website", "Political Portfolio", "কাজলের জীবনী"]}
    />
    <Hero />
    <CampaignBanner />
    <Biography />
    <Timeline />
    <Vision />
    <Responsibilities />
    <Support />
    <Constituency />
    <Achievements />
    <ElectionStats />
    <MediaGallery />
    <Documents />
    <News />
    <Events />
    <Message />
    <Contact />
    <FAQ />
  </>
);

const BiographyPage: React.FC = () => (
  <PageWrapper>
    <SEO 
      title="Biography | জীবনী | Lutfur Rahman Kajal" 
      description="Political and personal biography of Lutfur Rahman Kajal. From student politics to Parliament Member. লুৎফুর রহমান কাজলের রাজনৈতিক ও ব্যক্তিগত জীবনী।"
      keywords={[...COMMON_KEYWORDS, "Kajal Biography", "Political Career", "কাজলের রাজনৈতিক জীবন"]} 
    />
    <Biography />
    <Timeline />
  </PageWrapper>
);

const VisionPage: React.FC = () => (
  <PageWrapper>
    <SEO 
      title="Vision & Development | ভিশন | Lutfur Rahman Kajal" 
      description="Future plans for Cox's Bazar-3 by Lutfur Rahman Kajal. Education, Tourism, and Infrastructure development. কক্সবাজারের উন্নয়নে লুৎফুর রহমান কাজলের ভিশন।" 
      keywords={[...COMMON_KEYWORDS, "Development Plan", "Cox's Bazar University", "Tourism Development", "উন্নয়ন ভাবনা"]}
    />
    <Vision />
    <Responsibilities />
    <Support />
  </PageWrapper>
);

const AreaPage: React.FC = () => (
  <PageWrapper>
    <SEO 
      title="Constituency Cox's Bazar-3 | নির্বাচনী এলাকা | Lutfur Rahman Kajal" 
      description="Information about Cox's Bazar Sadar, Ramu, and Eidgaon. Development statistics and election history. কক্সবাজার সদর, রামু ও ঈদগাঁও উপজেলার তথ্য।" 
      keywords={[...COMMON_KEYWORDS, "Cox's Bazar Sadar", "Ramu Upazila", "Eidgaon Upazila", "Election Result"]}
    />
    <Constituency />
    <Achievements />
    <ElectionStats />
  </PageWrapper>
);

const MediaPage: React.FC = () => (
  <PageWrapper>
    <SEO 
      title="Photo Gallery | মিডিয়া গ্যালারি | Lutfur Rahman Kajal" 
      description="Photos and videos of Lutfur Rahman Kajal's political programs, public meetings, and social work. লুৎফুর রহমান কাজলের রাজনৈতিক কর্মসূচির ছবি ও ভিডিও।" 
      keywords={[...COMMON_KEYWORDS, "Kajal Photos", "Political Rally", "BNP Program Photos", "জনসভার ছবি"]}
    />
    <MediaGallery />
    <Documents />
  </PageWrapper>
);

const NewsPage: React.FC = () => (
  <PageWrapper>
    <SEO 
      title="News & Updates | সংবাদ | Lutfur Rahman Kajal" 
      description="Latest news, press releases, and interviews of Lutfur Rahman Kajal. লুৎফুর রহমান কাজলের সর্বশেষ সংবাদ এবং দলীয় কর্মসূচির আপডেট।" 
      keywords={[...COMMON_KEYWORDS, "Latest News", "Political News", "BNP News Cox's Bazar", "প্রেস বিজ্ঞপ্তি"]}
    />
    <News />
    <Events />
  </PageWrapper>
);

const ContactPage: React.FC = () => (
  <PageWrapper>
    <SEO 
      title="Contact | যোগাযোগ | Lutfur Rahman Kajal" 
      description="Contact Lutfur Rahman Kajal. Office address, phone number, and email. Join the volunteer team. সরাসরি যোগাযোগ করুন অথবা ভলান্টিয়ার হিসেবে যুক্ত হোন।" 
      keywords={[...COMMON_KEYWORDS, "Contact Number", "Dhaka Office", "Cox's Bazar Office", "Join BNP"] }
    />
    <Contact />
    <FAQ />
  </PageWrapper>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen font-sans">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/biography" element={<BiographyPage />} />
              <Route path="/vision" element={<VisionPage />} />
              <Route path="/area" element={<AreaPage />} />
              <Route path="/media" element={<MediaPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Catch all - redirect to home */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </HelmetProvider>
  );
};

export default App;