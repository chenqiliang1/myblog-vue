import Vue from 'vue'
import App from './App.vue'
import router from './router' //vue-router
import store from './store' //vuex
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'


Vue.prototype.$echarts = echarts
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$errors = []
const errors = []
Vue.config.warnHandler = function(msg, vm, trace) {
	// `trace` 是组件的继承关系追踪
	let error = {
		msg,
		trace,
    }
    errors.push(error)
    let errors_str = JSON.stringify(errors)
    localStorage.setItem("error",errors_str)
}
new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
