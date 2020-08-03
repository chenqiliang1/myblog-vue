import Vue from 'vue'
import App from './App.vue'
import router from './router' //vue-router
import store from './store'   //vuex
import ElementUI from 'element-ui' 
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const errorHandler = (error,vm) => {
    console.log("抛出全局异常")
    console.log(vm)
    console.log(error)
}

Vue.config.errorHandler = errorHandlerVue.prototype.$throw = function (error) {
    return errorHandler(error, this);
    };