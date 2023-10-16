import { act, renderHook } from '@testing-library/react';
import { useState } from 'react';
import useInterval from '..';
import { sleep } from '../../utils/testUtils';

describe('test useInterval', () => {
  it('基本測試', async () => {
    const fn = jest.fn();
    const { result } = renderHook(() => useInterval(fn));
    await sleep(1000);
    expect(fn).toHaveBeenCalledTimes(1);
    await sleep(1000);
    expect(fn).toHaveBeenCalledTimes(2);
    await act(async () => {
      result.current();
      await sleep(2000);
      expect(fn).toHaveBeenCalledTimes(2);
    });
  });

  it('进阶測試', async () => {
    const fn = jest.fn();
    const { result: state2 } = renderHook(() => useState(1000));
    renderHook(() => useInterval(fn, state2.current[0], { immediate: true }));
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
