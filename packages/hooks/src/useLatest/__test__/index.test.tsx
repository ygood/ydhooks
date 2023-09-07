import { act, renderHook } from '@testing-library/react';
import { useState } from 'react';
import useLatest from '..';

describe('test useLatest', () => {
  it('基本測試', () => {
    const { result: stateres } = renderHook(() => useState(0));
    const { result } = renderHook(() => useLatest(stateres.current[0]));
    act(() => {
      const val = result.current.current + 1;
      stateres.current[1](val);
    });
    expect(stateres.current[0]).toEqual(1);
  });
});
