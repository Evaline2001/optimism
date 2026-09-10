import React from 'react';
import { motion } from 'motion/react';
import { AfricaMap } from './AfricaMap';
import { KineticHeadline } from './KineticHeadline';
import { HeroManifesto } from './HeroManifesto';

interface HeroProps {
  onStartQuiz: () => void;
  onOpenGetBook: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartQuiz, onOpenGetBook }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-8 md:pt-10 md:pb-12 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Copy & Calls to Action matching PDF Page 1 */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-5">
            
            {/* Byline matching Home.png: clean text above headline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 0.8, 0.26, 0.99] }}
              className="text-xs sm:text-sm md:text-[15px] font-medium text-[#475569] tracking-normal"
            >
              A book by Dr Anand Kulkarni and supported by Africa No Filter
            </motion.div>

            {/* Main Headline */}
            <KineticHeadline />

            {/* Subtitle / Lead Paragraph matching Home.png */}
            <HeroManifesto className="max-w-2xl" />

            {/* Action Buttons: Lime Green Quiz CTA & Blue Get The Book CTA matching Home.png */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.45, ease: [0.22, 0.8, 0.26, 0.99] }}
              className="flex flex-wrap items-center gap-3.5 pt-1"
            >
              {/* Lime Green Button */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                id="hero-quiz-cta"
                onClick={onStartQuiz}
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#A3E635] hover:bg-[#92D824] text-[#0F172A] font-bold text-xs sm:text-sm md:text-[15px] tracking-normal transition-all shadow-md hover:shadow-lg cursor-pointer inline-flex items-center justify-center min-h-[44px]"
              >
                Take the Optimism Quiz
              </motion.button>

              {/* Blue Button */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                id="hero-getbook-cta"
                onClick={onOpenGetBook}
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-bold text-xs sm:text-sm md:text-[15px] tracking-normal transition-all shadow-md hover:shadow-lg cursor-pointer min-h-[44px] flex items-center justify-center"
              >
                Get the book
              </motion.button>
            </motion.div>

            {/* Secondary Metadata matching Home.png under buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.55 }}
              className="text-xs sm:text-[13px] text-[#64748B] flex items-center flex-wrap gap-2 pt-1 font-normal"
            >
              <span>
                Edited by Dianna Games · Hundreds of data points, indices &amp; real stories from across the continent
              </span>
            </motion.div>

          </div>

          {/* Right Column: Faceted Purple Africa Map with Floating Stat Badges */}
          <div className="lg:col-span-6 flex justify-center items-center py-2 lg:py-0">
            <AfricaMap className="w-full max-w-[560px] sm:max-w-[620px] lg:max-w-[680px]" />
          </div>

        </div>
      </div>
    </section>
  );
};
