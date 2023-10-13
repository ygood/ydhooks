import React from 'react';
import { useSessionStorageState } from 'yd-hooks';
import { Button } from 'antd';

const Demo = () => {
  const [msg, changeMsg] = useSessionStorageState('msg', {
    defaultValue: 'test',
  });

  return (
    <>
      <p>{msg}</p>
      <Button
        onClick={() => {
          changeMsg('test1');
        }}
      >
        修改
      </Button>
      <Button
        onClick={() => {
          changeMsg(undefined);
        }}
      >
        清除
      </Button>
    </>
  );
};

export default Demo;
