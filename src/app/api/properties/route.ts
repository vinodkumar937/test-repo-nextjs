import { NextResponse } from 'next/server';
import { PROPERTIES } from '@/data/properties';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');
  const type = searchParams.get('type');
  const city = searchParams.get('city');
  const query = searchParams.get('query')?.toLowerCase();
  const maxPrice = searchParams.get('maxPrice');

  let results = [...PROPERTIES];

  if (status && status !== 'All') {
    results = results.filter(p => p.status.toLowerCase() === status.toLowerCase());
  }

  if (type && type !== 'All') {
    results = results.filter(p => p.type.toLowerCase() === type.toLowerCase());
  }

  if (city && city !== 'All') {
    results = results.filter(p => p.city.toLowerCase() === city.toLowerCase());
  }

  if (maxPrice) {
    const num = Number(maxPrice);
    if (!isNaN(num) && num > 0) {
      results = results.filter(p => p.price <= num);
    }
  }

  if (query) {
    results = results.filter(p => 
      p.title.toLowerCase().includes(query) ||
      p.address.toLowerCase().includes(query) ||
      p.city.toLowerCase().includes(query) ||
      p.tagline.toLowerCase().includes(query)
    );
  }

  return NextResponse.json({
    total: results.length,
    properties: results
  });
}
