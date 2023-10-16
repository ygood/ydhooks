---
nav:
  path: /hooks
---

# useInterval

用于简化setInterval，重复执行某个函数

## 代码演示

### 基础用法

<code hideActions='["CSB"]' src="./demo/demo1.tsx"></code>

### 高级用法

<code hideActions='["CSB"]' src="./demo/demo2.tsx"></code>

## API

```typescript
const clear = useInterval(fn, delay, { immediate: true });
```

### 参数

| 参数      | 说明                 | 类型       | 默认值 |
| --------- | -------------------- | ---------- | ------ |
| fn        | 需要执行的函数       | () => void | -      |
| delay     | 执行间隔时间         | number     | 1000   |
| immediate | 首次进入是否需要执行 | boolean    | false  |

### 返回

| 参数  | 说明       | 类型       | 默认值 |
| ----- | ---------- | ---------- | ------ |
| clear | 清除定时器 | () => void | -      |
