/**
 * Analytics provider implementations
 * Each provider safely handles missing pixels/scripts
 */

import { analyticsConfig, isDevelopmentMode } from './config';
import { logger } from '../logger';

/**
 * Meta Pixel (Facebook/Instagram) implementation
 */
export const metaPixel = {
  /**
   * Track event with Meta Pixel
   * @param {string} eventName - Event name
   * @param {Record<string, unknown>} [params] - Event parameters
   */
  track(eventName, params = {}) {
    if (!analyticsConfig.meta.enabled) {
      return;
    }

    try {
      if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        window.fbq('track', eventName, params);

        if (isDevelopmentMode) {
          logger.info(`[Meta Pixel] Tracked: ${eventName}`, params);
        }
      }
    } catch (error) {
      logger.error('[Meta Pixel] Failed to track event', error, {
        eventName,
        params,
      });
    }
  },

  /**
   * Track custom event with Meta Pixel
   * @param {string} eventName - Custom event name
   * @param {Record<string, unknown>} [params] - Event parameters
   */
  trackCustom(eventName, params = {}) {
    if (!analyticsConfig.meta.enabled) {
      return;
    }

    try {
      if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        window.fbq('trackCustom', eventName, params);

        if (isDevelopmentMode) {
          logger.info(`[Meta Pixel] Tracked custom: ${eventName}`, params);
        }
      }
    } catch (error) {
      logger.error('[Meta Pixel] Failed to track custom event', error, {
        eventName,
        params,
      });
    }
  },
};

/**
 * TikTok Pixel implementation
 */
export const tiktokPixel = {
  /**
   * Track event with TikTok Pixel
   * @param {string} eventName - Event name
   * @param {Record<string, unknown>} [params] - Event parameters
   */
  track(eventName, params = {}) {
    if (!analyticsConfig.tiktok.enabled) {
      return;
    }

    try {
      if (
        typeof window !== 'undefined' &&
        typeof window.ttq === 'object' &&
        typeof window.ttq.track === 'function'
      ) {
        window.ttq.track(eventName, params);

        if (isDevelopmentMode) {
          logger.info(`[TikTok Pixel] Tracked: ${eventName}`, params);
        }
      }
    } catch (error) {
      logger.error('[TikTok Pixel] Failed to track event', error, {
        eventName,
        params,
      });
    }
  },
};

/**
 * Pinterest Tag implementation
 */
export const pinterestTag = {
  /**
   * Track event with Pinterest Tag
   * @param {string} eventName - Event name
   * @param {Record<string, unknown>} [params] - Event parameters
   */
  track(eventName, params = {}) {
    if (!analyticsConfig.pinterest.enabled) {
      return;
    }

    try {
      if (
        typeof window !== 'undefined' &&
        typeof window.pintrk === 'function'
      ) {
        window.pintrk('track', eventName, params);

        if (isDevelopmentMode) {
          logger.info(`[Pinterest Tag] Tracked: ${eventName}`, params);
        }
      }
    } catch (error) {
      logger.error('[Pinterest Tag] Failed to track event', error, {
        eventName,
        params,
      });
    }
  },
};

/**
 * Google Analytics 4 implementation
 */
export const ga4 = {
  /**
   * Track event with GA4
   * @param {string} eventName - Event name
   * @param {Record<string, unknown>} [params] - Event parameters
   */
  track(eventName, params = {}) {
    if (!analyticsConfig.ga4.enabled) {
      return;
    }

    try {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', eventName, params);

        if (isDevelopmentMode) {
          logger.info(`[GA4] Tracked: ${eventName}`, params);
        }
      }
    } catch (error) {
      logger.error('[GA4] Failed to track event', error, { eventName, params });
    }
  },
};
