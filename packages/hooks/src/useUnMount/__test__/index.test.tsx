import { renderHook } from '@testing-library/react';
import useUnMoment from '..';

describe('test useUnMount', () => {
  it('基本測試', () => {
    const fn = jest.fn();
    const hook = renderHook(() => useUnMoment(fn));
    expect(fn).toBeCalledTimes(0);
    hook.rerender();
    expect(fn).toBeCalledTimes(0);
    hook.unmount();
    expect(fn).toBeCalledTimes(1);
  });
});
