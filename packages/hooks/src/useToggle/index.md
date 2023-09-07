---
nav:
  path: /hooks
---

# useToggle

用于在两个状态值间切换的 Hook。

## 代码演示

### 基础用法

<code hideActions='["CSB"]' src="./demo/demo1.tsx"></code>

## API

```typescript

const [state, { toggle, setLeft, setRight }] = useToggle<T = boolean>(): [boolean, Actions<T>];

const [state, { toggle, setLeft, setRight }] = useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, Actions<T | U>];
```
