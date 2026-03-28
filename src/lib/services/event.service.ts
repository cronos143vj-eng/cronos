import { prisma } from '../prisma';

export type EventType = 'PAGE_VIEW' | 'PRODUCT_VIEW' | 'CHECKOUT_START' | 'WHATSAPP_REDIRECT';

export async function trackEventServer(type: EventType, productId?: string, metadata?: any) {
  try {
    return await prisma.event.create({
      data: {
        type,
        productId,
        metadata,
      },
    });
  } catch (error) {
    console.error(`[SERVER_TRACKING_ERROR] ${type}:`, error);
  }
}
