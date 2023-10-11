import { React, useState } from 'react';
import { useTimeout } from 'yd-hooks';
import { Button } from 'antd';

const Demo2 = () => {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const clear = useTimeout(() => {
    setCount((val) => val + 1);
  }, delay);
  return (
    <>
      <p>{count}</p>
      <Button onClick={clear}>停止</Button>
      <Button
        onClick={() => {
          setDelay(2000);
        }}
      >
        修改时间间隔
      </Button>
    </>
  );
};

export default Demo2;
