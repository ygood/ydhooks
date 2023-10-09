import { useState, useMemo } from 'react';
import { isNumber } from '../utils';

export interface Options {
  min?: number;
  max?: number;
}

export interface Actions {
  inc: (delta?: number) => void;
  dec: (delta?: number) => void;
  set: (value: number | ((c: number) => number)) => void;
  reset: () => void;
}

export type ValueParam = number | ((c: number) => number);

const useCounter = (initValue = 0, options?: Options) => {
  if (options?.min !== undefined && options?.max !== undefined) {
    if (options?.min > options?.max) {
      throw new Error('最大值不能小于最小值');
    }
  }
  const [current, setCurrent] = useState<number>(initValue);
  const actions = useMemo(() => {
    const inc = (val = 1) => {
      setCurrent((cur) => {
        if (options?.max !== undefined && cur + val > options?.max) {
          return options?.max;
        }
        return cur + val;
      });
    };

    const dec = (val = 1) => {
      setCurrent((cur) => {
        if (options?.min !== undefined && cur - val < options?.min) {
          return options?.min;
        }
        return cur - val;
      });
    };

    const set = (val: ValueParam) => {
      setCurrent((c) => {
        const newval = isNumber(val) ? val : val(c);
        if (options?.min !== undefined && newval < options?.min) {
          throw new Error('不能小于最小值');
        }
        if (options?.max !== undefined && newval > options?.max) {
          throw new Error('不能大于最大值');
        }
        return newval;
      });
    };

    const reset = () => {
      setCurrent(initValue);
    };
    return { inc, dec, set, reset };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [current, actions];
};

export default useCounter;
