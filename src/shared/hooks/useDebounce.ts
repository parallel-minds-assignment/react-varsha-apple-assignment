import { useEffect, useState } from "react";

/**
 * A custom hook that debounces a value.
 * @param value - The value to debounce.
 * @param delay - The debounce delay in milliseconds.
 * @returns The debounced value.
*/

export function useDebounce<T>(value: T, delay = 500): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
}
