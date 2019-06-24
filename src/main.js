import Vue from 'vue';
// 这里不使用相对路径直接App会报错
import App from "./App"
import router from './router'


Vue.config.productionTip = false;

new Vue ({
    router,
    render: function (h) {
        return h(App)
    }
}).$mount("#app");
