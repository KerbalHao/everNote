/*
 * @Date: 2021-03-17 21:24:55
 * @LastEditors: KerbalHao
 * @FilePath: \ever-note\vue.config.js
 */
module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: '127.0.0.1:8081',
        changeOrigin: true
      }
    }
  }
}