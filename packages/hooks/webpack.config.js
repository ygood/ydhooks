const { merge } = require('webpack-merge');
const common = require('../../webpack.common.config.js');
const path = require('path');

module.exports = merge(common, {
  entry: './es/index.js',
  output: {
    library: {
      name: 'yd_hooks',
    },
    filename: 'yd-hooks.js',
    path: path.resolve(__dirname, './dist'),
  },
});
