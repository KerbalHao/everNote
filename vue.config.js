/*
 * @Date: 2021-03-17 21:24:55
 * @LastEditors: KerbalHao
 * @FilePath: \ever-note\vue.config.js
 */

const debug = process.env.NODE_ENV !== "production";
module.exports = {
  publicPath: './',
  configureWebpack: (config) => {
    if (debug) {
      // 开发环境配置
      config.devtool = "source-map";
    }
  },
  // chainWebpack: (config) => {
  //   // 分析
  //   config
  //     .plugin("webpack-bundle-analyzer")
  //     .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
  // },
  devServer: {
    // proxy: {
    //   "/": {
    //     target: "http://127.0.0.1:8081",
    //     changeOrigin: true
    //   }
    // }
    https: true
  }
};
