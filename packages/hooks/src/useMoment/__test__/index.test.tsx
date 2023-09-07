import { renderHook } from '@testing-library/react';
import { useState } from 'react';
import useMoment from '..';

describe('test useMoment', () => {
  it('基本測試', () => {
    const { result: stateres } = renderHook(() => useState(0));
    renderHook(() => useMoment(() => stateres.current[1](100)));
    expect(stateres.current[0]).toEqual(100);
  });
});
