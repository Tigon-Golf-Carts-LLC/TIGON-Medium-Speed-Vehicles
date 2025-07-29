import { useEffect } from "react";
import { useLocation } from "wouter";

// Declare functions for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export function usePageTracking() {
  const [location] = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-0R3W3GMMRG', {
        page_path: location,
      });
    }
  }, [location]);
}

export function trackEvent(action: string, category: string, label?: string, value?: number) {
  // Track with Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
  
  // Track with Google Tag Manager dataLayer
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: action,
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Analytics component to be used in the main App
export default function Analytics() {
  usePageTracking();
  return null;
}