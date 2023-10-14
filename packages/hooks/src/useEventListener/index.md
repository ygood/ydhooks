---
nav:
  path: /hooks
---

# useEventListener

用于添加Dom事件的hook

## 代码演示

### 基础用法

<code hideActions='["CSB"]' src="./demo/demo1.tsx"></code>

### keydown 用法

<code hideActions='["CSB"]' src="./demo/demo2.tsx"></code>

## API

```ts
function useEventListener(eventName: string, handler: (ev: noop) => void, options?: Options): void;
```

### 参数

| 参数      | 说明       | 类型               | 默认值 |
| --------- | ---------- | ------------------ | ------ |
| eventName | 事件名称   | string             | -      |
| handler   | 处理函数   | (ev: noop) => void | -      |
| options   | 自定义参数 | Options            | -      |

### Options

| 参数    | 说明                                                                                                                                      | 类型                                                                                                      | 默认值 |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------ |
| target  | dom对象或者ref(可选)                                                                                                                      | (() => Element) &#124; Element &#124; Window &#124; Document &#124; React.MutableRefObject&lt;Element&gt; | window |
| once    | 表示 listener 在添加之后最多只调用一次。如果为 true，listener 会在其被调用之后自动移除。(可选)                                            | boolean                                                                                                   | false  |
| capture | 表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发(可选)                                                                   | boolean                                                                                                   | false  |
| passive | 设置为 true 时，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告(可选) | boolean                                                                                                   | false  |
