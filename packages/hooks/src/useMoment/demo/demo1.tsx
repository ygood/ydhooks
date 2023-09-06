import React, { useState } from 'react';
import { useMoment } from 'yd-hooks';

export default () => {
  const [count, setCount] = useState(0);
  useMoment(() => {
    setCount(100);
  });
  return (
    <>
      <p>count: {count}</p>
    </>
  );
};
