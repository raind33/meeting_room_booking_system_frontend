const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@components': path.resolve(__dirname, 'src/components'),
    '@api': path.resolve(__dirname, 'src/api'),
    // 添加更多 alias 配置
  })
);
