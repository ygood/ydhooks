import { renderHook } from '@testing-library/react';
import useTimeout from '..';

interface ParamsObj {
  fn: (...arg: any) => any;
  delay: number | undefined;
}

const setUp = ({ fn, delay }: ParamsObj) => renderHook(() => useTimeout(fn, delay));

describe('test useTimeout', () => {
  jest.useFakeTimers();
  jest.spyOn(window, 'clearTimeout');

  it('timeout should work', () => {
    const callback = jest.fn();
    setUp({ fn: callback, delay: 20 });
    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(70);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('timeout should be clear', () => {
    const callback = jest.fn();

    const hook = setUp({ fn: callback, delay: 2000 });
    expect(callback).not.toBeCalled();

    hook.result.current();
    jest.advanceTimersByTime(30);
    expect(callback).toHaveBeenCalledTimes(0);
    expect(clearTimeout).toHaveBeenCalledTimes(1);
  });
});
