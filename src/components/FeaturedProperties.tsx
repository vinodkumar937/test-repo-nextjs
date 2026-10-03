'use client';

import React, { useState, useMemo } from 'react';
import PropertyCard from './PropertyCard';
import { Property, PROPERTIES } from '@/data/properties';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

interface FeaturedPropertiesProps {
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  typeFilter: string;
  setTypeFilter: (type: string) => void;
  searchQuery: string;
  onSelectProperty: (property: Property) => void;
}

export default function FeaturedProperties({
  statusFilter,
  setStatusFilter,
  typeFilter,
  setTypeFilter,
  searchQuery,
  onSelectProperty,
}: FeaturedPropertiesProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Villa' | 'Penthouse' | 'Waterfront' | 'Rent'>('All');

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((p) => {
      // Hero filter for status
      if (statusFilter !== 'All' && p.status !== statusFilter) {
        return false;
      }

      // Hero filter for type
      if (typeFilter !== 'All' && p.type !== typeFilter) {
        return false;
      }

      // Category tab
      if (activeCategory === 'Rent' && p.status !== 'For Rent') {
        return false;
      }
      if (activeCategory !== 'All' && activeCategory !== 'Rent' && p.type !== activeCategory) {
        return false;
      }

      // Text query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          p.title.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q) ||
          p.address.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q);
        if (!matches) return false;
      }

      return true;
    });
  }, [statusFilter, typeFilter, activeCategory, searchQuery]);

  return (
    <section id="properties" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Curated Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Distinguished Residences
            </h2>
          </div>

          {/* Quick Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => {
                setActiveCategory('All');
                setStatusFilter('All');
                setTypeFilter('All');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all whitespace-nowrap ${
                activeCategory === 'All'
                  ? 'bg-amber-500 text-neutral-950 font-bold'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              All Residences ({PROPERTIES.length})
            </button>
            <button
              onClick={() => setActiveCategory('Villa')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all whitespace-nowrap ${
                activeCategory === 'Villa'
                  ? 'bg-amber-500 text-neutral-950 font-bold'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              Villas
            </button>
            <button
              onClick={() => setActiveCategory('Penthouse')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all whitespace-nowrap ${
                activeCategory === 'Penthouse'
                  ? 'bg-amber-500 text-neutral-950 font-bold'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              Sky Penthouses
            </button>
            <button
              onClick={() => setActiveCategory('Waterfront')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all whitespace-nowrap ${
                activeCategory === 'Waterfront'
                  ? 'bg-amber-500 text-neutral-950 font-bold'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              Waterfront
            </button>
            <button
              onClick={() => setActiveCategory('Rent')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all whitespace-nowrap ${
                activeCategory === 'Rent'
                  ? 'bg-amber-500 text-neutral-950 font-bold'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              Executive Leases
            </button>
          </div>
        </div>

        {/* Results Count & Active Filter Indicator */}
        <div className="flex items-center justify-between text-xs text-neutral-400 mb-8 pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-amber-400" />
            <span>Showing <strong className="text-white">{filteredProperties.length}</strong> available luxury listings</span>
            {(statusFilter !== 'All' || typeFilter !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setStatusFilter('All');
                  setTypeFilter('All');
                  setActiveCategory('All');
                }}
                className="ml-3 text-amber-400 hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Property Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelect={onSelectProperty}
              />
            ))}
          </div>
        ) : (
          <div className="p-16 rounded-3xl bg-neutral-900/40 border border-neutral-800 text-center">
            <p className="text-neutral-400 text-sm mb-4">
              No off-market estates currently match your specified criteria.
            </p>
            <button
              onClick={() => {
                setStatusFilter('All');
                setTypeFilter('All');
                setActiveCategory('All');
              }}
              className="px-6 py-2.5 rounded-xl bg-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wider"
            >
              View Full Portfolio
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
