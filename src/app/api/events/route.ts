import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, productId, metadata } = body;

    if (!type) {
      return new NextResponse('Event type is required', { status: 400 });
    }

    const event = await prisma.event.create({
      data: {
        type,
        productId,
        metadata,
      },
    });

    return NextResponse.json(event);
  } catch (error) {
    console.error('[EVENT_POST_ERROR]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
