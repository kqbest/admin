import Vue from 'vue';
import VueRouter from 'vue-router';
//路由
import pages from './pages.js';

Vue.use(VueRouter);

var routes = [
    ...pages,
];

const router = new VueRouter({
	mode: 'history',
    routes
});

//全局路由钩子
router.afterEach((route) => {
});

export default router;