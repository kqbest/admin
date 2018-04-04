import Vue from 'vue';
import App from './App';
import router from './router/router.js';
import VueJsonp from 'vue-jsonp';
import location from './location/location.js';
import store from './vuex/store.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import './assets/css/reset.css';
import './assets/css/globel.css';
import './request';
import 'lodash';

Vue.use(ElementUI);
Vue.use(VueJsonp);

Object.defineProperty(Vue.prototype, '$location', { value: location });

var tiems;
window.onresize = function() {
  if (tiems) {
    clearTimeout(tiems);
  }
  tiems = setTimeout(function() {
    var win = window.innerWidth >= 1024 ? window.innerWidth : 1024;
    document.getElementsByTagName('html')[0].style.fontSize = win / 10.24 + 'px';
  }, 350);
};
var win = window.innerWidth >= 1024 ? window.innerWidth : 1024;
document.getElementsByTagName('html')[0].style.fontSize = win / 10.24 + 'px';

Vue.config.productionTip = false

//启动应用
const app = new Vue({ //eslint-disable-line no-unused-vars
  router,
  store,
  render: h => h(App)
}).$mount('#app');
