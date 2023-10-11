import { act, renderHook } from '@testing-library/react';
import { useState } from 'react';
import useInterval from '..';
import { sleep } from '../../utils/testUtils';

describe('test useInterval', () => {
  it('基本測試', async () => {
    const { result: state } = renderHook(() => useState(0));

    const { result } = renderHook(() =>
      useInterval(async () => {
        await act(() => {
          state.current[1]((val) => val + 1);
        });
      }),
    );

    await sleep(1500);
    expect(state.current[0]).toEqual(1);
    await sleep(1000);
    expect(state.current[0]).toEqual(2);
    await act(async () => {
      result.current();
      await sleep(2000);
      expect(state.current[0]).toEqual(2);
    });
  });

  it('进阶測試', async () => {
    const { result: state } = renderHook(() => useState(0));
    const { result: state2 } = renderHook(() => useState(1000));

    renderHook(() =>
      useInterval(
        async () => {
          await act(() => {
            state.current[1]((val) => val + 1);
          });
        },
        state2.current[0],
        { immediate: true },
      ),
    );
    await act(() => {
      state2.current[1](2000);
    });
    await sleep(2000);
    expect(state.current[0]).toEqual(2);
  });
});
