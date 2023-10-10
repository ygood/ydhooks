# 安装

npm安装

```sh
npm install yd-hooks
```

yarn安装

```sh
yarn add yd-hooks
```

pnpm安装

```sh
pnpm add yd-hooks
```

## 引入

```ts
import { useLatest } from 'yd-hooks';
const Test = () => {
  const latestCountRef = useLatest(1);
  return (
    <>
      <p>{latestCountRef.current}</p>
    </>
  );
};
export default Test;
```
