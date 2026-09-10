import React from 'react';
import { motion } from 'motion/react';
import footerCentreOptimism from '../assets/images/footer_centre_optimism.png';
import footerAfricaNoFilter from '../assets/images/footer_africa_no_filter.png';

interface FooterProps {
  onOpenGetBook?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGetBook }) => {
  const navLinks = [
    { label: 'About the Book', href: '#why-exists' },
    { label: 'The Funnel', href: '#funnel' },
    { label: 'Chapters', href: '#chapters' },
    { label: 'The Evidence', href: '#evidence' },
    { label: 'Meet the Author', href: '#author' },
    { label: 'Take the Quiz', href: '#quiz' },
  ];

  return (
    <footer className="bg-[#7D1BA1] text-white pt-6 pb-5 sm:pt-7 sm:pb-6 border-t border-purple-900/40 relative overflow-hidden sm:rounded-b-2xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Upper Row: Brand info on Left, Navigation on Right */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-4 sm:pb-5">
          
          {/* Left Column: Title, Subtitle, and Get The Book button */}
          <div className="space-y-2.5 max-w-xl text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white leading-tight">
              Optimistic Africa
            </h2>
            
            <div className="space-y-0.5 text-xs sm:text-[13px] text-white/90 font-normal leading-snug">
              <p>A book by Dr Anand Kulkarni and supported by Africa No Filter</p>
              <p>Edited by Dianna Games</p>
            </div>

            <div className="pt-1.5">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenGetBook}
                className="px-4 py-1.5 rounded-full bg-[#FAEE43] hover:bg-[#FACC15] text-[#1D4ED8] font-semibold text-xs sm:text-[13px] transition-all shadow-xs cursor-pointer inline-flex items-center justify-center"
              >
                Get the book
              </motion.button>
            </div>
          </div>

          {/* Right Column: Clean Navigation Menu matching image */}
          <nav className="text-left md:text-right shrink-0 pt-1">
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-white/90 font-normal">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:underline underline-offset-4 transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        {/* Thin Horizontal Divider matching image */}
        <div className="border-t border-white/25 w-full my-3.5 sm:my-4" />

        {/* Bottom Bar: Logos on Left, Dot + 2026 on Right */}
        <div className="flex items-center justify-between gap-4 pt-1">
          {/* Left Partner Logos */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="https://www.centreforoptimism.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center opacity-95 hover:opacity-100 transition-opacity"
              title="The Centre for Optimism"
            >
              <img
                src={footerCentreOptimism}
                alt="The Centre for Optimism"
                className="h-7 sm:h-8 w-auto object-contain rounded-xs"
                referrerPolicy="no-referrer"
              />
            </a>

            <a
              href="https://africanofilter.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center opacity-95 hover:opacity-100 transition-opacity"
              title="Africa No Filter"
            >
              <img
                src={footerAfricaNoFilter}
                alt="Africa No Filter"
                className="h-8 sm:h-9 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* Right: Dot + 2026 */}
          <div className="flex items-center gap-2 text-xs sm:text-[13px] text-white/90 font-medium select-none">
            <span className="w-2 h-2 rounded-full bg-white inline-block shrink-0" />
            <span>2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
