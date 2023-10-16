import React, { useState } from 'react';
import { Button } from 'antd';
import { useLockFn } from 'yd-hooks';

const Demo = () => {
  const [count, setCount] = useState(0);
  const fn = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(0);
      }, 3000);
    }).then(() => {
      setCount((x) => x + 1);
    });
  };
  const lockFn = useLockFn(fn);
  return (
    <>
      <p>{count}</p>
      <Button
        onClick={() => {
          lockFn();
        }}
      >
        加一
      </Button>
    </>
  );
};

export default Demo;
