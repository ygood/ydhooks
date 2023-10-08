import { useEffect } from 'react';
import useLatest from '../useLatest';
import useUnMoment from '../useUnMount';

const useTitle = (title: string, reset = false) => {
  const titleRef = useLatest(title);
  const bfTitle = document.title;
  useEffect(() => {
    document.title = titleRef.current;
  }, [titleRef]);
  useUnMoment(() => {
    if (reset) {
      document.title = bfTitle;
    }
  });
};

export default useTitle;
