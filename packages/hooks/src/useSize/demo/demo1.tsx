import React, { useRef } from 'react';
import { useSize } from 'yd-hooks';

const Demo1 = () => {
  const ref = useRef();
  const size = useSize(ref);
  return (
    <>
      <p ref={ref} style={{ width: '200px', height: '50px' }}>
        width:{size?.width}
        height: {size?.height}
      </p>
    </>
  );
};

export default Demo1;
