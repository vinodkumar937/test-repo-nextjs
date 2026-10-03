'use client';

import React from 'react';
import { Search, MapPin, Home, DollarSign, Sparkles } from 'lucide-react';

interface HeroProps {
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  typeFilter: string;
  setTypeFilter: (type: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearch: () => void;
}

export default function Hero({
  statusFilter,
  setStatusFilter,
  typeFilter,
  setTypeFilter,
  searchQuery,
  setSearchQuery,
  onSearch,
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-neutral-950">
      {/* Background with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-40 scale-105 transform transition-transform duration-10000"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/80 to-neutral-950" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* VIP Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Bespoke Luxury Real Estate Brokerage & Advisory</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
          Find Your Next <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
            Architectural Masterpiece
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-neutral-300 text-base sm:text-lg mb-10 leading-relaxed font-light">
          Representing the world’s most distinguished villas, sky penthouses, and private coastal estates in Los Angeles, New York, Miami, and Aspen.
        </p>

        {/* Integrated Search Box */}
        <div className="max-w-4xl mx-auto bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 rounded-3xl p-4 sm:p-6 shadow-2xl shadow-black/80">
          {/* Status Tabs (Buy / Rent) */}
          <div className="flex items-center gap-3 mb-5 border-b border-neutral-800/80 pb-3">
            <button
              onClick={() => setStatusFilter('All')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                statusFilter === 'All'
                  ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              All Listings
            </button>
            <button
              onClick={() => setStatusFilter('For Sale')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                statusFilter === 'For Sale'
                  ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              Buy Exclusive
            </button>
            <button
              onClick={() => setStatusFilter('For Rent')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                statusFilter === 'For Rent'
                  ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              Lease / Rent
            </button>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Search Query */}
            <div className="relative text-left">
              <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1 ml-1">
                Location or Name
              </label>
              <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-neutral-950/70 border border-neutral-700/80 focus-within:border-amber-400 transition-colors">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <input
                  type="text"
                  placeholder="e.g. Bel Air, Manhattan, Miami..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Property Type Dropdown */}
            <div className="relative text-left">
              <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1 ml-1">
                Property Category
              </label>
              <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-neutral-950/70 border border-neutral-700/80 focus-within:border-amber-400 transition-colors">
                <Home className="w-4 h-4 text-amber-400 shrink-0" />
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="w-full bg-transparent text-sm text-white focus:outline-none cursor-pointer"
                >
                  <option value="All" className="bg-neutral-900 text-white">All Architecture</option>
                  <option value="Villa" className="bg-neutral-900 text-white">Luxury Villas</option>
                  <option value="Penthouse" className="bg-neutral-900 text-white">Sky Penthouses</option>
                  <option value="Waterfront" className="bg-neutral-900 text-white">Waterfront Havens</option>
                  <option value="Mansion" className="bg-neutral-900 text-white">Private Mansions</option>
                  <option value="Apartment" className="bg-neutral-900 text-white">Lofts & Condos</option>
                </select>
              </div>
            </div>

            {/* Search Trigger Button */}
            <div className="relative text-left flex flex-col justify-end">
              <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1 ml-1 invisible sm:visible">
                Action
              </label>
              <button
                onClick={onSearch}
                className="w-full py-2.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-neutral-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all transform active:scale-95"
              >
                <Search className="w-4 h-4 text-neutral-950" />
                <span>Search Portfolio</span>
              </button>
            </div>
          </div>
        </div>

        {/* Highlight Numbers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-8 border-t border-neutral-800/60 max-w-4xl mx-auto">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">$2.4B+</div>
            <div className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Transaction Volume</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">1,200+</div>
            <div className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Verified Properties</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">99.4%</div>
            <div className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">18 Days</div>
            <div className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Avg. Days to Close</div>
          </div>
        </div>
      </div>
    </section>
  );
}
