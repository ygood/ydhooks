import React, { useState } from 'react';
import { useEventListener } from 'yd-hooks';

const Demo = () => {
  const [msg, setMsg] = useState('');
  useEventListener('keydown', (ev) => {
    setMsg(ev.code);
  });
  return (
    <>
      <p>you keydown {msg}</p>
    </>
  );
};

export default Demo;
