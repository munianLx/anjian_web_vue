/**
 * 详细需求配置请看官方文档https://cli.vuejs.org/zh/config/#全局-cli-配置
 */
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',

  css: {
    loaderOptions: { // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  }
}
