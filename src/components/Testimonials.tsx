'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Quote, Award } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Arthur Kensington",
      role: "Family Office Principal, London",
      quote:
        "Aura Estates orchestrated our private acquisition in Bel-Air completely off-market with total discretion. Their white-glove team arranged private aviation inspections and closed within fourteen days.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Sophia Delacroix",
      role: "Tech Founder & Venture Capitalist",
      quote:
        "The penthouse on 57th Street exceeded every expectation. The architectural diligence, bespoke interior advisory, and seamless transaction handling made this my smoothest luxury acquisition to date.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Dr. Rajiv Malhotra",
      role: "Global Healthcare Executive",
      quote:
        "From our initial virtual tour to the deep-water yacht dock verification in Star Island, Carlos and the Aura team demonstrated unmatched knowledge and unwavering integrity throughout.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Client Discretion & Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Trusted by Leaders & Visionaries
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Representing generational wealth, enterprise founders, and international private collectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-neutral-700 mb-4" />
                <p className="text-neutral-300 text-sm leading-relaxed mb-6 font-light italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-neutral-800/80">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-amber-400/40 shrink-0">
                  <Image src={rev.avatar} alt={rev.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                  <p className="text-xs text-neutral-400">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
