import { act, renderHook } from '@testing-library/react';
import useSize from '..';

let callback;

jest.mock('resize-observer-polyfill', () => {
  return jest.fn().mockImplementation((cb) => {
    callback = cb;
    return {
      observe: () => {},
      disconnect: () => {},
    };
  });
});

describe('test useSize', () => {
  it('基本測試', () => {
    const div = document.createElement('div');
    const { result } = renderHook(() => useSize(div));
    act(() => {
      callback([
        {
          target: {
            clientWidth: 200,
            clientHeight: 100,
          },
        },
      ]);
    });
    expect(result.current).toMatchObject({ width: 200, height: 100 });
  });
});
