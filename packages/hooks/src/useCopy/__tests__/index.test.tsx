import useCopy from '../index';
import { act, renderHook } from '@testing-library/react';

describe('test useCopy', () => {
  test('基础测试', () => {
    const { result } = renderHook(() => useCopy());
    act(() => {
      result.current[1]('test');
    });
    expect(result.current[0]).toEqual('test');
    act(() => {
      result.current[1]('abc');
    });
    expect(result.current[0]).toEqual('abc');
  });
});
