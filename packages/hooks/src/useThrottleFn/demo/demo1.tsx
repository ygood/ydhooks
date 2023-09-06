import React, { useState } from 'react';
import { useThrottleFn } from 'yd-hooks';
import { Button } from 'antd';

export default () => {
  const [count, setCount] = useState<number>(1);
  const change = () => {
    setCount((c) => c + 1);
  };
  const cb = useThrottleFn(change, 2000);

  return (
    <>
      <p>{count}</p>
      <p>
        <Button
          onClick={() => {
            cb();
          }}
        >
          加一
        </Button>
      </p>
    </>
  );
};
