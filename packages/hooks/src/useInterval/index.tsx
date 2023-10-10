import { useEffect, useRef } from 'react';

export type Func = () => void;

export interface IOption {
  immediate: boolean;
}

const useInterval = (fn: Func, delay = 1000, option?: IOption) => {
  useEffect(() => {
    if (option?.immediate) {
      fn();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const timer = useRef();
  useEffect(() => {
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      fn();
    }, delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay]);
  const clear = () => {
    clearInterval(timer.current);
  };
  return clear;
};

export default useInterval;
