import { React, useState } from 'react';
import { useTimeout } from 'yd-hooks';
import { Button } from 'antd';

const Demo1 = () => {
  const [count, setCount] = useState(0);
  const clear = useTimeout(() => {
    setCount((val) => val + 1);
  });
  return (
    <>
      <p>{count}</p>
      <Button onClick={clear}>停止</Button>
    </>
  );
};

export default Demo1;
