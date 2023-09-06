---
nav:
---

# useThrottleFn

函数节流Hook。

## 代码演示

### 基础用法

<code hideActions='["CSB"]' src="./demo/demo1.tsx"></code>

## API

```typescript
type noop = (...args: any[]) => any;
const cb = useThrottleFn<T extends noop>(fn :T, dely:number);
```

### 参数

| 参数 | 说明               | 类型         | 默认值 |
| ---- | ------------------ | ------------ | ------ |
| fn   | 需要实现防抖的函数 | `() => void` | -      |
| dely | 延时时间           | `() => void` | 500    |
