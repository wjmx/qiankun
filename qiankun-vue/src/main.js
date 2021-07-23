import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './micro/public-path'
import actions from './micro/actions';
Vue.use(ElementUI);
Vue.config.productionTip = false
let instance = null
    // 重新包装render方法
function render(props = {}) {
    if (props) {
        actions.setActions(props);
        actions.onGlobalStateChange(state => {
            const { token } = state;
            console.log('子应用token获取' + token);
            // 未登录 - 返回主页
            if (!token) {
                // this.$message.error('未检测到登录信息！');
                return location.href = location.origin + '/qiankun'
                    // return
            }
            // store.commit('SET_TOKEN', token);
        }, true);
    }
    const { container } = props;
    const renderContainer = container ? '#qkApp' : '#app'; // 如果是作为子应用渲染，则渲染到主应用中配置的DOM节点中
    instance = new Vue({
        router,
        render: h => h(App)
    }).$mount(renderContainer);
    // if (window.__POWERED_BY_QIANKUN__ && process.env.NODE_ENV === "development") {
    //     // vue-devtools  加入此处代码即可
    //     // After you create app
    //     window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = instance.constructor;
    //     let instanceDiv = document.createElement("div");
    //     instanceDiv.__vue__ = instance;
    //     document.body.appendChild(instanceDiv);
    //     console.log(instanceDiv.__vue__)
    // }
}

// 独立运行时直接渲染
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
    console.log('[vue] props from main framework', props);
    render(props); // 作为子应用渲染时将主应用传入的配置作为参数去渲染
}

export async function unmount() {
    instance.$destroy();
    instance.$el.innerHTML = '';
    instance = null;
}