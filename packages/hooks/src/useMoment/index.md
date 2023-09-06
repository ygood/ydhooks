---
nav:
  path: /hooks
---

# useMoment

进入组件时执行

## 代码演示

### 基础用法

<code hideActions='["CSB"]' src="./demo/demo1.tsx"></code>

## API

```typescript
useMoment(fn:() => void): void;
```

### 参数

| 参数 | 说明           | 类型         | 默认值 |
| ---- | -------------- | ------------ | ------ |
| fn   | 需要执行的函数 | `() => void` | -      |
