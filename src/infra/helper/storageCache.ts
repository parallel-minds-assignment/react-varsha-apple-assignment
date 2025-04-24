
/**
 * This module provides functions to set and get session storage cache with a TTL (time-to-live).
 */

const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

interface CachedData<T> {
  data: T;
  expiry: number;
}

/**
 * This function sets a session cache with a specified key and data.
 * @param key 
 * @param data 
 */
export const setSessionCache = <T>(key: string, data: T) => {
  const payload: CachedData<T> = {
    data,
    expiry: Date.now() + CACHE_TTL,
  };
  sessionStorage.setItem(key, JSON.stringify(payload));
};

/**
 * This function retrieves data from session cache based on the key.
 * @param key
 * @returns the cached data or null if it doesn't exist or has expired.
 */
export const getSessionCache = <T>(key: string): T | null => {
  const item = sessionStorage.getItem(key);
  if (!item) return null;

  try {
    const parsed: CachedData<T> = JSON.parse(item);
    if (parsed.expiry > Date.now()) {
      return parsed.data;
    } else {
      sessionStorage.removeItem(key);
      return null;
    }
  } catch {
    sessionStorage.removeItem(key);
    return null;
  }
};
