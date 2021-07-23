// 配置应用列表
const apps = [{
    name: 'qiankun_vue', // 应用的名字
    // entry: '/qiankun_sub', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    entry: '//localhost:8081/qiankun_vue', // 本地联调使用得配置
    container: '#qkApp', // 容器名（此项目页面中定义的容器id，用于把对应的子应用放到此容器中）
    activeRule: '/qiankun_base/main/vue', // 激活的路径
    props: { a: 1 } // 传递的值（可选）
}];

export default apps;