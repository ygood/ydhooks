type DomType = Element | Window | Document;
export interface Option {
  once?: boolean;
  capture?: boolean;
  passive?: boolean;
}

export const EventUtil = {
  addEvent: (dom: DomType, type: string, func: any, options: Option = {}) => {
    if (typeof dom.addEventListener === 'function') {
      dom.addEventListener(type, func, {
        capture: options.capture,
        once: options.once,
        passive: options.passive,
      });
    } else if ('addAttr' in dom && typeof dom.addAttr === 'function') {
      dom.addAttr(type, func);
    } else {
      dom[`on${type}`] = func;
    }
  },
  removeEvent: (dom: DomType, type, func) => {
    if (typeof dom.removeEventListener === 'function') {
      dom.removeEventListener(type, func);
    } else if ('removeAttr' in dom && typeof dom.removeAttr === 'function') {
      dom.removeAttr(type, func);
    } else {
      dom[`on${type}`] = null;
    }
  },
};
