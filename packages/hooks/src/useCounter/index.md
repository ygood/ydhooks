---
nav:
  path: /hooks
---

# useCounter

用于计数的hook

## 代码演示

### 基础用法

<code hideActions='["CSB"]' src="./demo/demo1.tsx"></code>

### API

```ts
const [current, { inc, dec, set, reset }] = useCounter(initialValue, { min, max });
```

### 参数

| 参数         | 说明   | 类型   | 默认值 |
| ------------ | ------ | ------ | ------ |
| initialValue | 初始值 | number | 0      |
| min          | 最小值 | number | -      |
| max          | 最大值 | number | -      |

### 返回

| 参数    | 说明   | 类型                                                   | 默认值 |
| ------- | ------ | ------------------------------------------------------ | ------ |
| current | 当前值 | number                                                 | 0      |
| inc     | 增加值 | (delta?: number) => void                               | 1      |
| dec     | 减少值 | (delta?: number) => void                               | 1      |
| set     | 设置值 | (value: number &#124; ((c: number) => number)) => void | -      |
| reset   | 重置   | () => void                                             | -      |
