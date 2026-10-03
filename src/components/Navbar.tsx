'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Building2, Phone, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/60 shadow-lg py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                AURA <span className="text-amber-400 font-light">ESTATES</span>
              </span>
              <p className="text-[10px] tracking-widest text-neutral-400 uppercase -mt-1 font-mono">
                Ultra-Luxury Living
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#properties"
              className="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors"
            >
              Exclusive Properties
            </a>
            <a
              href="#neighborhoods"
              className="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors"
            >
              Destinations
            </a>
            <a
              href="#calculator"
              className="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors"
            >
              Mortgage Suite
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors"
            >
              About Concierge
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+18005550199"
              className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span className="font-mono text-xs">+1 (800) 555-0199</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 font-semibold text-sm hover:from-amber-400 hover:to-amber-500 transition-all shadow-md shadow-amber-500/20 active:scale-95"
            >
              Schedule Private Viewing
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800/60"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800 px-6 py-6 space-y-4">
          <a
            href="#properties"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-neutral-200 hover:text-amber-400"
          >
            Exclusive Properties
          </a>
          <a
            href="#neighborhoods"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-neutral-200 hover:text-amber-400"
          >
            Destinations
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-neutral-200 hover:text-amber-400"
          >
            Mortgage Suite
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-neutral-200 hover:text-amber-400"
          >
            About Concierge
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-neutral-200 hover:text-amber-400"
          >
            Contact
          </a>
          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
            <a
              href="tel:+18005550199"
              className="flex items-center gap-2 text-sm text-neutral-300"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              +1 (800) 555-0199
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full bg-amber-500 text-neutral-950 font-semibold text-sm"
            >
              Schedule Private Viewing
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
