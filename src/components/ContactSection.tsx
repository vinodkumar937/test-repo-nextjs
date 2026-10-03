'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Loader2 } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Acquisition');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          propertyTitle: `Concierge Inquiry: ${interest}`,
          message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Office info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Private Client Advisory</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                Initiate a Confidential Discussion
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
                Whether you seek to acquire a rare architectural asset or list a prime estate with strict NDA adherence, our partners are at your service.
              </p>
            </div>

            {/* Global Desks */}
            <div className="space-y-4 pt-4 border-t border-neutral-900 text-xs">
              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800">
                <div className="font-bold text-white text-sm mb-1">Beverly Hills Flagship</div>
                <div className="text-neutral-400">9601 Wilshire Blvd, Suite 1100, Beverly Hills, CA 90212</div>
                <div className="text-amber-400 font-mono mt-1">+1 (310) 849-2201</div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800">
                <div className="font-bold text-white text-sm mb-1">New York Billionaires&apos; Row Desk</div>
                <div className="text-neutral-400">767 Fifth Avenue, 28th Floor, New York, NY 10153</div>
                <div className="text-amber-400 font-mono mt-1">+1 (212) 993-8400</div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800">
                <div className="font-bold text-white text-sm mb-1">Miami Beach Yachting Office</div>
                <div className="text-neutral-400">100 Lincoln Rd, Penthouse 4, Miami Beach, FL 33139</div>
                <div className="text-amber-400 font-mono mt-1">+1 (305) 512-8874</div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-neutral-900/80 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Private Consultation Request</h3>
            <p className="text-neutral-400 text-xs mb-8">
              All communications are protected under strict fiduciary attorney-client confidentiality standards.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-amber-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Inquiry Registered</h4>
                <p className="text-neutral-300 text-xs max-w-md mx-auto">
                  A Managing Partner will reach out via your preferred channel within two hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-xl bg-neutral-800 text-xs text-white hover:bg-neutral-700"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jonathan Sterling"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sterling@capital.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                      Mobile / WhatsApp Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                      Primary Objective
                    </label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                    >
                      <option value="Acquisition">Trophy Asset Acquisition ($10M+)</option>
                      <option value="Listing">Off-Market Property Representation</option>
                      <option value="Lease">Executive Luxury Lease ($25k+/mo)</option>
                      <option value="Financing">Private Banking Mortgage Structure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                    Confidential Requirements / Inquiry Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specific architectural preferences, desired location, helipad requirements, or target timeline..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-neutral-950 font-bold text-sm tracking-wider uppercase transition-all shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Transmitting Secured Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Fiduciary Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
