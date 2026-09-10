import React from 'react';
import { motion } from 'motion/react';
import birdImg from '../assets/images/BIRD.png';
import girlImg from '../assets/images/Girl.png';

export const EvidenceSection: React.FC = () => {
  return (
    <section id="evidence" className="pt-10 sm:pt-14 bg-[#FFFDF9] border-t border-[#F0EBE1] overflow-hidden">
      
      {/* 1. Header on Cream Background matching reference */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          
          {/* Left: Cyan Tag + Purple Display Heading */}
          <div className="text-left space-y-2 max-w-xl">
            <span className="block text-xs sm:text-sm font-extrabold tracking-widest text-[#0EA5E9] uppercase">
              THE EVIDENCE
            </span>
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#4A154B] leading-[0.95] tracking-tight">
              A FEW CHARTS THE
              <br />
              HEADLINES LEAVE OUT.
            </h2>
          </div>

          {/* Right: Subtitle paragraph */}
          <div className="md:max-w-xs lg:max-w-sm text-left pt-1">
            <p className="text-sm sm:text-base md:text-[17px] text-[#334155] leading-relaxed font-normal">
              Three small proof points, pulled straight from the book&apos;s indices — peace, poverty and growth.
            </p>
          </div>

        </div>
      </div>

      {/* 2. Full-Bleed Blue Horizon Band with vertical space for the leaping figure and bird into the sky */}
      <div className="relative bg-[#2563EB] pt-16 sm:pt-20 lg:pt-28 pb-14 sm:pb-18 px-4 sm:px-6 lg:px-8 overflow-x-clip">
        <div className="max-w-6xl mx-auto relative">
          
          {/* 3 Evidence Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 items-stretch relative">
            
            {/* =========================================================================
                CARD 1: MORE PEACEFUL THAN YOU'D GUESS (Warm Camel #C07428 / #C87425)
               ========================================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 0.8, 0.26, 0.99] }}
              className="relative rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 bg-[#C87425] text-white shadow-xl flex flex-col justify-between z-10 min-h-[460px] sm:min-h-[480px] overflow-visible"
            >
              {/* Peace Dove perched top-left with Olive Branch matching reference image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 0.8, 0.26, 0.99] }}
                className="absolute -top-16 sm:-top-20 md:-top-24 left-6 sm:left-10 md:left-12 w-32 sm:w-36 md:w-44 pointer-events-none z-20 select-none"
              >
                <img
                  src={birdImg}
                  alt="Peace Dove with Olive Branch"
                  className="w-full h-auto object-contain drop-shadow-md"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <div className="relative z-10 flex-1 flex flex-col justify-between pt-10 sm:pt-14 pb-1">
                <div>
                  {/* Title matching reference image */}
                  <h3 className="font-sans font-medium text-3xl sm:text-[34px] md:text-[38px] text-white tracking-tight leading-[1.08] mb-2.5">
                    More peaceful than
                    <br />
                    you&apos;d guess
                  </h3>

                  {/* Subtitle: 2026 Global Peace Index rank */}
                  <p className="text-[13px] sm:text-[14px] text-white/90 font-normal leading-snug mb-8 sm:mb-10">
                    2026 Global Peace Index rank
                    <br />
                    (lower = more peaceful)
                  </p>

                  {/* Horizontal Line with benchmarks matching reference image */}
                  <div className="py-4 my-auto">
                    <div className="relative pt-6 pb-6">
                      {/* Line */}
                      <div className="w-full h-0.5 bg-white/40 relative">
                        {/* Mauritius - 18th (pink dot #EC4899) */}
                        <div className="absolute left-[12%] -top-7 flex flex-col items-center">
                          <span className="text-[11px] sm:text-xs font-medium text-white whitespace-nowrap mb-1">
                            Mauritius - 18th
                          </span>
                          <div className="w-3.5 h-3.5 rounded-full bg-[#EC4899] ring-2 ring-white/90 shadow-xs" />
                        </div>

                        {/* UK - 39th (with tick/label below) */}
                        <div className="absolute left-[38%] -top-1.5 flex flex-col items-center">
                          <div className="w-3.5 h-3.5 rounded-full bg-[#38BDF8] ring-2 ring-white/90 shadow-xs" />
                          <span className="text-[11px] sm:text-xs font-medium text-white whitespace-nowrap mt-2">
                            UK - 39th
                          </span>
                        </div>

                        {/* US - 134th (yellow/lime dot #E4F817) */}
                        <div className="absolute right-[10%] -top-7 flex flex-col items-center">
                          <span className="text-[11px] sm:text-xs font-medium text-white whitespace-nowrap mb-1">
                            US - 134th
                          </span>
                          <div className="w-3.5 h-3.5 rounded-full bg-[#E4F817] ring-2 ring-white/90 shadow-xs" />
                        </div>
                      </div>

                      {/* End Labels */}
                      <div className="flex justify-between items-center text-xs text-white/85 pt-7 font-normal">
                        <span>More Peaceful</span>
                        <span>Less Peaceful</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Source Footnote */}
                <div className="pt-6 text-[11px] sm:text-[11.5px] text-white/75 font-normal">
                  Source: Global Peace Index 2026, cited in Optimistic Africa
                </div>
              </div>
            </motion.div>

            {/* =========================================================================
                CARD 2: POVERTY IN FREEFALL — MOROCCO (Rich Olive Green #9E9615)
               ========================================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 0.8, 0.26, 0.99] }}
              className="relative rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 bg-[#9E9615] text-white shadow-xl flex flex-col justify-between z-20 min-h-[460px] sm:min-h-[480px] overflow-visible"
            >
              {/* Authentic Leaping Figure:
                  - Scaled proportionally so left foot rests comfortably inside the Poverty card (next to "national")
                  - Right pant cuff sits in the gap and right foot steps cleanly into the Growth (teal) card
                  - Torso and arms leap gracefully into the blue horizon
                  - Text layer on z-20 ensures crystal-clear readability
              */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 0.8, 0.26, 0.99] }}
                className="absolute pointer-events-none select-none z-10 w-[88%] sm:w-[96%] lg:w-[106%] -top-[12%] sm:-top-[15%] lg:-top-[19%] left-[12%] sm:left-[18%] lg:left-[30%]"
              >
                <img
                  src={girlImg}
                  alt="Authentic Leaping Figure with Streamers stepping into Growth Card"
                  className="w-full h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <div className="relative z-20 flex-1 flex flex-col justify-between pt-10 sm:pt-14 pb-1 max-w-[210px] sm:max-w-[230px]">
                <div>
                  {/* Title matching user reference image */}
                  <h3 className="font-sans font-medium text-3xl sm:text-[34px] md:text-[38px] text-white tracking-tight leading-[1.08] mb-2.5">
                    Poverty In
                    <br />
                    Freefall -
                    <br />
                    Morocco
                  </h3>

                  {/* Subtitle matching user reference image */}
                  <p className="text-[13px] sm:text-[14px] text-white/90 font-normal leading-snug mb-8 sm:mb-10">
                    Share of population below the international
                    <br />
                    Poverty line
                  </p>

                  {/* Two Horizontal Capsule Bars matching user reference image */}
                  <div className="space-y-3.5 py-1">
                    {/* 2024 Bar: Cyan Capsule with 3.7% */}
                    <div className="flex items-center gap-3">
                      <span className="font-sans text-xs sm:text-[13px] font-normal text-white/90 w-10">2024</span>
                      <div className="flex items-center gap-2.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '42px' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.2 }}
                          className="h-4 sm:h-[18px] rounded-full bg-[#38BDF8] shadow-xs"
                        />
                        <span className="text-xs sm:text-[13px] font-normal text-white/95">3.7%</span>
                      </div>
                    </div>

                    {/* 2000 Bar: Neon Yellow Capsule with 16.8% */}
                    <div className="flex items-center gap-3">
                      <span className="font-sans text-xs sm:text-[13px] font-normal text-white/90 w-10">2000</span>
                      <div className="flex items-center gap-2.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '130px' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: 0.3 }}
                          className="h-4 sm:h-[18px] rounded-full bg-[#E4F817] shadow-xs"
                        />
                        <span className="text-xs sm:text-[13px] font-normal text-white/95">16.8%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Source Footnote without dividing border line */}
                <div className="pt-6 text-[11px] sm:text-[11.5px] text-white/75 font-normal">
                  Source: UN SDG Indicators Database
                </div>
              </div>
            </motion.div>

            {/* =========================================================================
                CARD 3: GROWTH, AT TWO TO THREE TIMES (Teal #0FA4AA matching user reference)
               ========================================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 0.8, 0.26, 0.99] }}
              className="relative rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 bg-[#0FA4AA] text-white shadow-xl flex flex-col justify-between z-10 min-h-[460px] sm:min-h-[480px]"
            >
              <div className="relative z-20 flex-1 flex flex-col justify-between pt-10 sm:pt-14 pb-1">
                <div>
                  {/* Title matching user reference image */}
                  <h3 className="font-sans font-medium text-3xl sm:text-[34px] md:text-[38px] text-[#EFF5EA] tracking-tight leading-[1.08] mb-2.5">
                    Growth, at two to
                    <br />
                    Three times the pace
                  </h3>

                  {/* Subtitle matching user reference image */}
                  <p className="text-[13px] sm:text-[14px] text-teal-100/90 font-normal leading-snug mb-6 sm:mb-8">
                    Real GDP growth, 2025 (%)
                  </p>

                  {/* 6 Vertical Bars matching user reference image */}
                  <div className="pt-2 pb-2">
                    <div className="flex items-end justify-between h-40 gap-2 sm:gap-2.5 pb-1.5 border-b border-teal-200/30">
                      
                      {/* Bar 1: Guinea (7.2, Yellow #FACC15) */}
                      <div className="flex-1 flex flex-col items-center h-full justify-end">
                        <span className="text-[11px] font-bold text-white mb-1">
                          7.2
                        </span>
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: '94%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.15 }}
                          className="w-full max-w-[28px] rounded-t-xs bg-[#FACC15] shadow-xs"
                        />
                      </div>

                      {/* Bar 2: Ethiopia (7.2, Deep Burgundy/Purple #581C87) */}
                      <div className="flex-1 flex flex-col items-center h-full justify-end">
                        <span className="text-[11px] font-bold text-white mb-1">
                          7.2
                        </span>
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: '94%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="w-full max-w-[28px] rounded-t-xs bg-[#581C87] shadow-xs"
                        />
                      </div>

                      {/* Bar 3: Rwanda (7.1, Bright Lime Green #84CC16) */}
                      <div className="flex-1 flex flex-col items-center h-full justify-end">
                        <span className="text-[11px] font-bold text-white mb-1">
                          7.1
                        </span>
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: '92%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.25 }}
                          className="w-full max-w-[28px] rounded-t-xs bg-[#84CC16] shadow-xs"
                        />
                      </div>

                      {/* Bar 4: China (4.8, Red #DC2626) */}
                      <div className="flex-1 flex flex-col items-center h-full justify-end">
                        <span className="text-[11px] font-bold text-white mb-1">
                          4.8
                        </span>
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: '62%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          className="w-full max-w-[28px] rounded-t-xs bg-[#DC2626] shadow-xs"
                        />
                      </div>

                      {/* Bar 5: India (6.6, Navy/Midnight Blue #1E3A8A) */}
                      <div className="flex-1 flex flex-col items-center h-full justify-end">
                        <span className="text-[11px] font-bold text-white mb-1">
                          6.6
                        </span>
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: '86%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.35 }}
                          className="w-full max-w-[28px] rounded-t-xs bg-[#1E3A8A] shadow-xs"
                        />
                      </div>

                      {/* Bar 6: Africa AVG (4.2, Purple/Magenta #9333EA) */}
                      <div className="flex-1 flex flex-col items-center h-full justify-end">
                        <span className="text-[11px] font-bold text-white mb-1">
                          4.2
                        </span>
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: '55%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          className="w-full max-w-[28px] rounded-t-xs bg-[#9333EA] shadow-xs"
                        />
                      </div>

                    </div>

                    {/* Country labels below baseline matching user reference image */}
                    <div className="flex items-start justify-between gap-1 pt-2 text-[10px] sm:text-[11px] text-teal-100/90 font-medium">
                      <span className="flex-1 text-center">Guinea</span>
                      <span className="flex-1 text-center">Ethiopia</span>
                      <span className="flex-1 text-center">Rwanda</span>
                      <span className="flex-1 text-center">China</span>
                      <span className="flex-1 text-center">India</span>
                      <span className="flex-1 text-center whitespace-nowrap">Africa AVG</span>
                    </div>
                  </div>
                </div>

                {/* Source Footnote without dividing border line */}
                <div className="pt-6 text-[11px] sm:text-[11.5px] text-teal-100/75 font-normal">
                  Source: IMF/ World Bank projections, cited in Optimistic Africa
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
};

