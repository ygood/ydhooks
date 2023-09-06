import React, { useState } from 'react';
import { useDebounceFn } from 'yd-hooks';
import { Button } from 'antd';

export default () => {
  const [count, setCount] = useState<number>(1);
  const change = () => {
    setCount((c) => c + 1);
  };
  const cb = useDebounceFn(change);

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
