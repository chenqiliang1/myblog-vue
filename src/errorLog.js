import Vue from 'vue'
import store from './store'

// you can set only in production env show the error-log
// if (process.env.NODE_ENV === 'production') {

Vue.config.errorHandler = function(err, vm, info) {
    // console.log("全局异常补货")
  // Don't ask me why I use Vue.nextTick, it just a hack.
  // detail see https://forum.vuejs.org/t/dispatch-in-vue-config-errorhandler-has-some-problem/23500
//   console.log(err, info)
  Vue.nextTick(() => {
    store.dispatch('addErrorLog', {
      err,
      vm,
      info,
      url: window.location.href
    })
  })
}

// }
