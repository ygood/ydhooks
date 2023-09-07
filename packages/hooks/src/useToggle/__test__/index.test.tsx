import { act, renderHook } from '@testing-library/react';
import useToggle from '..';

describe('test useToggle', () => {
  it('測試參數為空', async () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toEqual(false);
    // 測試toggle方法
    act(() => {
      result.current[1].toggle();
    });
    expect(result.current[0]).toEqual(true);
    act(() => {
      result.current[1].toggle();
    });
    expect(result.current[0]).toEqual(false);
    // 測試setLeft方法
    act(() => {
      result.current[1].setLeft();
    });
    expect(result.current[0]).toEqual(false);
    // 測試setRight方法
    act(() => {
      result.current[1].setRight();
    });
    expect(result.current[0]).toEqual(true);
    // 測試set方法
    act(() => {
      result.current[1].set(false);
    });
    expect(result.current[0]).toEqual(false);
  });
  it('測試參數不為空', async () => {
    const { result } = renderHook(() => useToggle(1, 2));
    expect(result.current[0]).toEqual(1);
    // 測試toggle方法
    act(() => {
      result.current[1].toggle();
    });
    expect(result.current[0]).toEqual(2);
    act(() => {
      result.current[1].toggle();
    });
    expect(result.current[0]).toEqual(1);
    // 測試setLeft方法
    act(() => {
      result.current[1].setLeft();
    });
    expect(result.current[0]).toEqual(1);
    // 測試setRight方法
    act(() => {
      result.current[1].setRight();
    });
    expect(result.current[0]).toEqual(2);
    // 測試set方法
    act(() => {
      result.current[1].set(1);
    });
    expect(result.current[0]).toEqual(1);
  });
});
