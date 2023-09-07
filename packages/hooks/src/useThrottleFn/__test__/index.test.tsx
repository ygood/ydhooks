import { act, renderHook } from '@testing-library/react';
import { sleep } from '../../utils/testUtils';
import useThrottleFn from '..';

describe('test useThrottleFn', () => {
  it('基本測試', async () => {
    let num = 0;
    const add = () => {
      num++;
    };
    const { result } = renderHook(() => useThrottleFn(add, 500));
    await act(async () => {
      result.current();
      expect(num).toEqual(0);
      await sleep(1000);
      result.current();
      expect(num).toEqual(1);
    });
  });
});
