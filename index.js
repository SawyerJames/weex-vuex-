// import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

// Vuex is auto installed on the web
if (WXEnvironment.platform !== 'Web') {
    Vue.use(Vuex)
}

// store manage
const store = new Vuex.Store({
    actions,
    mutations,
    state: {}
})

export default store
