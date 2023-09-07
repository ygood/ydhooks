import { act, renderHook } from '@testing-library/react';
import useDebounceFn from '..';
import { sleep } from '../../utils/testUtils';

describe('test useDebounceFn', () => {
  it('基本測試', async () => {
    let num = 0;
    const add = () => {
      num++;
    };
    const { result } = renderHook(() => useDebounceFn(add, 1000));
    await act(async () => {
      result.current();
      expect(num).toEqual(0);
      await sleep(1500);
      expect(num).toEqual(1);
    });
  });
});
