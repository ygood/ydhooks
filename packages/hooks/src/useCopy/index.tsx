import writeClipboard from 'copy-to-clipboard';
import { useCallback, useState } from 'react';

type CopyTextProp = string | undefined;

const useCopy = (): [CopyTextProp, (value: number | string) => void] => {
  const [copyText, setCopyText] = useState<CopyTextProp>(undefined);
  const copy = useCallback(
    (value: number | string) => {
      writeClipboard(value.toString());
      setCopyText(value);
    },
    [setCopyText],
  );

  return [copyText, copy];
};

export default useCopy;
