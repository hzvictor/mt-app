import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    position: {}
}

const mutations = {
    setPosition(state, vul){
        state.position = vul

    }
}

const actions = {
    setPosition({ commit }, val){
        commit('setPosition', val)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})