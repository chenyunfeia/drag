import Vue from "vue"
import Vuex, {
  Store
} from "vuex"

Vue.use(Vuex)

const state = {
  asideLeft: false,
  asideRight: false,
}

const mutations = {
  asideLeftIF(state, bol) {
    state.asideLeft = bol
    state.asideRight = bol
  },
  asideRightIF(state, bol) {
    state.asideRight = bol
  }
}

const store = new Store({
  state,
  mutations
})

export default store
