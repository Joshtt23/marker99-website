/**
 * Analytics configuration
 * Similar pattern to siteConfig.js with feature flags and environment variables
 */

export const analyticsConfig = {
  // Meta Pixel (Facebook/Instagram)
  meta: {
    enabled: !!process.env.NEXT_PUBLIC_META_PIXEL_ID,
    pixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '',
  },

  // TikTok Pixel
  tiktok: {
    enabled: !!process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID,
    pixelId: process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID ?? '',
  },

  // Pinterest Tag
  pinterest: {
    enabled: !!process.env.NEXT_PUBLIC_PINTEREST_TAG_ID,
    tagId: process.env.NEXT_PUBLIC_PINTEREST_TAG_ID ?? '',
  },

  // Google Analytics 4
  ga4: {
    enabled: !!process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID,
    measurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? '',
  },
};

/**
 * Check if any analytics provider is enabled
 */
export const isAnalyticsEnabled = () => {
  return (
    analyticsConfig.meta.enabled ||
    analyticsConfig.tiktok.enabled ||
    analyticsConfig.pinterest.enabled ||
    analyticsConfig.ga4.enabled
  );
};

/**
 * Development mode - logs events to console
 */
export const isDevelopmentMode = process.env.NODE_ENV === 'development';
