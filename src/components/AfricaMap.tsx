import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export interface HubData {
  id: string;
  city: string;
  country: string;
  statValue: number;
  statPrefix?: string;
  statSuffix?: string;
  statLabel: string;
  description: string;
  cx: number;
  cy: number;
  color: string;
}

interface AfricaMapProps {
  className?: string;
  onSelectHub?: (hub: HubData) => void;
}

interface StatDetail {
  id: string;
  value: string;
  title: string;
  detail: string;
  source: string;
  // Bounding box in percentage of the 770x980 map asset
  top: string;
  left: string;
  width: string;
  height: string;
}

const STAT_HOTSPOTS: StatDetail[] = [
  {
    id: 'gap-39',
    value: '39',
    title: 'Perception Gap > 50%',
    detail: '39 African nations suffer a 50%+ perception discount compared to their actual economic fundamentals and real growth figures.',
    source: 'Optimistic Africa · Chapter 1',
    top: '22.8%',
    left: '2.5%',
    width: '23.8%',
    height: '16.5%',
  },
  {
    id: 'peaceful-21',
    value: '21',
    title: 'Top 100 Peaceful Nations',
    detail: '21 African nations rank among the top 100 most peaceful in the world, including Mauritius, Botswana, Ghana, and Rwanda.',
    source: 'Global Peace Index · Chapter 1 & 2',
    top: '41.2%',
    left: '32.2%',
    width: '24.2%',
    height: '19.2%',
  },
  {
    id: 'hubs-700',
    value: '700+',
    title: 'Tech & Innovation Hubs',
    detail: 'Active tech & innovation hubs grew from fewer than 20 a decade ago to over 700 across 50+ countries today.',
    source: 'Briter Bridges & AfriLabs · Chapter 4',
    top: '32.2%',
    left: '70.8%',
    width: '23.6%',
    height: '19.8%',
  },
];

export const AfricaMap: React.FC<AfricaMapProps> = ({ className = '' }) => {
  const [activeStat, setActiveStat] = useState<StatDetail | null>(null);

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Ambient soft purple/violet glow behind the map */}
      <div
        className="absolute -inset-4 sm:-inset-8 bg-gradient-to-tr from-purple-500/15 via-violet-400/10 to-indigo-500/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Map Artwork Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 0.8, 0.26, 0.99] }}
        className="relative w-full max-w-[480px] sm:max-w-[540px] md:max-w-[580px] lg:max-w-[620px] select-none"
      >
        {/* High-Resolution Artwork matching exact Figma design */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xs transition-transform duration-300">
          <img
            src="/assets/optimistic_africa_map.png"
            alt="Optimistic Africa Map with data markers: 39 countries with a perception gap over 50%, 21 nations in world top 100 most peaceful, 700+ tech and innovation hubs"
            width={770}
            height={980}
            loading="eager"
            decoding="async"
            className="w-full h-auto object-contain block drop-shadow-sm"
          />

          {/* Interactive invisible hotspots positioned over the 3 cards */}
          {STAT_HOTSPOTS.map((stat) => (
            <button
              key={stat.id}
              type="button"
              onClick={() => setActiveStat(activeStat?.id === stat.id ? null : stat)}
              onMouseEnter={() => setActiveStat(stat)}
              onMouseLeave={() => setActiveStat(null)}
              className="absolute cursor-pointer rounded-2xl transition-all duration-200 focus:outline-hidden hover:ring-2 hover:ring-emerald-500/40 hover:bg-emerald-500/5 group"
              style={{
                top: stat.top,
                left: stat.left,
                width: stat.width,
                height: stat.height,
              }}
              title={`${stat.value} - ${stat.title}`}
              aria-label={`${stat.value}: ${stat.detail}`}
            />
          ))}
        </div>

        {/* Dynamic Context Tooltip when hovering/tapping any stat card */}
        <AnimatePresence>
          {activeStat && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.96 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 translate-y-full w-[90%] sm:w-[84%] bg-slate-900/95 backdrop-blur-md text-white p-3 sm:p-3.5 rounded-xl shadow-2xl border border-slate-700/60 z-30 pointer-events-none text-left"
            >
              <div className="flex items-center justify-between gap-2 border-b border-slate-700/60 pb-1.5 mb-1.5">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {activeStat.value} · {activeStat.title}
                </span>
                <span className="text-[10px] text-slate-400">{activeStat.source}</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-200 leading-relaxed">
                {activeStat.detail}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

