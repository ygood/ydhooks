import React from 'react';
import { useSessionStorageState } from 'yd-hooks';
import { Button } from 'antd';

const Demo = () => {
  const deserializer = (val) => {
    const json = JSON.parse(val);
    json.age = 19;
    return json;
  };

  const serializer = (val) => {
    val.action = 'very love';
    return JSON.stringify(val);
  };

  const [msg, changeMsg] = useSessionStorageState('custom_serializer', {
    defaultValue: { name: 'yanlei', action: 'love', lover: 'dengjuan', age: 18 },
    serializer,
    deserializer,
  });

  return (
    <>
      <p>{`${msg?.name} ${msg?.action} ${msg?.lover} ${msg?.age}`}</p>
      <Button
        onClick={() => {
          changeMsg({ name: 'dengjuan', action: 'love', lover: 'yanlei', age: 18 });
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
