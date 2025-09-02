import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

interface HeaderProps {
  currentRoute: string;
}

const Header: React.FC<HeaderProps> = ({ currentRoute }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#/home" className="text-2xl font-bold text-white tracking-wider">
            My<span className="text-amber-400">5</span>sourcing
          </a>
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link: NavLink) => (
              <a 
                key={link.label} 
                href={link.href}
                className={`text-gray-300 transition-colors duration-300 relative group ${currentRoute === link.href ? 'text-amber-400' : 'hover:text-amber-400'}`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transition-transform duration-300 transform ${currentRoute === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </a>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu" className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-gray-900 bg-opacity-95 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
        aria-modal="true"
        role="dialog"
      >
        <div className="flex justify-end p-6">
           <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="text-white focus:outline-none">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             </svg>
           </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
          {NAV_LINKS.map((link: NavLink) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = link.href;
                setIsMenuOpen(false);
              }}
              className={`text-3xl font-medium transition-colors duration-300 ${currentRoute === link.href ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;