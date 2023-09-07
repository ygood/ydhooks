import { useCallback, useRef } from 'react';
// eslint-disable-next-line import/no-cycle
import useLatest from '../useLatest';
import useUnMoment from '../useUnMount';

type noop = (...args: any[]) => any;

const useDebounceFn = <T extends noop>(fn: T, wait = 500) => {
  const fnRef = useLatest(fn);
  const timerRef = useRef();
  useUnMoment(() => {
    clearInterval(timerRef.current);
  });
  const cb = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      fnRef.current();
      clearInterval(timerRef.current);
    }, wait);
  }, [fnRef, wait]);
  return cb;
};

export default useDebounceFn;
