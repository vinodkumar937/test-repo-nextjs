'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, ShieldCheck, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-600 to-yellow-400 flex items-center justify-center text-white">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                AURA <span className="text-amber-400 font-light">ESTATES</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm font-light">
              Premier international luxury real estate brokerage catering to private individuals, family offices, and sovereign wealth entities.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-amber-400/90 font-mono">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Licensed Real Estate Brokerage • Equal Housing Opportunity</span>
            </div>
          </div>

          {/* Enclaves */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-[11px] font-mono">
              Prime Markets
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#properties" className="hover:text-amber-400 transition-colors">Bel-Air Estates</a></li>
              <li><a href="#properties" className="hover:text-amber-400 transition-colors">Billionaires&apos; Row NYC</a></li>
              <li><a href="#properties" className="hover:text-amber-400 transition-colors">Star Island Miami</a></li>
              <li><a href="#properties" className="hover:text-amber-400 transition-colors">Aspen Ski Chalets</a></li>
              <li><a href="#properties" className="hover:text-amber-400 transition-colors">Austin Lakefront</a></li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-[11px] font-mono">
              Concierge Services
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#properties" className="hover:text-amber-400 transition-colors">Off-Market Directory</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">Mortgage Simulator</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">Private Client Discretion</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Escorted Jet Showings</a></li>
              <li><a href="/api/health" className="hover:text-amber-400 transition-colors">System Telemetry</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-[11px] font-mono">
              The Private Journal
            </h4>
            <p className="text-[11px] text-neutral-400 mb-3">
              Receive confidential monthly market reports and off-market additions.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to Private Journal.'); }} className="space-y-2">
              <input
                type="email"
                required
                placeholder="investor@domain.com"
                className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                className="w-full py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Join Ledger
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-neutral-400 font-mono">
            &copy; {new Date().getFullYear()} Aura Estates International LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-neutral-400">Deployed on Coolify PaaS</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
