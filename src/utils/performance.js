// filepath: /home/john/error20/src/utils/performance.js

/**
 * Returns a style object for dynamically loading critical background elements
 * @param {string} color - fallback color to show before the image loads
 * @param {string} imageUrl - URL of the background image to load
 * @returns {Object} style object with backgroundImage and backgroundColor
 */
export const lazyBackgroundStyle = (color, imageUrl) => ({
  backgroundColor: color,
  backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
});

/**
 * Creates a promise that resolves after a specified delay
 * @param {number} ms - Milliseconds to wait
 * @returns {Promise} Promise that resolves after the specified delay
 */
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Throttle function to limit the rate at which a function can fire
 * @param {Function} func - The function to throttle
 * @param {number} limit - The time limit in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Preloads an image to ensure it's in the browser cache
 * @param {string} src - The image source URL to preload
 * @returns {Promise} Promise that resolves when the image is loaded
 */
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};
