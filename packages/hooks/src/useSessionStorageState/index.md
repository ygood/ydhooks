---
nav:
  path: /hooks
---

# useSessionStorageState

用于SessionStorage存储的hook

## 代码演示

### 基础用法

<code hideActions='["CSB"]' src="./demo/demo1.tsx"></code>

### 复杂类型存储

复杂数据存储需要进行序列化与反序列化，默认使用JSON.stringify和JSON.parse

<code hideActions='["CSB"]' src="./demo/demo2.tsx"></code>

### 自定义序列化与反序列化函数

有时候需要自定义序列化与反序列化函数，如下实例：

<code hideActions='["CSB"]' src="./demo/demo3.tsx"></code>

## API

```ts
export interface IOption<T> {
  defaultValue?: T | (() => T);
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
}
const [msg, changeMsg] = useSessionStorageState(key, {
  defaultValue: 'test',
  serializer,
  deserializer,
});
```

### 参数

| 参数         | 说明                                 | 类型    | 默认值         |
| ------------ | ------------------------------------ | ------- | -------------- |
| key          | SessionStorage 键值                  | string  | -              |
| defaultValue | 默认值                               | any     | -              |
| serializer   | 序列化函数存入 SessionStorage 时执行 | string  | JSON.stringify |
| deserializer | 反序列化函数 返回时执行              | boolean | JSON.parse     |

### 返回

| 参数      | 说明                                                                         | 类型 | 默认值 |
| --------- | ---------------------------------------------------------------------------- | ---- | ------ |
| msg       | 返回的数据值                                                                 | any  | -      |
| changeMsg | 修改数据，可通过changeMsg()或者 changeMsg(undefined)将此条SessionStorage删除 | any  | -      |
