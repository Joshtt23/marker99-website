/**
 * Unified analytics event tracking
 * Fires events to all enabled providers simultaneously
 */

import { isDevelopmentMode } from './config';
import { metaPixel, tiktokPixel, pinterestTag, ga4 } from './providers';
import { logger } from '../logger';

/**
 * Event names - consistent across all platforms
 */
export const AnalyticsEvent = {
  // Automatic events
  PAGE_VIEW: 'page_view',

  // User actions
  RESERVATION_CLICK: 'reservation_click',
  RESERVATION_SUBMIT: 'reservation_submit',
  PHONE_CLICK: 'phone_click',
  MENU_VIEW: 'menu_view',
  EMAIL_SIGNUP: 'email_signup',
  EVENT_CLICK: 'event_click',
  DIRECTIONS_CLICK: 'directions_click',
  ONLINE_ORDER_CLICK: 'online_order_click',
};

/**
 * Event parameters interface
 * @typedef {Object} EventParams
 * @property {number} [value] - Event value (for conversions)
 * @property {string} [currency] - Currency code (default: 'USD')
 * @property {string} [source] - Event source (e.g., 'header', 'hero')
 * @property {Record<string, unknown>} [custom] - Custom parameters
 */

/**
 * Track event across all enabled analytics providers
 * @param {string} eventName - Event name (use AnalyticsEvent constants)
 * @param {EventParams} [params] - Event parameters
 */
export function trackEvent(eventName, params = {}) {
  const { value, currency = 'USD', source, custom = {} } = params;

  // Build event parameters for all providers
  const eventParams = {
    ...(value !== undefined && { value }),
    ...(currency && { currency }),
    ...(source && { source }),
    ...custom,
  };

  // Fire to all enabled providers
  metaPixel.track(eventName, eventParams);
  tiktokPixel.track(eventName, eventParams);
  pinterestTag.track(eventName, eventParams);
  ga4.track(eventName, eventParams);

  // Development mode logging
  if (isDevelopmentMode) {
    logger.info(`[Analytics] Event tracked: ${eventName}`, eventParams);
  }
}

/**
 * Track conversion event with value
 * @param {string} eventName - Conversion event name
 * @param {number} value - Conversion value
 * @param {string} [currency] - Currency code (default: 'USD')
 * @param {Record<string, unknown>} [custom] - Custom parameters
 */
export function trackConversion(
  eventName,
  value,
  currency = 'USD',
  custom = {},
) {
  trackEvent(eventName, {
    value,
    currency,
    ...custom,
  });
}
