import Vue from 'vue';
import VueRouter from 'vue-router';
//首页路由
import home from './home.js';

Vue.use(VueRouter);

var routes = [
    ...home,
];

const router = new VueRouter({
    routes
});

//全局路由钩子
router.afterEach((route) => {
});

export default router;