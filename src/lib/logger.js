/**
 * Logger utility for client and server-side logging
 * Follows logging standards: silent in production (client), always logs (server)
 */

const isDevelopment = process.env.NODE_ENV === 'development';
const isClient = typeof window !== 'undefined';

/**
 * Logger object with different log levels
 */
export const logger = {
  /**
   * Info logs - development only (client-side)
   * @param {string} message - Log message
   * @param {Record<string, unknown>} [context] - Additional context
   */
  info(message, context = {}) {
    if (isClient && !isDevelopment) {
      return;
    }

    const timestamp = new Date().toISOString();
    // eslint-disable-next-line no-console
    console.log(`[INFO] ${timestamp} - ${message}`, context);
  },

  /**
   * Warning logs - always logged
   * @param {string} message - Warning message
   * @param {Record<string, unknown>} [context] - Additional context
   */
  warn(message, context = {}) {
    const timestamp = new Date().toISOString();
    console.warn(`[WARN] ${timestamp} - ${message}`, context);
  },

  /**
   * Error logs - always logged
   * @param {string} message - Error message
   * @param {Error | Record<string, unknown>} [error] - Error object or context
   * @param {Record<string, unknown>} [context] - Additional context
   */
  error(message, error = {}, context = {}) {
    const timestamp = new Date().toISOString();
    const errorContext =
      error instanceof Error
        ? { ...context, error: error.message, stack: error.stack }
        : { ...context, ...error };

    console.error(`[ERROR] ${timestamp} - ${message}`, errorContext);
  },
};
