'use client';

import React from 'react';
import Image from 'next/image';
import { Compass, ArrowUpRight } from 'lucide-react';
import { NEIGHBORHOODS } from '@/data/properties';

interface NeighborhoodsProps {
  onSelectCity: (city: string) => void;
}

export default function Neighborhoods({ onSelectCity }: NeighborhoodsProps) {
  return (
    <section id="neighborhoods" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Prime Geographical Enclaves</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Global Destinations
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-light">
            Targeted portfolio management in high-barrier trophy markets with consistent generational capital appreciation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEIGHBORHOODS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSelectCity(item.city.split(',')[0].trim())}
              className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer border border-neutral-800 hover:border-amber-400/50 transition-all duration-500"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs text-amber-400 font-mono tracking-wider uppercase mb-1 block">
                  {item.city}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between text-xs text-neutral-300 pt-2 border-t border-white/10">
                  <span>{item.count} Active Estates</span>
                  <span className="font-mono text-amber-400 font-semibold">{item.avgPrice} Avg.</span>
                </div>
              </div>

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
