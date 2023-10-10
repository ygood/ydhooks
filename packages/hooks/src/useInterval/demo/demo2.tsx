import { React, useState } from 'react';
import { useInterval } from 'yd-hooks';
import { Button } from 'antd';

const Demo2 = () => {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(2000);
  const clear = useInterval(
    () => {
      setCount((val) => val + 1);
    },
    delay,
    { immediate: true },
  );
  return (
    <>
      <p>{count}</p>
      <Button onClick={clear}>停止</Button>
      <Button
        onClick={() => {
          setDelay(1000);
        }}
      >
        修改时间间隔
      </Button>
    </>
  );
};

export default Demo2;
