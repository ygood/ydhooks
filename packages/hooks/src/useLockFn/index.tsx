import { useRef, useCallback } from 'react';

function useLockFn<T extends any[] = any[], V extends any = any>(fn: (...args: T) => Promise<V>) {
  const running = useRef(false);
  return useCallback(
    async (...args: T) => {
      if (running.current) {
        return;
      }
      running.current = true;
      try {
        const res = await fn(...args);
        running.current = false;
        return res;
      } catch (e) {
        running.current = false;
        throw new Error(e);
      }
    },
    [fn],
  );
}

export default useLockFn;
