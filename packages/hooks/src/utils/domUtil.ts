import type { MutableRefObject } from 'react';
import isBrower from './isBrower';

type TargetValue<T> = T | undefined | null;

type TargetType = HTMLElement | Element | Window | Document;

export type BasicTarget<T extends TargetType = Element> =
  | (() => TargetValue<T>)
  | TargetValue<T>
  | MutableRefObject<TargetValue<T>>;

export function getDomTarget<T extends TargetType>(target: BasicTarget<T>, defaultTarget?: T) {
  if (!isBrower()) {
    return undefined;
  }
  if (!target) {
    return defaultTarget;
  }
  if (typeof target === 'function') {
    return target();
  }
  if ('current' in target) {
    return target.current;
  }
  return target;
}
