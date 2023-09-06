import { useEffect } from 'react';

const useMoment = (fn: () => void) => {
  useEffect(() => {
    fn?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMoment;
