export const state = () => ({
  // Defines the value in the switch theme btn ('auto', 'dark', 'light')
  switchThemeValue: 'auto',
  // Defines if user already set a theme in the game
  hasPreDef: false,
  // Defines if user set the dark theme in the game
  isDark: true,
  // Defines the prefers-color-scheme of the users system
  preferredTheme: '',
  // Defines the theme current used in the game
  theme: '',
})

export const getters = {
  switchThemeValue(state) {
    return state.switchThemeValue
  },
  hasPreDef(state) {
    return state.hasPreDef
  },
  isDark(state) {
    return state.isDark
  },
  preferredTheme(state) {
    return state.preferredTheme
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
  // Create actions to change switchThemeValue, isDark, hasPref, preferredTheme, theme
  /*
  Change switchThemeValue to 'auto':
  hasPreDef = false
  theme = preferredTheme
  
  Change switchThemeValue to 'dark':
  isDark = true
  hasPreDef = true
  theme = 'dark'
  
  Change switchThemeValue to 'light':
  isDark = false
  hasPreDef = true
  theme = 'light'

  if hasPreDef === true
    preferredTheme is not relevant

  if hasPreDef === false
    preferredTheme is used and watched to define theme
    theme = preferredTheme
  */ 

  changeHasPreDefValue({state, commit}, value) {
    commit('setHasPreDef', value)
    if(value === false){
      commit('setTheme', state.preferredTheme)
    } else if(value === true) {
      commit('setTheme', state.switchThemeValue)
    }
  },

  switchThemeClick({state, commit, dispatch}) {
    const current = state.switchThemeValue
    switch(current){
      case 'auto':
        // Current == auto change theme to dark
        commit('setSwitchThemeValue', 'dark')
        commit('setIsDark', true)
        dispatch('changeHasPreDefValue', true)
        break
      case 'light':
        // Current == light change theme to auto
        commit('setSwitchThemeValue', 'auto')
        dispatch('changeHasPreDefValue', false)
        break
      case 'dark':
        // Current == dark change theme to light
        commit('setSwitchThemeValue', 'light')
        commit('setIsDark', false)
        dispatch('changeHasPreDefValue', true)
        break
    }
    return state.switchThemeValue
  },
  
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
  setSwitchThemeValue(state, data) {
    state.switchThemeValue = data
  },
  setHasPreDef(state, data) {
    state.hasPreDef = data
  },
  setIsDark(state, data) {
    state.isDark = data
  },
  setPreferredTheme(state, data) {
    state.preferredTheme = data
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
