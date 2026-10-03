'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Bed, Bath, Maximize2, MapPin, Heart, ArrowRight, ShieldCheck } from 'lucide-react';
import { Property } from '@/data/properties';

interface PropertyCardProps {
  property: Property;
  onSelect: (property: Property) => void;
}

export default function PropertyCard({ property, onSelect }: PropertyCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group bg-neutral-900/90 border border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-700 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5 flex flex-col">
      {/* Property Visual */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-black/20" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500 text-neutral-950 shadow-md">
            {property.status}
          </span>
          {property.featured && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-950/80 text-amber-300 border border-amber-500/40 backdrop-blur-md flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Verified Curated
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md border transition-all ${
            isLiked
              ? 'bg-red-500/90 border-red-500 text-white'
              : 'bg-neutral-950/60 border-neutral-700/60 text-white hover:bg-neutral-900/80'
          }`}
          aria-label="Save Property"
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
        </button>

        {/* Price Tag Overlay */}
        <div className="absolute bottom-4 left-4">
          <span className="text-2xl font-bold font-mono text-white tracking-tight drop-shadow-md">
            {property.formattedPrice}
          </span>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium tracking-wide uppercase mb-1">
            <span>{property.type}</span>
            <span>•</span>
            <span>Built {property.yearBuilt}</span>
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors line-clamp-1">
            {property.title}
          </h3>

          <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-4 line-clamp-1">
            <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
            <span>{property.address}, {property.city}</span>
          </div>

          <p className="text-neutral-400 text-xs line-clamp-2 leading-relaxed mb-5">
            {property.description}
          </p>
        </div>

        {/* Specs and CTA */}
        <div>
          {/* Metrics bar */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-neutral-800 text-neutral-300 text-xs mb-5">
            <div className="flex items-center gap-1.5">
              <Bed className="w-4 h-4 text-amber-400/80" />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="w-4 h-4 text-amber-400/80" />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-4 h-4 text-amber-400/80" />
              <span>{property.sqft.toLocaleString()} SqFt</span>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={() => onSelect(property)}
            className="w-full py-2.5 px-4 rounded-xl bg-neutral-800/80 hover:bg-amber-500 text-neutral-200 hover:text-neutral-950 font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group/btn"
          >
            <span>View Architecture & Specs</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
