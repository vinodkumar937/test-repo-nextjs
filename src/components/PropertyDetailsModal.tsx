'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  X,
  Bed,
  Bath,
  Maximize2,
  Calendar,
  CheckCircle2,
  Phone,
  Mail,
  Send,
  Loader2,
  Check
} from 'lucide-react';
import { Property } from '@/data/properties';

interface PropertyDetailsModalProps {
  property: Property | null;
  onClose: () => void;
}

export default function PropertyDetailsModal({ property, onClose }: PropertyDetailsModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [bookingDate, setBookingDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientMessage, setClientMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
    setSubmitted(false);
    setClientName('');
    setClientEmail('');
    setClientPhone('');
    setBookingDate('');
  }, [property]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!property) return null;

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: clientName,
          email: clientEmail,
          phone: clientPhone,
          date: bookingDate,
          propertyId: property.id,
          propertyTitle: property.title,
          message: clientMessage,
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

  const pricePerSqft = Math.round(property.price / property.sqft);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/70">
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
              Listing Ref: {property.id}
            </span>
            <h2 className="text-lg font-bold text-white leading-tight">
              {property.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="overflow-y-auto p-6 space-y-8 flex-1">
          {/* Gallery Showcase */}
          <div>
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-950 mb-3 border border-neutral-800">
              <Image
                src={property.gallery[activeImageIndex] || property.image}
                alt={property.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <div className="text-2xl font-bold font-mono text-white">
                  {property.formattedPrice}
                </div>
                <div className="text-[11px] text-neutral-300">
                  Estimated {property.status === 'For Sale' ? `$${pricePerSqft.toLocaleString()}/sq.ft` : 'Full Furnished'}
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            {property.gallery.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-2">
                {property.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-amber-400 scale-105'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Key Specs Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-neutral-950/60 border border-neutral-800/80 text-center">
            <div>
              <div className="flex items-center justify-center gap-1.5 text-neutral-400 text-xs mb-1">
                <Bed className="w-4 h-4 text-amber-400" />
                <span>Bedrooms</span>
              </div>
              <div className="text-xl font-bold text-white font-mono">{property.bedrooms}</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1.5 text-neutral-400 text-xs mb-1">
                <Bath className="w-4 h-4 text-amber-400" />
                <span>Bathrooms</span>
              </div>
              <div className="text-xl font-bold text-white font-mono">{property.bathrooms}</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1.5 text-neutral-400 text-xs mb-1">
                <Maximize2 className="w-4 h-4 text-amber-400" />
                <span>Total Area</span>
              </div>
              <div className="text-xl font-bold text-white font-mono">{property.sqft.toLocaleString()} SqFt</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1.5 text-neutral-400 text-xs mb-1">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Completed</span>
              </div>
              <div className="text-xl font-bold text-white font-mono">{property.yearBuilt}</div>
            </div>
          </div>

          {/* Description & Amenities */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Architectural Profile</h3>
                <p className="text-neutral-300 text-sm leading-relaxed whitespace-pre-line font-light">
                  {property.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-3">Distinguished Amenities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.amenities.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-950/40 border border-neutral-800 text-neutral-200 text-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Agent & Booking Card */}
            <div className="space-y-6">
              {/* Agent card */}
              <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800 space-y-4">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  Exclusive Listing Agent
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-amber-400/50">
                    <Image
                      src={property.agent.avatar}
                      alt={property.agent.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{property.agent.name}</h4>
                    <p className="text-xs text-amber-400">{property.agent.title}</p>
                  </div>
                </div>
                <div className="space-y-2 text-xs text-neutral-300 pt-2 border-t border-neutral-800">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{property.agent.email}</span>
                  </div>
                </div>
              </div>

              {/* VIP Tour Booking Form */}
              <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800">
                <h4 className="text-sm font-bold text-white mb-1">
                  Schedule Private Showing
                </h4>
                <p className="text-xs text-neutral-400 mb-4">
                  Request an escorted private tour with the listing director.
                </p>

                {submitted ? (
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex flex-col items-center gap-2 text-center">
                    <Check className="w-6 h-6 text-amber-400" />
                    <p className="font-semibold">Tour Request Registered</p>
                    <p className="text-neutral-400 text-[11px]">
                      Our concierge desk will confirm your escort time within 2 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Full Name *"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Corporate or Personal Email *"
                        required
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Direct Phone Number"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <input
                        type="date"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <textarea
                        rows={2}
                        placeholder="Specific requirements or private jet arrival info..."
                        value={clientMessage}
                        onChange={(e) => setClientMessage(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 active:scale-95 disabled:opacity-50"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Reserving Appointment...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Request Private Escort</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
