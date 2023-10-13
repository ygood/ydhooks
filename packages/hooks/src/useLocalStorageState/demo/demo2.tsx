import React from 'react';
import { useLocalStorageState } from 'yd-hooks';
import { Button } from 'antd';

const Demo = () => {
  const [msg, changeMsg] = useLocalStorageState('msg_adv', {
    defaultValue: { name: 'yanlei', action: 'love', lover: 'dengjuan' },
  });

  return (
    <>
      <p>{`${msg?.name} ${msg?.action} ${msg?.lover}`}</p>
      <Button
        onClick={() => {
          changeMsg({ name: 'dengjuan', action: 'love', lover: 'yanlei' });
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
