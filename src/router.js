import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    // 注意这里的巨坑，是routes，而不是routers
    // 写成routers可以编译通过，并且加入里面内容错误的话也会发出警告
    // 但是组件确实没有加载！！！瞎了我的眼！
    routes: [
        {
            path: '/',
            // name必须是一个字符串，component必须是前面import的内容
            name: 'hello',

            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // 懒加载
            component: function () {
                return import('./Hello')
            }
        }
    ]
})
