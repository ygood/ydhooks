---
nav:
  path: /hooks
---

# useLockFn

用于函数竞态锁，防止函数未执行完重复执行

## 代码演示

### 基础用法

<code hideActions='["CSB"]' src="./demo/demo1.tsx"></code>

## API

```typescript
const lockFn = useLockFn(fn);
```

### 参数

| 参数 | 说明                   | 类型                             | 默认值 |
| ---- | ---------------------- | -------------------------------- | ------ |
| fn   | 需要添加竞态lock的函数 | (...args: any[]) => Promise<any> | -      |

### 返回

| 参数   | 说明               | 类型                             | 默认值 |
| ------ | ------------------ | -------------------------------- | ------ |
| lockFn | 添加竞态lock的函数 | (...args: any[]) => Promise<any> | -      |
