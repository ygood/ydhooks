---
nav:
  path: /hooks
---

# useCopy

用于文本复制功能，依赖于 `copy-to-clipboard` 包

## 代码演示

### 基础用法

<code hideActions='["CSB"]' src="./demo/demo1.tsx"></code>

## API

```typescript
type CopyTextProp = string | undefined;
const [text, copy] = useCopy() :[CopyTextProp, (value: number | string) => void];
```
