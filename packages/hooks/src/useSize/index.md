---
nav:
---

# useSize

获取dom节点的尺寸

## 代码演示

### 基础用法

<code hideActions='["CSB"]' src="./demo/demo1.tsx"></code>

## API

```typescript
interface Size {
  width: number;
  height: number;
}
const size = useSize(target);
```

### 参数

| 参数   | 说明             | 类型                                                                  | 默认值 |
| ------ | ---------------- | --------------------------------------------------------------------- | ------ |
| target | DOM 节点或者 ref | `Element` &#124; `(() => Element)` &#124; `MutableRefObject<Element>` | -      |

### 返回值

| 参数   | 说明     | 类型   | 默认值 |
| ------ | -------- | ------ | ------ |
| width  | DOM 长度 | number | -      |
| height | DOM 高度 | number | -      |
