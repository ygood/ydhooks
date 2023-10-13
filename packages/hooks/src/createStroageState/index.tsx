import { useState, useEffect } from 'react';
import { isFunction, isUndef } from '../utils';

export interface IOption<T> {
  defaultValue?: T | (() => T);
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
}

export type SetState<S> = S | ((prevState?: S) => S);

function createUseStroageState(getStorage: () => Storage | undefined) {
  function useStroageState<T>(key: string, Options: IOption<T> = {}) {
    const storage = getStorage();
    if (!storage) {
      throw new Error('此环境不存在本地存储方法');
    }
    if (!key) {
      throw new Error('key 必须是一个字符串类型');
    }

    const serializer = Options?.serializer || JSON.stringify;
    const deserializer = Options?.deserializer || JSON.parse;

    const getStoredValue = () => {
      const row = storage.getItem(key);
      if (row !== null) {
        return deserializer(row);
      }
      let defValue = Options?.defaultValue;
      if (isFunction(defValue)) {
        defValue = defValue();
      }
      return defValue;
    };

    const [value, setValue] = useState(getStoredValue());

    useEffect(() => {
      setValue(getStoredValue());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key]);

    const updateValue = (val: SetState<T>) => {
      const curValue = isFunction(val) ? val() : val;
      setValue(curValue);
      if (isUndef(curValue)) {
        storage.removeItem(key);
      } else {
        storage.setItem(key, serializer(curValue));
      }
    };

    return [value, updateValue];
  }
  return useStroageState;
}

export default createUseStroageState;
