module.exports = {
    lintOnSave: false, // 关闭eslint检测
    publicPath: '/qiankun_vue/',
    outputDir: 'qiankun_vue',
    assetsDir: 'static',
    productionSourceMap: true, // 开发测试阶段  true   上线阶段 false
    devServer: {
        port: 8081, //这里的端口是必须和父应用配置的子应用端口一致
        disableHostCheck: false, // 关闭主机检查，保证子应用可以被主应用fetch到
        headers: {
            //因为qiankun内部请求都是fetch来请求资源，所以子应用必须允许跨域
            'Access-Control-Allow-Origin': '*'
        },
        // publicPath: process.env.NODE_ENV === 'production' ? '/qiankun/' : '//localhost:8083', // 开发环境设置为当前固定访问地址
    },
    configureWebpack: {
        output: {
            //资源打包路径
            library: 'qiankun_vue',
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_qiankun_vue` //  此处后缀也要和名称保持一致
        }
    }
}