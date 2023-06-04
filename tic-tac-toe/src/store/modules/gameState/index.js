export const state = () => ({
  started: false
})

export const getters = {
  started(state) {
    return state.started
  }
}

export const actions = {
  // async list({ state }) {
  //   return state.list
  // },
  // async listOne({ state }, nome) {
  //   let exercicio = {}
  //   state.list.forEach((element) => {
  //     if (element.nome === nome) {
  //       exercicio = element
  //     }
  //   })
  //   return exercicio
  // },
  // async create({ dispatch, commit }, exercise) {
  //   commit('addToList', exercise)
  //   dispatch('list')
  //   return true
  // },
  // async delete({ dispatch, commit }, exercise) {
  //   commit('deleteFromList', exercise)
  //   dispatch('list')
  // }
}

export const mutations = {
  setStarted(state, data) {
    state.started = data
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
