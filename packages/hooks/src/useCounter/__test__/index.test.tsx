import { act, renderHook } from '@testing-library/react';
import useCounter from '..';

describe('test useCounter', () => {
  it('基本測試', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current[0]).toEqual(10);

    // 測試inc方法
    act(() => {
      result.current[1].inc();
    });
    expect(result.current[0]).toEqual(11);

    // 測試dec方法
    act(() => {
      result.current[1].dec();
    });
    expect(result.current[0]).toEqual(10);

    // 測試set方法
    act(() => {
      result.current[1].set(5);
    });
    expect(result.current[0]).toEqual(5);

    // 測試reset方法
    act(() => {
      result.current[1].reset();
    });
    expect(result.current[0]).toEqual(10);
  });

  it('自定义增减数值測試', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current[0]).toEqual(10);

    // 測試inc方法
    act(() => {
      result.current[1].inc(2);
    });
    expect(result.current[0]).toEqual(12);

    // 測試dec方法
    act(() => {
      result.current[1].dec(6);
    });
    expect(result.current[0]).toEqual(6);

    // 測試set方法
    act(() => {
      result.current[1].set((e) => e + 5);
    });
    expect(result.current[0]).toEqual(11);
  });

  it('最大最小值测试', () => {
    const { result } = renderHook(() => useCounter(10, { max: 20, min: 5 }));
    expect(result.current[0]).toEqual(10);

    // 測試inc方法
    act(() => {
      result.current[1].inc(15);
    });
    expect(result.current[0]).toEqual(20);

    // 測試dec方法
    act(() => {
      result.current[1].dec(20);
    });
    expect(result.current[0]).toEqual(5);

    // 測試set方法
    try {
      act(() => {
        result.current[1].set(30);
      });
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
