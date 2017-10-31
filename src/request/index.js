import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

var el = new Vue({});

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
    // Do something with response data
    let returnCode = _.get(response, 'data.returnCode');
    if (returnCode == '1') {
        return _.get(response, 'data', {});
    } else {
        el.$confirm(response.data.returnContent, '提示', {
            confirmButtonText: '确定',
            showCancelButton: false,
            type: 'warning'
          }).then(() => {}).catch(() => {});
          return _.get(response, 'data', {});
          throw '请联系管理员！';
        }
    }, function (error) {
    // Do something with response error
    throw '请联系管理员！';
});