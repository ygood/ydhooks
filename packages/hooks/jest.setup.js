// mock screen full events
// https://github.com/sindresorhus/screenfull/blob/main/index.js
const screenfullMethods = [
  'requestFullscreen',
  'exitFullscreen',
  'fullscreenElement',
  'fullscreenEnabled',
  'fullscreenchange',
  'fullscreenerror',
  'prompt'
];
screenfullMethods.forEach((item) => {
  if (item === 'prompt') {
    // 跳过prompt方法，防止测试报错
    window['prompt'] = () => {};
    return
  }
  document[item] = () => {};
  HTMLElement.prototype[item] = () => {};
});
