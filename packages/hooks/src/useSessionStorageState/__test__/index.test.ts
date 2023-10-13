import { act, renderHook } from '@testing-library/react';
import useSessionStorageState from '..';

const deserializer = (val) => {
  return val + 1;
};
const serializer = (val) => {
  return JSON.stringify(val + 1);
};

describe('test useInterval', () => {
  it('基本測試', async () => {
    const { result } = renderHook(() => useSessionStorageState('age', { defaultValue: 18 }));
    expect(result.current[0]).toEqual(18);
    act(() => {
      result.current[1](19);
    });
    expect(result.current[0]).toEqual(19);
    expect(sessionStorage.getItem('age')).toEqual('19');
    act(() => {
      result.current[1](undefined);
    });
    expect(result.current[0]).toEqual(undefined);
    expect(sessionStorage.getItem('age')).toEqual(null);
  });

  it('复杂数据測試', async () => {
    const { result } = renderHook(() =>
      useSessionStorageState('JSON1', { defaultValue: { age: 18, name: 'yanlei' } }),
    );
    expect(result.current[0].age).toEqual(18);
    act(() => {
      result.current[1]({ age: 19, name: 'yanlei' });
    });
    expect(result.current[0].age).toEqual(19);
    expect(sessionStorage.getItem('JSON1')).toBeDefined();
  });

  it('复杂自定义序列化函数', async () => {
    const { result } = renderHook(() =>
      useSessionStorageState('JSON2', { defaultValue: 18, serializer, deserializer }),
    );
    expect(result.current[0]).toEqual(18);
    act(() => {
      result.current[1](19);
    });
    expect(sessionStorage.getItem('JSON2')).toEqual('20');
  });
});
