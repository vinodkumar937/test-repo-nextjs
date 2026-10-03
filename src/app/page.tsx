'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import Neighborhoods from '@/components/Neighborhoods';
import MortgageCalculator from '@/components/MortgageCalculator';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import PropertyDetailsModal from '@/components/PropertyDetailsModal';
import { Property } from '@/data/properties';

export default function Home() {
  const [statusFilter, setStatusFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const handleSearchScroll = () => {
    const el = document.getElementById('properties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCity = (city: string) => {
    setSearchQuery(city);
    handleSearchScroll();
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col font-sans selection:bg-amber-500 selection:text-neutral-950">
      <Navbar />

      <main className="flex-1">
        <Hero
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearchScroll}
        />

        <FeaturedProperties
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          searchQuery={searchQuery}
          onSelectProperty={setSelectedProperty}
        />

        <Neighborhoods onSelectCity={handleSelectCity} />

        <MortgageCalculator />

        <Testimonials />

        <ContactSection />
      </main>

      <Footer />

      <PropertyDetailsModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </div>
  );
}
