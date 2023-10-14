import React, { useRef } from 'react';
import { act, renderHook, fireEvent, render, screen } from '@testing-library/react';
import useEventListener from '..';

const Demo = ({ fn }) => {
  const ref = useRef(null);
  useEventListener(
    'click',
    () => {
      fn();
    },
    { target: ref },
  );
  return (
    <>
      <button ref={ref}>加一</button>
    </>
  );
};

describe('test useEventListener', () => {
  it('基本測試', async () => {
    const fn = jest.fn();
    renderHook(() =>
      useEventListener(
        'click',
        () => {
          fn();
        },
        { once: true },
      ),
    );
    await act(async () => {
      fireEvent.click(document);
      expect(fn).toHaveBeenCalledTimes(1);
      fireEvent.click(document);
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  it('ref測試', async () => {
    const fn = jest.fn();
    render(<Demo fn={fn} />);
    await act(async () => {
      fireEvent.click(screen.getByText('加一'));
      expect(fn).toHaveBeenCalledTimes(1);
      fireEvent.click(screen.getByText('加一'));
      expect(fn).toHaveBeenCalledTimes(2);
    });
  });
});
