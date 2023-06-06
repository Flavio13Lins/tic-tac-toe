export const state = () => ({
  started: false,
  paused: false,
  loading: false,
  btnStatus: {
    positionA: -1, // 0 for O // 1 for X
    positionB: -1,
    positionC: -1,

    positionD: -1,
    positionE: -1,
    positionF: -1,

    positionG: -1,
    positionH: -1,
    positionI: -1
  }
})

export const getters = {
  started(state) {
    return state.started
  },
  paused(state) {
    return state.paused
  }
}

export const actions = {
  async startNewGame({ commit }) {
    commit('resetTable')
    commit('startNewGame')
    return
  },
  async pauseGame({ commit }) {
    commit('setPaused', true)
    return
  },
  async resumeGame({ commit }) {
    commit('setStarted', true)
    commit('setPaused', false)
    return
  },
  async resetGame({ commit }) {
    commit('setStarted', false)
    commit('setPaused', false)
    commit('resetTable')
    return
  },
  async userClickPosition({ state, commit }, position) {
    if (state.btnStatus[position] === -1) {
      commit('putValueInPosition', { position, value: 0 })
      // valid play
    } else {
      // invalid
    }
    return
  }

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
  },
  setPaused(state, data) {
    state.paused = data
  },
  startNewGame(state) {
    state.paused = false
    state.started = true
  },
  resetTable(state) {
    state.btnStatus = {
      positionA: -1, // 0 for O // 1 for X
      positionB: -1,
      positionC: -1,

      positionD: -1,
      positionE: -1,
      positionF: -1,

      positionG: -1,
      positionH: -1,
      positionI: -1
    }
  },
  putValueInPosition(state, data) {
    const position = data.position
    const value = data.value
    state.btnStatus[position] = value
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
