---
nav:
  path: /hooks
---

# useTimeout

用于简化setTimeout，延迟执行某个函数

## 代码演示

### 基础用法

<code hideActions='["CSB"]' src="./demo/demo1.tsx"></code>

### 高级用法

<code hideActions='["CSB"]' src="./demo/demo2.tsx"></code>

## API

```typescript
const clear = useTimeout(fn, delay);
```

### 参数

| 参数  | 说明           | 类型       | 默认值 |
| ----- | -------------- | ---------- | ------ |
| fn    | 需要指向的函数 | () => void | -      |
| delay | 执行延时时间   | number     | 1000   |

### 返回

| 参数  | 说明       | 类型       | 默认值 |
| ----- | ---------- | ---------- | ------ |
| clear | 清除定时器 | () => void | -      |
