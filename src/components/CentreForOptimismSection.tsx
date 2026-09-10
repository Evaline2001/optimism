import React from 'react';
import { motion } from 'motion/react';
import { Globe, Users } from 'lucide-react';
import centreForOptimismLogo from '../assets/images/centre_for_optimism_logo.png';

export const CentreForOptimismSection: React.FC = () => {
  return (
    <section id="centre-for-optimism" className="py-10 sm:py-14 bg-[#FFFDF9] border-t border-[#F0EBE1] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Organization Story matching PDF Page 6 */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 0.8, 0.26, 0.99] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Tag / Eyebrow */}
            <div>
              <span className="inline-block px-3 py-1 rounded bg-[#DE5541] text-white font-extrabold text-xs tracking-widest uppercase shadow-sm">
                ABOUT
              </span>
            </div>

            {/* Headline matching PDF: THE CENTRE FOR / OPTIMISM */}
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#182352] leading-[0.95] tracking-tight">
              THE CENTRE FOR
              <br />
              OPTIMISM
            </h2>

            {/* Narrative text matching PDF */}
            <div className="space-y-4 text-base sm:text-lg text-[#334155] leading-relaxed font-normal pt-1 max-w-2xl">
              <p>
                The Centre for Optimism is an Australian-based global research and advocacy organization founded in 2018 by former Member of Parliament and Trade Commissioner Victor Perton. It explores and demonstrates how optimism can strengthen leadership, communities and activities, and turn positivity into action.
              </p>
              <p>
                Its work in Africa has included the Nelson Mandela Youth Leadership Summit and the &apos;Hour of African Optimism&apos;. <em>Optimistic Africa</em> builds on this work, exploring optimism as a force for Africa&apos;s development and future.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Official Brand Logo Card matching PDF Page 6 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 0.8, 0.26, 0.99] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-slate-200/80 overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
              <div className="p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-6">
                
                {/* Authentic Centre for Optimism Brand Logo matching Section 11 */}
                <div className="w-full flex items-center justify-center bg-white rounded-xl py-2">
                  <img
                    src={centreForOptimismLogo}
                    alt="The Centre for Optimism"
                    className="w-full max-w-[360px] h-auto object-contain drop-shadow-xs transition-transform duration-300 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                </div>

              

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
