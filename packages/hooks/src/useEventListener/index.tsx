import { BasicTarget, getDomTarget } from '../utils/domUtil';
import { EventUtil } from '../utils/eventUtil';
import { useEffect } from 'react';

type noop = (...p: any) => void;

export type Target = BasicTarget<HTMLElement | Element | Window | Document>;

export interface Options<T extends Target = Target> {
  target?: T;
  once?: boolean;
  capture?: boolean;
  passive?: boolean;
}

function useEventListener<K extends keyof HTMLElementEventMap>(
  eventName: K,
  handler: (ev: HTMLElementEventMap[K]) => void,
  options?: Options<HTMLElement>,
): void;

function useEventListener<K extends keyof ElementEventMap>(
  eventName: K,
  handler: (ev: ElementEventMap[K]) => void,
  options?: Options<Element>,
): void;

function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (ev: WindowEventMap[K]) => void,
  options?: Options<Window>,
): void;

function useEventListener<K extends keyof DocumentEventMap>(
  eventName: K,
  handler: (ev: DocumentEventMap[K]) => void,
  options?: Options<Document>,
): void;

function useEventListener(eventName: string, handler: (ev: noop) => void, options?: Options): void;

function useEventListener(eventName: string, handler: (ev: noop) => void, options: Options = {}) {
  useEffect(() => {
    const target = getDomTarget(options?.target, window);
    if (!target) {
      return;
    }
    EventUtil.addEvent(target, eventName, handler, options);
    return () => {
      EventUtil.removeEvent(target, eventName, handler);
    };
  }, [eventName, handler, options]);
}
export default useEventListener;
