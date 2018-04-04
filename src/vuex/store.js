import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

let store = new Vuex.Store({
    state: {    //状态
        userMsg: ''
    },
    mutations: {    //同步改变状态
    	//设置用户信息
    	setUserMsg(state, value){
    		state.userMsg = value;
    	}
    },
    actions: {//异步改变状态

    }
});

export default store;
