import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
  msg: 'Hello Vuex Store.'
  }

const mutations= {
  [types.UPDATE_MESSAGE] (state, newMsg) {
    state.msg = newMsg
  }
}
const actions = {
  repeat (context) {
    let msg = context.state.msg
    context.commit(types.UPDATE_MESSAGE, `${msg}${msg}`)
    }
  }

export default new Vuex.Store ({
  state,
  mutations,
  actions
})
