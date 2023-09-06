import React from 'react';
import { useCopy } from 'yd-hooks';
import { Button, Input } from 'antd';

export default () => {
  const [, copy] = useCopy();
  return (
    <>
      <p>
        <Input />
      </p>
      <p>
        <Button
          onClick={() => {
            copy('zxczxc');
          }}
        >
          copy
        </Button>
      </p>
    </>
  );
};
