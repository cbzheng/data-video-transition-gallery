import Vuex from 'vuex'
import Vue from 'vue'
import filter from './modules/filter'
import designSpace from './modules/designSpace'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      filter,
      designSpace
    },
    strict: debug,
  })