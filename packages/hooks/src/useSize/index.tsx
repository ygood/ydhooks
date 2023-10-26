import { getDomTarget } from '../utils/domUtil';
import ResizeObserver from 'resize-observer-polyfill';
import type { BasicTarget } from '../utils/domUtil';
import { useLayoutEffect, useState } from 'react';

interface Size {
  width: number;
  height: number;
}

function useSize<T extends BasicTarget = BasicTarget>(target: T) {
  const [state, setState] = useState<Size | undefined>(() => {
    const el = getDomTarget(target, window);
    return el ? { width: el.clientWidth, height: el.clientHeight } : undefined;
  });

  useLayoutEffect(() => {
    const el = getDomTarget(target, window);
    if (!el) {
      return;
    }
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((e) => {
        setState({ width: e.target.clientWidth, height: e.target.clientHeight });
      });
    });
    resizeObserver.observe(el);
    return () => {
      resizeObserver.disconnect();
    };
  }, [target]);
  return state;
}

export default useSize;
