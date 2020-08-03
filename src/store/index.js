// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

import Vue from 'vue'
import Vuex from 'vuex'
// import app from '@/module-dashboard/store/app'
// import errorLog from './errorLog'
// import permission from '@/module-dashboard/store/permission'
// import tagsView from '@/module-dashboard/store/tagsView'
// import user from '@/module-dashboard/store/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
//   errorLog
})

// const store = new Vuex.Store({
//   modules: {
//     app,
//     errorLog,
//     permission,
//     tagsView,
//     user
//   },
//   getters
// })

export default store
