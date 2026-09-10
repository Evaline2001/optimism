import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CHAPTERS_DATA } from '../data/bookData';
import { Plus, Minus, Filter, ChevronDown, ExternalLink } from 'lucide-react';
import { CountUp } from './CountUp';
import { AnimatedText } from './AnimatedText';
import { AnimatedParagraph } from './AnimatedParagraph';

// Authentic extracted artwork from Assets.png
import ch01Art from '../assets/chapters/art/ch01_peace_art.jpg';
import ch02Art from '../assets/chapters/art/ch02_governance_art.jpg';
import ch03Art from '../assets/chapters/art/ch03_solidarity_art.jpg';
import ch04Art from '../assets/chapters/art/ch04_innovation_art.jpg';
import ch05Art from '../assets/chapters/art/ch05_entrepreneurship_art.jpg';
import ch06Art from '../assets/chapters/art/ch06_youth_art.jpg';
import ch07Art from '../assets/chapters/art/ch07_ict_diaspora_art.jpg';
import ch08Art from '../assets/chapters/art/ch08_diaspora_art.jpg';
import ch09Art from '../assets/chapters/art/ch09_creative_cities_art.jpg';
import ch10Art from '../assets/chapters/art/ch10_growth_prosperity_art.jpg';
import ch11Art from '../assets/chapters/art/ch11_optimism_index_art.jpg';

const CHAPTER_ARTWORKS: Record<string, string> = {
  'chapter-01': ch01Art,
  'chapter-02': ch02Art,
  'chapter-03': ch03Art,
  'chapter-04': ch04Art,
  'chapter-05': ch05Art,
  'chapter-06': ch06Art,
  'chapter-07': ch07Art,
  'chapter-08': ch08Art,
  'chapter-09': ch09Art,
  'chapter-10': ch10Art,
  'chapter-11': ch11Art,
};

// Authentic color themes matching Home.png and user screenshot
const CHAPTER_THEMES: Record<string, { bg: string; text: string; badgeBg?: string }> = {
  'chapter-01': { bg: '#42925D', text: '#8AE721', badgeBg: '#2E7D32' },
  'chapter-02': { bg: '#AE2C2C', text: '#F0A52F', badgeBg: '#8B1E1E' },
  'chapter-03': { bg: '#1B42A1', text: '#FFFFFF', badgeBg: '#0F2C7A' },
  'chapter-04': { bg: '#FBEE52', text: '#1E293B', badgeBg: '#E5D624' },
  'chapter-05': { bg: '#E532CB', text: '#FFFFFF', badgeBg: '#BA17A4' },
  'chapter-06': { bg: '#FF8204', text: '#FFD81D', badgeBg: '#CC6300' },
  'chapter-07': { bg: '#2B63F6', text: '#FFFFFF', badgeBg: '#1847CA' },
  'chapter-08': { bg: '#4DA7A5', text: '#FFFFFF', badgeBg: '#2E7573' },
  'chapter-09': { bg: '#E9635A', text: '#FFD81D', badgeBg: '#BD3D35' },
  'chapter-10': { bg: '#7D1CA1', text: '#FFFFFF', badgeBg: '#590F77' },
  'chapter-11': { bg: '#1FA11B', text: '#1AEA84', badgeBg: '#157512' },
};

export const ChaptersSection: React.FC = () => {
  // Chapter 03 is expanded by default
  const [expandedChapter, setExpandedChapter] = useState<string | null>('chapter-03');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'foundations' | 'capabilities' | 'outcomes'>('all');

  const toggleChapter = (id: string) => {
    setExpandedChapter((prev) => (prev === id ? null : id));
  };

  const filteredChapters = CHAPTERS_DATA.filter((ch) => {
    if (selectedCategory === 'all') return true;
    return ch.category === selectedCategory;
  });

  const renderAnimatedStat = (chapterId: string, valStr: string | undefined) => {
    if (!valStr) return null;

    if (chapterId === 'chapter-01') {
      return <CountUp prefix="#" end={28} duration={1400} />;
    }
    if (chapterId === 'chapter-02') {
      return <CountUp end={14} suffix="/20" duration={1400} />;
    }
    if (chapterId === 'chapter-03') {
      return <CountUp prefix="$" end={104} suffix="B" duration={1600} />;
    }
    if (chapterId === 'chapter-04') {
      return <CountUp end={700} suffix="+" duration={1600} />;
    }
    if (chapterId === 'chapter-05') {
      return <CountUp end={20} suffix="%+" duration={1400} />;
    }
    if (chapterId === 'chapter-06') {
      return <CountUp end={70} suffix="%" duration={1400} />;
    }
    if (chapterId === 'chapter-07') {
      return <CountUp end={70} suffix="%" duration={1400} />;
    }
    if (chapterId === 'chapter-08') {
      return <CountUp end={200} suffix="M+" duration={1600} />;
    }
    if (chapterId === 'chapter-09') {
      return <CountUp end={35} suffix=" Cities" duration={1400} />;
    }
    if (chapterId === 'chapter-10') {
      return <CountUp end={40} suffix="%" duration={1400} />;
    }
    if (chapterId === 'chapter-11') {
      return <CountUp end={69.87} decimals={2} duration={1600} />;
    }

    return <span>{valStr}</span>;
  };

  return (
    <section id="chapters" className="py-10 sm:py-14 bg-[#FFFDF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Home.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-8">
          <div className="lg:col-span-7">
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-[#4A154B] leading-[0.95] tracking-tight">
              <AnimatedText text="ELEVEN CHAPTERS." className="block" />
              <AnimatedText text="ONE ARGUMENT." className="block" delay={0.2} />
            </h2>
          </div>

          <div className="lg:col-span-5 text-sm sm:text-base text-[#475569] leading-relaxed">
            <p>
              Each chapter unpacks one layer of the Funnel of Optimism — grounded in international indices, comparative data and stories from across the continent.
            </p>
          </div>
        </div>

        {/* 11 Chapters Overlapping Accordion Stack matching user screenshot and Home.png */}
        <div className="relative pb-6">
          {filteredChapters.map((ch, index) => {
            const isExpanded = expandedChapter === ch.id;
            const theme = CHAPTER_THEMES[ch.id] || { bg: ch.bgColor, text: ch.textColor };
            const isFirst = index === 0;
            const isLast = index === filteredChapters.length - 1;

            return (
              <motion.div
                key={ch.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.35, delay: index * 0.02, ease: [0.22, 0.8, 0.26, 0.99] }}
                id={`chapter-card-${ch.id}`}
                className={`relative transition-all duration-300 ${
                  isFirst
                    ? 'rounded-t-[28px] sm:rounded-t-[34px]'
                    : '-mt-6 sm:-mt-8 md:-mt-9 rounded-t-[28px] sm:rounded-t-[34px]'
                } ${isLast ? 'rounded-b-[28px] sm:rounded-b-[34px]' : ''} overflow-hidden shadow-[0_-5px_18px_-2px_rgba(0,0,0,0.14),0_6px_16px_rgba(0,0,0,0.08)]`}
                style={{
                  zIndex: index + 1,
                  backgroundColor: theme.bg,
                  color: theme.text,
                }}
              >
                {/* Accordion Trigger Header with Artwork and Stat matching Page 1 */}
                <button
                  type="button"
                  onClick={() => toggleChapter(ch.id)}
                  aria-expanded={isExpanded}
                  className={`w-full text-left pt-3.5 sm:pt-4.5 md:pt-5 px-5 sm:px-7 md:px-8 ${
                    isExpanded ? 'pb-3 sm:pb-4' : isLast ? 'pb-5 sm:pb-6' : 'pb-10 sm:pb-12 md:pb-14'
                  } flex items-center justify-between cursor-pointer group select-none transition-opacity hover:opacity-95`}
                >
                  {/* Left: Chapter Number & Title */}
                  <div className="space-y-0.5 min-w-0 pr-3">
                    <span
                      className="block text-[11px] sm:text-xs font-bold tracking-widest uppercase"
                      style={{ color: theme.text }}
                    >
                      {ch.number}
                    </span>
                    <h3
                      className="font-bebas text-2xl sm:text-3xl md:text-4xl tracking-wide leading-none truncate"
                      style={{ color: theme.text }}
                    >
                      {ch.title}
                    </h3>
                  </div>

                  {/* Right: Artwork thumbnail, Stat and Toggle matching Page 1 */}
                  <div className="flex items-center gap-3 sm:gap-5 shrink-0">
                    {/* Authentic Artwork Crop */}
                    {CHAPTER_ARTWORKS[ch.id] && (
                      <div className="w-10 h-7 sm:w-13 sm:h-9 md:w-16 md:h-11 rounded-md overflow-hidden shadow-xs bg-black/15 shrink-0 border border-white/20">
                        <img
                          src={CHAPTER_ARTWORKS[ch.id]}
                          alt={ch.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}

                    {/* Stat Number */}
                    <div className="text-right min-w-[50px] sm:min-w-[70px]">
                      <div
                        className="font-bebas text-xl sm:text-2xl md:text-3xl tracking-tight leading-none drop-shadow-2xs"
                        style={{ color: theme.text }}
                      >
                        {renderAnimatedStat(ch.id, ch.keyStat?.value)}
                      </div>
                    </div>

                    {/* Toggle Icon (+ or -) */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/15 group-hover:bg-black/25 transition-colors shrink-0"
                      style={{ color: theme.text }}
                    >
                      {isExpanded ? (
                        <Minus size={18} strokeWidth={2.6} />
                      ) : (
                        <Plus size={18} strokeWidth={2.6} />
                      )}
                    </motion.div>
                  </div>
                </button>

                {/* Expanded Content Area with Butter Smooth Height Transition */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div
                        className={`px-5 sm:px-7 md:px-8 pt-3 border-t border-white/20 ${
                          isLast ? 'pb-6 sm:pb-8' : 'pb-12 sm:pb-16'
                        }`}
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                          
                          {/* Left: Chapter Details */}
                          <div className="lg:col-span-8 space-y-4 text-white">
                            {ch.badge && (
                              <span
                                className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-sm"
                                style={{
                                  backgroundColor: theme.badgeBg || ch.badgeBg || '#D81B60',
                                  color: '#FFFFFF',
                                }}
                              >
                                {ch.badge}
                              </span>
                            )}

                            <p className="text-base sm:text-lg font-medium leading-relaxed opacity-95 max-w-2xl text-white">
                              {ch.description}
                            </p>

                            <div className="pt-2 text-xs sm:text-sm opacity-85 leading-normal space-y-1.5 border-t border-white/20 text-white">
                              <p className="font-semibold text-white">
                                Core Takeaway: <span className="font-normal text-white/90">{ch.details.takeaway}</span>
                              </p>
                              <div className="flex flex-wrap items-center gap-2 pt-1 text-white">
                                <span className="font-semibold">Benchmarked Indices:</span>
                                {ch.details.indices.map((idx, i) => (
                                  <span
                                    key={i}
                                    className="px-2.5 py-0.5 rounded-md bg-white/20 text-[11px] font-medium tracking-wide text-white"
                                  >
                                    {idx}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Right: Authentic Figma Artwork & Key Metric with Live Animated CountUp */}
                          <div className="lg:col-span-4 flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-black/20 text-center transition-all hover:bg-black/25 overflow-hidden">
                            {/* Authentic Chapter Artwork Crop from Assets.png */}
                            {CHAPTER_ARTWORKS[ch.id] && (
                              <div className="w-full mb-3 rounded-xl overflow-hidden shadow-md bg-black/10 border border-white/10">
                                <img
                                  src={CHAPTER_ARTWORKS[ch.id]}
                                  alt={`${ch.title} illustration from book`}
                                  className="w-full h-36 sm:h-44 object-cover object-center transform hover:scale-105 transition-transform duration-300"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            )}

                            <div className="flex flex-col items-center">
                              <div className="font-bebas text-4xl sm:text-5xl tracking-tight leading-none text-white">
                                {renderAnimatedStat(ch.id, ch.keyStat?.value)}
                              </div>
                              <div className="text-xs sm:text-sm font-semibold opacity-90 mt-1 text-white">
                                {ch.keyStat?.label}
                              </div>
                              {ch.keyStat?.sublabel && (
                                <div className="text-[11px] opacity-75 max-w-[220px] mt-0.5 text-white">
                                  {ch.keyStat.sublabel}
                                </div>
                              )}
                            </div>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
