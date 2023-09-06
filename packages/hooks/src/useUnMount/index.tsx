import { useEffect } from 'react';
import useLatest from '../useLatest';

const useUnMoment = (fn: () => void) => {
  const fn1 = useLatest(fn);
  useEffect(() => {
    return () => {
      fn1.current();
    };
  }, []);
};

export default useUnMoment;
