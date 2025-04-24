import { useEffect } from "react";

/// This hook allows you to perform a fetch operation that can be aborted if the component unmounts or if the dependencies change.
export function useAbortableFetch(callback: (signal: AbortSignal) => void, deps: any[]) {
  useEffect(() => {
    const controller = new AbortController();
    callback(controller.signal);
    return () => controller.abort();
  }, deps);
}
