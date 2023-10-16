import { sleep } from '../../utils/testUtils';
import useLockFn from '../index';
import { act, renderHook } from '@testing-library/react';

describe('test useLockFn', () => {
  const jestFn = jest.fn();
  const fn = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(0);
      }, 1000);
    }).then(() => {
      jestFn();
    });
  };
  test('基础测试', async () => {
    const { result } = renderHook(() => useLockFn(fn));
    act(() => {
      result.current();
      result.current();
      result.current();
    });
    await sleep(2000);
    expect(jestFn).toHaveBeenCalledTimes(1);
  });
});
