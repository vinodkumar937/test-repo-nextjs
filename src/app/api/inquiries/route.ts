import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, propertyId, propertyTitle, date, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields' },
        { status: 400 }
      );
    }

    const inquiry = {
      id: `inq-${Date.now()}`,
      name,
      email,
      phone: phone || '',
      propertyId: propertyId || null,
      propertyTitle: propertyTitle || 'General Inquiry',
      date: date || null,
      message: message || '',
      createdAt: new Date().toISOString(),
      status: 'received'
    };

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry received. A private client advisor will connect with you within 2 hours.',
        inquiry
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Invalid inquiry data' },
      { status: 400 }
    );
  }
}
