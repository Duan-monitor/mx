// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';

import App from './App';
import router from './router';
import http from './http';
import store from './store';
import  { ToastPlugin, LoadingPlugin } from 'vux'

// import Vant from 'vant';
// import 'vant/lib/index.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


// import start from './index'  //开始执行
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// var sUri = "http://139.199.99.136:8080/duan/zh_qianbao_data.json"

// Vue.use(ToastPlugin)
// Vue.use(LoadingPlugin)

// Vue.use(ElementUI);

// FastClick.attach(document.body);

// Vue.config.productionTip = false;
/* eslint-disable no-new */
// new Vue({
//   router,
//   store,
//   render: h => h(App),
// }).$mount('#app-box');
document.addEventListener('deviceready', function deviceReadyHandler() {
    Vue.use(ToastPlugin)
    Vue.use(LoadingPlugin)
    // Vue.use(Mint);
    FastClick.attach(document.body);

    Vue.config.productionTip = false;
    /* eslint-disable no-new */
    new Vue({
        router,
        store,
        render: h => h(App),
    }).$mount('#app-box');
    
}, false)
