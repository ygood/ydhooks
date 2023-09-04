import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'yd-hooks',
    sidebar: {
      '/guide': [
        {
          title: '向导',
          children: [{ title: '向导', link: 'guide' }],
        },
      ],
      '/hooks': [
        {
          title: '向导',
          children: [{ title: '向导', link: 'guide' }],
        },
      ],
    },
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
