import React from 'react';
import { useToggle } from 'yd-hooks';
import { Button } from 'antd';

const Demo = () => {
  const [state, { toggle, setLeft, setRight }] = useToggle(1, 2);

  return (
    <>
      <p>{`${state}`}</p>
      <p>
        <Button
          onClick={() => {
            toggle();
          }}
        >
          toggle
        </Button>
      </p>
      <p>
        <Button
          onClick={() => {
            setLeft();
          }}
        >
          setLeft
        </Button>
      </p>
      <p>
        <Button
          onClick={() => {
            setRight();
          }}
        >
          setRight
        </Button>
      </p>
    </>
  );
};

export default Demo;
