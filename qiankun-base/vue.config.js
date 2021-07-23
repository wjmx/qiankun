'use strict'
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const port = 8080 // 端口配置

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
    // hash 模式下可使用
    // publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
    publicPath: '/qiankun_base/',
    outputDir: 'qiankun_base',
    assetsDir: 'static',
    lintOnSave: false,
    productionSourceMap: false, // 开发测试阶段  true   上线阶段 false
}