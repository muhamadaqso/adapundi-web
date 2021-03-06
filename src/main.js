// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
window.VueRouter = require("vue-router").default;
Vue.use(VueRouter)
import './assets/css/font.css'
import './assets/css/Style.css'
import { BootstrapVue, IconsPlugin, BIcon } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
window.NProgress = require("nprogress/nprogress");
import 'nprogress/nprogress.css'


Vue.config.productionTip = false
const router = require("./router").default;

window.$ = require('jquery');
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('BIcon', BIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
