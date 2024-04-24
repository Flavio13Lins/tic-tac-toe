export const state = () => ({
  hasPreDef: false,
  isDark: true,
  theme: ''
})

export const getters = {
  hasPreDef(state) {
    return state.hasPreDef
  },
  isDark(state) {
    return state.isDark
  },
  preferredColor(state) {
    return state.preferredColor
  },
  theme(state) {
    return state.theme
  },
  x(state) {
    return state.x
  },
  y(state) {
    return state.y
  }
}

export const actions = {
  // Create actions to change isDark, hasPref, preferredColor, theme
  list({ state }) {
    return state.list
  },

  listOne({ state }, nome) {
    let exercicio = {}
    state.list.forEach((element) => {
      if (element.nome === nome) {
        exercicio = element
      }
    })
    return exercicio
  },

  create({ dispatch, commit }, exercise) {
    commit('addToList', exercise)
    dispatch('list')
    return true
  },

  delete({ dispatch, commit }, exercise) {
    commit('deleteFromList', exercise)
    dispatch('list')
  }
}

export const mutations = {
  setHasPreDef(state, data) {
    state.hasPreDef = data
  },
  setIsDark(state, data) {
    state.isDark = data
  },
  setPreferredColor(state, data) {
    state.preferredColor = data
  },
  setx(state, data) {
    state.x = data
  },
  sety(state, data) {
    state.y = data
  },
  setTheme(state, data) {
    state.theme = data
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
