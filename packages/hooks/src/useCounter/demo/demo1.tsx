import React from 'react';
import { useCounter } from 'yd-hooks';
import { Button } from 'antd';

const Demo1 = () => {
  const [curentVal, { inc, dec, set, reset }] = useCounter(10, { max: 20, min: 0 });
  return (
    <>
      <p>{curentVal}</p>

      <Button
        onClick={() => {
          inc(2);
        }}
      >
        inc
      </Button>

      <Button
        onClick={() => {
          dec(2);
        }}
      >
        dec
      </Button>

      <Button
        onClick={() => {
          set((x) => {
            return x + 1;
          });
        }}
      >
        set
      </Button>

      <Button
        onClick={() => {
          reset();
        }}
      >
        reset
      </Button>
    </>
  );
};

export default Demo1;
