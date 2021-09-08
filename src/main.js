// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import i18n from './locales'
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/element-public.css'
import axios from 'axios'
import * as echarts from 'echarts';
Vue.use(ElementUI);
Vue.prototype.$http= axios
Vue.prototype.echarts= echarts
Vue.use(Vant);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // i18n,
  components: { App },
  template: '<App/>'
})

