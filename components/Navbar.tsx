
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'shadow-none'}`}>
      
      {/* Top Banner - Leaders & Flags (Collapses on Scroll) */}
      <div 
        className={`bg-white border-b border-gray-100 overflow-hidden transition-all duration-500 ease-in-out ${
          isScrolled ? 'max-h-0 opacity-0 py-0' : 'max-h-40 opacity-100 py-2 md:py-3'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* Left: Leaders (Original Large View) */}
          <div className="flex items-center gap-3 md:gap-4">
             {/* Ziaur Rahman */}
             <div className="relative group cursor-pointer flex flex-col items-center" title="শহীদ রাষ্ট্রপতি জিয়াউর রহমান">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmlLO3jDrSryEaYjQGKMgor0p0HNycPCPfUg&s" 
                  alt="Ziaur Rahman" 
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-green-600 object-cover object-top shadow-sm p-0.5"
                />
             </div>
             {/* Khaleda Zia */}
             <div className="relative group cursor-pointer flex flex-col items-center" title="বেগম খালেদা জিয়া">
                <img 
                  src="https://d2u0ktu8omkpf6.cloudfront.net/75ec3bca7be014631705269777eaa2858f50b43ed647e350.jpg" 
                  alt="Khaleda Zia" 
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-green-600 object-cover object-top shadow-sm p-0.5"
                />
             </div>
             {/* Tarique Rahman */}
             <div className="relative group cursor-pointer flex flex-col items-center" title="তারেক রহমান">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tarique_Rahman_in_november_2021.jpg/250px-Tarique_Rahman_in_november_2021.jpg" 
                  alt="Tarique Rahman" 
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-green-600 object-cover object-top shadow-sm p-0.5"
                />
             </div>
          </div>

          {/* Right: Flags */}
          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex flex-col items-center">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg" 
                alt="Bangladesh Flag" 
                referrerPolicy="no-referrer"
                className="h-8 md:h-10 w-auto shadow-sm drop-shadow border border-gray-100"
                />
            </div>
            <div className="flex flex-col items-center">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Bangladesh_Nationalist_Party.svg/2560px-Flag_of_the_Bangladesh_Nationalist_Party.svg.png" 
                alt="BNP Flag" 
                referrerPolicy="no-referrer"
                className="h-8 md:h-10 w-auto shadow-sm drop-shadow border border-gray-100"
                />
            </div>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
        
        {/* Brand - Always visible */}
        <Link to="/" className="flex flex-col group z-30 relative shrink-0 transition-opacity duration-300 opacity-100">
           <span className="text-lg md:text-2xl font-bold font-sans text-primary-700 leading-none group-hover:text-primary-800 transition">
             লুৎফুর রহমান <span className="text-gray-800">কাজল</span>
           </span>
           <span className="text-xs md:text-sm text-gray-500 font-medium tracking-wider">
             সাবেক সংসদ সদস্য | কক্সবাজার-৩
           </span>
        </Link>

        {/* CENTERED CONTENT (Visible ONLY on Scroll) */}
        {/* Mobile: Static position to avoid overlap */}
        {/* Desktop: Absolute center */}
        <div className={`flex items-center gap-3 transition-all duration-500 z-20 
            md:absolute md:left-1/2 md:transform md:-translate-x-1/2 
            ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none md:pointer-events-auto'}
            ${!isScrolled && 'hidden md:flex'} /* Hide on mobile when not scrolled */
        `}>
             {/* Desktop Only: Other Leaders */}
             <div className="hidden md:flex items-center gap-2">
                 <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmlLO3jDrSryEaYjQGKMgor0p0HNycPCPfUg&s" 
                  alt="Zia" 
                  className="w-10 h-10 rounded-full border-2 border-green-600 object-cover p-0.5"
                  title="শহীদ রাষ্ট্রপতি জিয়াউর রহমান"
                />
                <img 
                  src="https://d2u0ktu8omkpf6.cloudfront.net/75ec3bca7be014631705269777eaa2858f50b43ed647e350.jpg" 
                  alt="Khaleda" 
                  className="w-10 h-10 rounded-full border-2 border-green-600 object-cover p-0.5"
                  title="বেগম খালেদা জিয়া"
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tarique_Rahman_in_november_2021.jpg/250px-Tarique_Rahman_in_november_2021.jpg" 
                  alt="Tarique" 
                  className="w-10 h-10 rounded-full border-2 border-green-600 object-cover p-0.5"
                  title="তারেক রহমান"
                />
             </div>

             {/* Lutfur Rahman Kajal (Visible on Mobile & Desktop) */}
             <img 
               src="https://thedailymorningglory.com/wp-content/uploads/2025/11/003.jpg" 
               className="w-10 h-10 md:w-10 md:h-10 rounded-full border-2 border-primary-600 object-cover shadow-sm"
               alt="Kajal"
               title="লুৎফুর রহমান কাজল"
             />
             
             <div className="w-px h-6 bg-gray-300 mx-1"></div>

             {/* Flags */}
             <div className="flex items-center gap-2">
                {/* Desktop Only: BD Flag */}
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg" 
                    alt="BD" 
                    className="hidden md:block h-6 w-auto shadow-sm"
                />
                
                {/* BNP Flag (Visible on Mobile & Desktop) */}
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Bangladesh_Nationalist_Party.svg/2560px-Flag_of_the_Bangladesh_Nationalist_Party.svg.png" 
                    alt="BNP" 
                    className="h-6 w-auto shadow-sm"
                />
             </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 z-30 relative bg-white pl-4">
          {NAV_LINKS.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href} 
              className={({ isActive }) => 
                `text-sm font-semibold transition uppercase tracking-wide hover:underline underline-offset-4 decoration-2 decoration-primary-500 ${isActive ? 'text-primary-600 underline' : 'text-gray-700 hover:text-primary-600'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-700 focus:outline-none p-2 hover:bg-gray-100 rounded-md transition z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col pt-24 pb-10 px-6 animate-fade-in overflow-y-auto">
             <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.href} 
                  className={({ isActive }) => 
                    `py-3 border-b border-gray-100 last:border-0 font-bold text-xl ${isActive ? 'text-primary-600' : 'text-gray-800 active:text-primary-600'}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
             </div>
             <div className="mt-auto pt-8 text-center text-gray-500 text-sm">
                &copy; লুৎফুর রহমান কাজল
             </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
