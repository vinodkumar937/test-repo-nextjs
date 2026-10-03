export interface Property {
  id: string;
  title: string;
  tagline: string;
  price: number;
  formattedPrice: string;
  status: 'For Sale' | 'For Rent';
  type: 'Villa' | 'Penthouse' | 'Mansion' | 'Apartment' | 'Waterfront';
  address: string;
  city: string;
  state: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  yearBuilt: number;
  featured: boolean;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
    avatar: string;
    title: string;
  };
}

export const PROPERTIES: Property[] = [
  {
    id: "prop-1",
    title: "The Bel-Air Horizon Villa",
    tagline: "Ultra-luxury modern estate with panoramic canyon & city views",
    price: 18500000,
    formattedPrice: "$18,500,000",
    status: "For Sale",
    type: "Villa",
    address: "1044 Stradella Rd, Bel Air",
    city: "Los Angeles",
    state: "CA",
    bedrooms: 6,
    bathrooms: 8,
    sqft: 11450,
    yearBuilt: 2024,
    featured: true,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
    ],
    description: "Perched above the clouds in prestigious Bel Air, this architectural triumph redefines modern opulence. Featuring floor-to-ceiling motorized glass walls, an 80-foot infinity-edge pool, private wine gallery for 1,200 bottles, soundproof Dolby Atmos screening room, and an expansive primary suite overlooking the Los Angeles basin.",
    amenities: [
      "80ft Heated Infinity Pool",
      "Dolby Atmos Private Cinema",
      "1,200-Bottle Wine Cellar",
      "Smart Home Automation",
      "Commercial Grade Chef's Kitchen",
      "Private Wellness Spa & Sauna",
      "4-Car Glass Display Garage",
      "24/7 Monitored Security"
    ],
    agent: {
      name: "Marcus Vance",
      phone: "+1 (310) 849-2201",
      email: "marcus@auraestates.com",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      title: "Senior Luxury Partner"
    }
  },
  {
    id: "prop-2",
    title: "One Central Park Sky Penthouse",
    tagline: "Iconic duplex penthouse floating 90 stories above Central Park",
    price: 32000000,
    formattedPrice: "$32,000,000",
    status: "For Sale",
    type: "Penthouse",
    address: "217 West 57th St, Billionaires' Row",
    city: "New York",
    state: "NY",
    bedrooms: 5,
    bathrooms: 6,
    sqft: 8200,
    yearBuilt: 2023,
    featured: true,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80"
    ],
    description: "Suspended in the sky above Central Park, this duplex penthouse commands 360-degree unobstructed panoramas from the Atlantic Ocean to the George Washington Bridge. Featuring a double-height grand salon with 24-foot ceilings, private elevator vestibule, bespoke Calacatta marble finishes, and direct white-glove building services.",
    amenities: [
      "Private High-Speed Elevator",
      "Double-Height Grand Salon",
      "Bespoke Italian Marble Baths",
      "Central Park Unobstructed Views",
      "Olympic Indoor Pool Access",
      "Private Resident Club & Dining",
      "Concierge & Valet 24/7"
    ],
    agent: {
      name: "Elena Rostova",
      phone: "+1 (212) 993-8400",
      email: "elena@auraestates.com",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      title: "Manhattan Portfolio Director"
    }
  },
  {
    id: "prop-3",
    title: "Miami Star Island Coastal Haven",
    tagline: "Private waterfront paradise with 120ft private yacht slip & dock",
    price: 24750000,
    formattedPrice: "$24,750,000",
    status: "For Sale",
    type: "Waterfront",
    address: "44 Star Island Dr, South Beach",
    city: "Miami",
    state: "FL",
    bedrooms: 7,
    bathrooms: 9,
    sqft: 12800,
    yearBuilt: 2024,
    featured: true,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80"
    ],
    description: "A private tropical sanctuary on guard-gated Star Island. This newly unveiled masterpiece offers direct deep-water bay access with a 120-foot megayacht dock, lush landscaping with mature royal palms, outdoor summer kitchen, infinity pool cascading toward Biscayne Bay, and bespoke interiors designed by Parisian artisans.",
    amenities: [
      "120ft Deep-Water Yacht Dock",
      "Gated Island Security",
      "Resort Lagoon & Heated Spa",
      "Alfresco Outdoor Teppanyaki Kitchen",
      "Gym & Cryotherapy Room",
      "Sub-Zero & Wolf Dual Kitchens",
      "Solar + Tesla Powerwall Array"
    ],
    agent: {
      name: "Carlos Rivera",
      phone: "+1 (305) 512-8874",
      email: "carlos@auraestates.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      title: "Coastal & Waterfront Specialist"
    }
  },
  {
    id: "prop-4",
    title: "Aspen Red Mountain Chalet",
    tagline: "Ski-in/ski-out architectural masterpiece facing Ajax Mountain",
    price: 16900000,
    formattedPrice: "$16,900,000",
    status: "For Sale",
    type: "Mansion",
    address: "710 Willoughby Way, Red Mountain",
    city: "Aspen",
    state: "CO",
    bedrooms: 5,
    bathrooms: 7,
    sqft: 8900,
    yearBuilt: 2022,
    featured: false,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80"
    ],
    description: "Nestled on Aspen's coveted Billionaire Mountain, this custom chalet combines reclaimed timber with blackened steel and glass. Features heated driveway, exterior stone fire pit overlooking Roaring Fork Valley, ski locker room with boot warmers, and a zero-threshold glass living room facing snow-capped peaks.",
    amenities: [
      "Ski-in / Ski-out Direct Access",
      "Heated Driveway & Walkways",
      "Oxygen-Enriched Master Suite",
      "Cedar Barrel Sauna & Hot Tub",
      "Ski Lounge & Equipment Locker",
      "Double Fireplace in Colorado Stone"
    ],
    agent: {
      name: "Marcus Vance",
      phone: "+1 (310) 849-2201",
      email: "marcus@auraestates.com",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      title: "Senior Luxury Partner"
    }
  },
  {
    id: "prop-5",
    title: "The Tribeca Industrial Loft",
    tagline: "Authentic cobblestone cast-iron loft with 14ft wood-beamed ceilings",
    price: 28500,
    formattedPrice: "$28,500 / mo",
    status: "For Rent",
    type: "Apartment",
    address: "68 Franklin St, Tribeca",
    city: "New York",
    state: "NY",
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 4200,
    yearBuilt: 2021,
    featured: true,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1600&q=80"
    ],
    description: "An exceptional rental residence in the heart of historic Tribeca. Featuring key-locked elevator access directly into a dramatic 50-foot open living space, original exposed brick, restored pine timbers, Boffi gourmet kitchen, and primary bathroom suite with freestanding soaking tub.",
    amenities: [
      "Direct Keyed Elevator Access",
      "14-Foot Timber Beamed Ceilings",
      "Boffi Custom Italian Kitchen",
      "Wood-Burning Fireplace",
      "Sonos Architectural Sound Throughout",
      "Doorman & Package Concierge"
    ],
    agent: {
      name: "Elena Rostova",
      phone: "+1 (212) 993-8400",
      email: "elena@auraestates.com",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      title: "Manhattan Portfolio Director"
    }
  },
  {
    id: "prop-6",
    title: "Austin Hill Country Modern Estate",
    tagline: "Lake Austin frontage with two-story boat dock and private vineyard",
    price: 35000,
    formattedPrice: "$35,000 / mo",
    status: "For Rent",
    type: "Villa",
    address: "3804 Westlake Dr, Westlake Hills",
    city: "Austin",
    state: "TX",
    bedrooms: 5,
    bathrooms: 6,
    sqft: 7600,
    yearBuilt: 2024,
    featured: false,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
    ],
    description: "Available for executive lease on Lake Austin. Contemporary limestone estate surrounded by heritage live oaks. Complete with two-story boat dock with hydraulic lift, party deck, negative-edge pool, private pickleball court, and smart security throughout.",
    amenities: [
      "Private Lake Austin Boat Dock",
      "Regulation Pickleball Court",
      "Negative-Edge Swimming Pool",
      "Hill Country Limestone Finishes",
      "Electric Vehicle Fast Chargers",
      "Outdoor Fire Pit & Lounge"
    ],
    agent: {
      name: "Carlos Rivera",
      phone: "+1 (305) 512-8874",
      email: "carlos@auraestates.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      title: "Coastal & Waterfront Specialist"
    }
  }
];

export const NEIGHBORHOODS = [
  {
    name: "Bel-Air & Beverly Hills",
    city: "Los Angeles, CA",
    count: 38,
    avgPrice: "$14.2M",
    image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Tribeca & SoHo",
    city: "New York, NY",
    count: 52,
    avgPrice: "$8.9M",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Star Island & Palm Beach",
    city: "Miami / Palm Beach, FL",
    count: 27,
    avgPrice: "$21.5M",
    image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Red Mountain & Highlands",
    city: "Aspen, CO",
    count: 19,
    avgPrice: "$17.8M",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
  }
];
