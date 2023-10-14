import React, { useRef, useState } from 'react';
import { useEventListener } from 'yd-hooks';

const Demo = () => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  useEventListener(
    'click',
    () => {
      setCount((val) => val + 1);
    },
    { target: ref },
  );
  return (
    <>
      <p>{count}</p>
      <button ref={ref}>加一</button>
    </>
  );
};

export default Demo;
