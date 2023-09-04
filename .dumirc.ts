import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'yd-hooks',
    nav: [{ title: 'Blog', link: '/blog' }],
    footer: 'Copyright © 2023 | Powered by yanlei',
    socialLinks: {
      github: 'https://github.com/ygood/ydhooks',
    },
  },
  resolve: {
    docDirs: ['docs', 'packages/hooks'],
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
  publicPath: '/ydhooks/',
  base: '/ydhooks/',
});
