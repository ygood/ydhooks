import { defineConfig } from 'dumi';
import { menus } from './hook_menus';

export default defineConfig({
  themeConfig: {
    name: 'yd-hooks',
    nav: [
      { title: '指南', link: '/guide' },
      { title: 'Hooks', link: '/hooks/use-copy', activePath: '/hooks' },
    ],
    sidebar: {
      '/guide': [
        {
          title: '向导',
          children: [{ title: '', link: 'guide' }],
        },
      ],
      '/hooks': menus,
    },
    footer: 'Copyright © 2023 | Powered by yanlei',
    socialLinks: {
      github: 'https://github.com/ygood/ydhooks',
    },
  },
  resolve: {
    docDirs: ['docs'], // 2.0 默认值
    atomDirs: [{ type: 'hooks', dir: 'packages/hooks/src' }], // 2.0 默认值
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
  alias: {
    ['yd-hooks']: process.cwd() + '/packages/hooks/src/index.ts',
  },
  publicPath: '/ydhooks/',
  base: '/ydhooks/',
});
