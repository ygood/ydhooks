import { useRef, useEffect } from 'react';

export type Func = () => void;

const useTimeout = (fn: Func, delay = 1000) => {
  const timer = useRef(null);
  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      fn();
    }, delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay]);
  const clear = () => {
    clearTimeout(timer.current);
  };
  return clear;
};

export default useTimeout;
