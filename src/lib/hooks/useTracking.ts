'use client';

import { useEffect, useCallback } from 'react';

type EventType = 'PAGE_VIEW' | 'PRODUCT_VIEW' | 'CHECKOUT_START' | 'WHATSAPP_REDIRECT';

export function useTracking() {
  const trackEvent = useCallback(async (type: EventType, productId?: string, metadata?: any) => {
    try {
      // In production, you might want to use a more robust queueing or non-blocking way
      fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, productId, metadata }),
      }).catch(err => console.error('Tracking failed:', err));
    } catch (e) {
      // Silent fail for tracking
    }
  }, []);

  return { trackEvent };
}
