import { useCallback, useRef } from 'react';
// eslint-disable-next-line import/no-cycle
import useLatest from '../useLatest';

type noop = (...args: any[]) => any;

const useThrottleFn = <T extends noop>(fn: T, time = 500) => {
  const fnRef = useLatest(fn);
  const oldTime = useRef(new Date());
  const cb = useCallback(() => {
    const curTime = new Date();
    const lag = curTime.valueOf() - oldTime.current.valueOf();
    if (lag > time) {
      fnRef?.current();
      oldTime.current = new Date();
    }
  }, []);

  return cb;
};

export default useThrottleFn;
