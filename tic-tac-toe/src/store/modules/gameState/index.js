import plays from './generalPlays'
export const state = () => ({
  started: false,
  paused: false,
  loading: false,
  finished: false,
  stage: 0,
  winner: -1,
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
  loading(state) {
    return state.loading
  },
  winner(state) {
    return state.winner
  },
  finished(state) {
    return state.finished
  },
  paused(state) {
    return state.paused
  },
  stage(state) {
    return state.stage
  },
  btnStatus(state) {
    return state.btnStatus
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
  async getBtnStatusInPos({ state }, pos) {
    return state.btnStatus[`position${pos}`]
  },
  async userClickPosition({ state, dispatch, commit }, position) {
    if (state.btnStatus[position] === -1) {
      commit('putValueInPosition', { position, value: 0 })
      const winner = await dispatch('checkWinner')
      if (winner === -1) {
        await dispatch('computerPlay')
      }
    }

    return
  },
  async computerPlay({ dispatch, commit }) {
    const { rotation, play } = await dispatch('identifyState')

    if (play) {
      let rotatedPlay = play
      if (rotation.reflectXaxis) {
        rotatedPlay = await dispatch(rotation.reflectXaxis, rotatedPlay)
      }
      if (rotation.reflectYaxis) {
        rotatedPlay = await dispatch(rotation.reflectYaxis, rotatedPlay)
      }
      if (rotation.reflectXieqY) {
        rotatedPlay = await dispatch(rotation.reflectXieqY, rotatedPlay)
      }
      if (rotation.reflectYneqX) {
        rotatedPlay = await dispatch(rotation.reflectYneqX, rotatedPlay)
      }
      if (rotation.rotated) {
        rotatedPlay = await dispatch(rotation.rotated, rotatedPlay)
      }

      commit('putValueInPosition', { position: rotatedPlay, value: 1 })
    }

    await dispatch('checkWinner')

    return
  },

  async identifyState({ state, dispatch }) {
    let rotation = {
      rotated: null,
      reflectXaxis: null,
      reflectYaxis: null,
      reflectXieqY: null,
      reflectYneqX: null
    }

    for (const possible of plays.filter((p) => p.stage === state.stage)) {
      // donothing
      let possibleCurrent = await dispatch('isCurrentState', possible.status)
      if (possibleCurrent) {
        return { rotation, play: possible.play }
      }
      // rotate 90

      let possibleStatus = await dispatch('rotate90', possible.status)
      possibleCurrent = await dispatch('isCurrentState', possibleStatus)
      if (possibleCurrent) {
        rotation.rotated = 'rotate90Play'
        return { rotation, play: possible.play }
      }

      // rotate 180
      possibleStatus = await dispatch('rotate180', possible.status)
      possibleCurrent = await dispatch('isCurrentState', possibleStatus)
      if (possibleCurrent) {
        rotation.rotated = 'rotate180Play'
        return { rotation, play: possible.play }
      }

      // rotate 270
      possibleStatus = await dispatch('rotate270', possible.status)
      possibleCurrent = await dispatch('isCurrentState', possibleStatus)
      if (possibleCurrent) {
        rotation.rotated = 'rotate270Play'
        return { rotation, play: possible.play }
      }

      // reflectXaxis
      possibleStatus = await dispatch('reflectXaxis', possible.status)
      possibleCurrent = await dispatch('isCurrentState', possibleStatus)
      if (possibleCurrent) {
        rotation.reflectXaxis = 'reflectXaxisPlay'
        return { rotation, play: possible.play }
      }
      // reflectXaxis rotate 90
      possibleStatus = await dispatch('reflectXaxis', possible.status)
      possibleStatus = await dispatch('rotate90', possibleStatus)
      possibleCurrent = await dispatch('isCurrentState', possibleStatus)
      if (possibleCurrent) {
        rotation.rotated = 'rotate90Play'
        rotation.reflectXaxis = 'reflectXaxisPlay'
        return { rotation, play: possible.play }
      }
      // reflectXaxis rotate 180
      possibleStatus = await dispatch('reflectXaxis', possible.status)
      possibleStatus = await dispatch('rotate180', possibleStatus)
      possibleCurrent = await dispatch('isCurrentState', possibleStatus)
      if (possibleCurrent) {
        rotation.rotated = 'rotate180Play'
        rotation.reflectXaxis = 'reflectXaxisPlay'
        return { rotation, play: possible.play }
      }
      // reflectXaxis rotate 270
      possibleStatus = await dispatch('reflectXaxis', possible.status)
      possibleStatus = await dispatch('rotate270', possibleStatus)
      possibleCurrent = await dispatch('isCurrentState', possibleStatus)
      if (possibleCurrent) {
        rotation.rotated = 'rotate270Play'
        rotation.reflectXaxis = 'reflectXaxisPlay'
        return { rotation, play: possible.play }
      }

      // reflectYaxis
      possibleStatus = await dispatch('reflectYaxis', possible.status)
      possibleCurrent = await dispatch('isCurrentState', possibleStatus)
      if (possibleCurrent) {
        rotation.reflectYaxis = 'reflectYaxisPlay'
        return { rotation, play: possible.play }
      }
      // reflectYaxis rotate 90
      possibleStatus = await dispatch('reflectYaxis', possible.status)
      possibleStatus = await dispatch('rotate90', possibleStatus)
      possibleCurrent = await dispatch('isCurrentState', possibleStatus)
      if (possibleCurrent) {
        rotation.rotated = 'rotate90Play'
        rotation.reflectYaxis = 'reflectYaxisPlay'
        return { rotation, play: possible.play }
      }
      // reflectYaxis rotate 180
      possibleStatus = await dispatch('reflectYaxis', possible.status)
      possibleStatus = await dispatch('rotate180', possibleStatus)
      possibleCurrent = await dispatch('isCurrentState', possibleStatus)
      if (possibleCurrent) {
        rotation.rotated = 'rotate180Play'
        rotation.reflectYaxis = 'reflectYaxisPlay'
        return { rotation, play: possible.play }
      }
      // reflectYaxis rotate 270
      possibleStatus = await dispatch('reflectYaxis', possible.status)
      possibleStatus = await dispatch('rotate270', possibleStatus)
      possibleCurrent = await dispatch('isCurrentState', possibleStatus)
      if (possibleCurrent) {
        rotation.rotated = 'rotate270Play'
        rotation.reflectYaxis = 'reflectYaxisPlay'
        return { rotation, play: possible.play }
      }

      // reflectXieqY
      possibleStatus = await dispatch('reflectXieqY', possible.status)
      possibleCurrent = await dispatch('isCurrentState', possibleStatus)
      if (possibleCurrent) {
        rotation.reflectXieqY = 'reflectXieqYPlay'
        return { rotation, play: possible.play }
      }
      // reflectXieqY rotate 90
      possibleStatus = await dispatch('reflectXieqY', possible.status)
      possibleStatus = await dispatch('rotate90', possibleStatus)
      possibleCurrent = await dispatch('isCurrentState', possibleStatus)
      if (possibleCurrent) {
        rotation.rotated = 'rotate90Play'
        rotation.reflectXieqY = 'reflectXieqYPlay'
        return { rotation, play: possible.play }
      }
      // reflectXieqY rotate 180
      possibleStatus = await dispatch('reflectXieqY', possible.status)
      possibleStatus = await dispatch('rotate180', possibleStatus)
      possibleCurrent = await dispatch('isCurrentState', possibleStatus)
      if (possibleCurrent) {
        rotation.rotated = 'rotate180Play'
        rotation.reflectXieqY = 'reflectXieqYPlay'
        return { rotation, play: possible.play }
      }
      // reflectXieqY rotate 270
      possibleStatus = await dispatch('reflectXieqY', possible.status)
      possibleStatus = await dispatch('rotate270', possibleStatus)
      possibleCurrent = await dispatch('isCurrentState', possibleStatus)
      if (possibleCurrent) {
        rotation.rotated = 'rotate270Play'
        rotation.reflectXieqY = 'reflectXieqYPlay'
        return { rotation, play: possible.play }
      }

      // reflectYneqX
      possibleStatus = await dispatch('reflectYneqX', possible.status)
      possibleCurrent = await dispatch('isCurrentState', possibleStatus)
      if (possibleCurrent) {
        rotation.reflectYneqX = 'reflectYneqXPlay'
        return { rotation, play: possible.play }
      }
      // reflectYneqX rotate 90
      possibleStatus = await dispatch('reflectYneqX', possible.status)
      possibleStatus = await dispatch('rotate90', possibleStatus)
      possibleCurrent = await dispatch('isCurrentState', possibleStatus)
      if (possibleCurrent) {
        rotation.rotated = 'rotate90Play'
        rotation.reflectYneqX = 'reflectYneqXPlay'
        return { rotation, play: possible.play }
      }
      // reflectYneqX rotate 180
      possibleStatus = await dispatch('reflectYneqX', possible.status)
      possibleStatus = await dispatch('rotate180', possibleStatus)
      possibleCurrent = await dispatch('isCurrentState', possibleStatus)
      if (possibleCurrent) {
        rotation.rotated = 'rotate180Play'
        rotation.reflectYneqX = 'reflectYneqXPlay'
        return { rotation, play: possible.play }
      }
      // reflectYneqX rotate 270
      possibleStatus = await dispatch('reflectYneqX', possible.status)
      possibleStatus = await dispatch('rotate270', possibleStatus)
      possibleCurrent = await dispatch('isCurrentState', possibleStatus)
      if (possibleCurrent) {
        rotation.rotated = 'rotate270Play'
        rotation.reflectYneqX = 'reflectYneqXPlay'
        return { rotation, play: possible.play }
      }
    }
    return { rotation }
  },
  async checkWinner({ state, commit }) {
    const possibleWins = ['ABC', 'DEF', 'GHI', 'ADG', 'BEH', 'CFI', 'AEI', 'CEG']
    possibleWins.map((possible) => {
      let winnerAI = 0
      let winnerPlayer = 0

      for (const position of possible) {
        if (state.btnStatus[`position${position}`] === 0) {
          winnerPlayer += 1
        }
        if (state.btnStatus[`position${position}`] === 1) {
          winnerAI += 1
        }
      }
      if (winnerPlayer === 3) {
        commit('setWinner', 0)
      }
      if (winnerAI === 3) {
        commit('setWinner', 1)
      }
    })

    return state.winner
  },
  async isCurrentState({ state }, possibleStatus) {
    let match = true
    for (const index in state.btnStatus) {
      if (state.btnStatus[index] !== possibleStatus[index]) {
        match = false
      }
    }
    return match
  },
  async rotate90(_, currentStatus) {
    // A  B  C
    // D  E  F
    // G  H  I
    // =>
    // G  D  A
    // H  E  B
    // I  F  C
    const btnStatus = Object.assign({}, currentStatus)
    btnStatus.positionA = currentStatus.positionG
    btnStatus.positionB = currentStatus.positionD
    btnStatus.positionC = currentStatus.positionA
    btnStatus.positionD = currentStatus.positionH
    btnStatus.positionF = currentStatus.positionB
    btnStatus.positionG = currentStatus.positionI
    btnStatus.positionH = currentStatus.positionF
    btnStatus.positionI = currentStatus.positionC
    return btnStatus
  },
  async rotate90Play(_, play) {
    // A  B  C
    // D  E  F
    // G  H  I
    // =>
    // G  D  A
    // H  E  B
    // I  F  C
    if (play === 'positionG') {
      return 'positionA'
    }
    if (play === 'positionD') {
      return 'positionB'
    }
    if (play === 'positionA') {
      return 'positionC'
    }
    if (play === 'positionH') {
      return 'positionD'
    }
    if (play === 'positionB') {
      return 'positionF'
    }
    if (play === 'positionI') {
      return 'positionG'
    }
    if (play === 'positionF') {
      return 'positionH'
    }
    if (play === 'positionC') {
      return 'positionI'
    }
    return play
  },
  async rotate180(_, currentStatus) {
    // A  B  C
    // D  E  F
    // G  H  I
    // =>
    // I  H  G
    // F  E  D
    // C  B  A
    const btnStatus = Object.assign({}, currentStatus)
    btnStatus.positionA = currentStatus.positionI
    btnStatus.positionB = currentStatus.positionH
    btnStatus.positionC = currentStatus.positionG
    btnStatus.positionD = currentStatus.positionF
    btnStatus.positionF = currentStatus.positionD
    btnStatus.positionG = currentStatus.positionC
    btnStatus.positionH = currentStatus.positionB
    btnStatus.positionI = currentStatus.positionA
    return btnStatus
  },
  async rotate180Play(_, play) {
    // A  B  C
    // D  E  F
    // G  H  I
    // =>
    // I  H  G
    // F  E  D
    // C  B  A
    if (play === 'positionI') {
      return 'positionA'
    }
    if (play === 'positionH') {
      return 'positionB'
    }
    if (play === 'positionG') {
      return 'positionC'
    }
    if (play === 'positionF') {
      return 'positionD'
    }
    if (play === 'positionD') {
      return 'positionF'
    }
    if (play === 'positionC') {
      return 'positionG'
    }
    if (play === 'positionB') {
      return 'positionH'
    }
    if (play === 'positionA') {
      return 'positionI'
    }
    return play
  },
  async rotate270(_, currentStatus) {
    // A  B  C
    // D  E  F
    // G  H  I
    // =>
    // C  F  I
    // B  E  H
    // A  D  G
    const btnStatus = Object.assign({}, currentStatus)
    btnStatus.positionA = currentStatus.positionC
    btnStatus.positionB = currentStatus.positionF
    btnStatus.positionC = currentStatus.positionI
    btnStatus.positionD = currentStatus.positionB
    btnStatus.positionF = currentStatus.positionH
    btnStatus.positionG = currentStatus.positionA
    btnStatus.positionH = currentStatus.positionD
    btnStatus.positionI = currentStatus.positionG
    return btnStatus
  },
  async rotate270Play(_, play) {
    // A  B  C
    // D  E  F
    // G  H  I
    // =>
    // C  F  I
    // B  E  H
    // A  D  G

    if (play === 'positionC') {
      return 'positionA'
    }
    if (play === 'positionF') {
      return 'positionB'
    }
    if (play === 'positionI') {
      return 'positionC'
    }
    if (play === 'positionB') {
      return 'positionD'
    }
    if (play === 'positionH') {
      return 'positionF'
    }
    if (play === 'positionA') {
      return 'positionG'
    }
    if (play === 'positionD') {
      return 'positionH'
    }
    if (play === 'positionG') {
      return 'positionI'
    }
    return play
  },
  async reflectXaxis(_, currentStatus) {
    // A  B  C
    // D  E  F
    // G  H  I
    //   ---
    // G  H  I
    // D  E  F
    // A  B  C
    const btnStatus = Object.assign({}, currentStatus)
    btnStatus.positionA = currentStatus.positionG
    btnStatus.positionB = currentStatus.positionH
    btnStatus.positionC = currentStatus.positionI
    btnStatus.positionG = currentStatus.positionA
    btnStatus.positionH = currentStatus.positionB
    btnStatus.positionI = currentStatus.positionC
    return btnStatus
  },
  async reflectXaxisPlay(_, play) {
    // A  B  C
    // D  E  F
    // G  H  I
    //   ---
    // G  H  I
    // D  E  F
    // A  B  C
    if (play === 'positionG') {
      return 'positionA'
    }
    if (play === 'positionH') {
      return 'positionB'
    }
    if (play === 'positionI') {
      return 'positionC'
    }
    if (play === 'positionA') {
      return 'positionG'
    }
    if (play === 'positionB') {
      return 'positionH'
    }
    if (play === 'positionC') {
      return 'positionI'
    }
    return play
  },
  async reflectYaxis(_, currentStatus) {
    // A  B  C
    // D  E  F
    // G  H  I
    //    |
    // C  B  A
    // F  E  D
    // I  H  G
    const btnStatus = Object.assign({}, currentStatus)
    btnStatus.positionA = currentStatus.positionC
    btnStatus.positionC = currentStatus.positionA
    btnStatus.positionD = currentStatus.positionF
    btnStatus.positionF = currentStatus.positionD
    btnStatus.positionG = currentStatus.positionI
    btnStatus.positionI = currentStatus.positionG
    return btnStatus
  },
  async reflectYaxisPlay(_, play) {
    // A  B  C
    // D  E  F
    // G  H  I
    //    |
    // C  B  A
    // F  E  D
    // I  H  G

    if (play === 'positionC') {
      return 'positionA'
    }
    if (play === 'positionA') {
      return 'positionC'
    }
    if (play === 'positionF') {
      return 'positionD'
    }
    if (play === 'positionD') {
      return 'positionF'
    }
    if (play === 'positionI') {
      return 'positionG'
    }
    if (play === 'positionG') {
      return 'positionI'
    }
    return play
  },
  async reflectXieqY(_, currentStatus) {
    // A  B  C
    // D  E  F
    // G  H  I
    //    /
    // I  F  C
    // H  E  B
    // G  D  A
    const btnStatus = Object.assign({}, currentStatus)
    btnStatus.positionA = currentStatus.positionI
    btnStatus.positionB = currentStatus.positionF
    btnStatus.positionD = currentStatus.positionH
    btnStatus.positionF = currentStatus.positionB
    btnStatus.positionH = currentStatus.positionD
    btnStatus.positionI = currentStatus.positionA
    return btnStatus
  },
  async reflectXieqYPlay(_, play) {
    // A  B  C
    // D  E  F
    // G  H  I
    //    /
    // I  F  C
    // H  E  B
    // G  D  A

    if (play === 'positionI') {
      return 'positionA'
    }
    if (play === 'positionF') {
      return 'positionB'
    }
    if (play === 'positionH') {
      return 'positionD'
    }
    if (play === 'positionB') {
      return 'positionF'
    }
    if (play === 'positionD') {
      return 'positionH'
    }
    if (play === 'positionA') {
      return 'positionI'
    }
    return play
  },
  async reflectYneqX(_, currentStatus) {
    // A  B  C
    // D  E  F
    // G  H  I
    //    \
    // A  D  G
    // B  E  H
    // C  F  I
    const btnStatus = Object.assign({}, currentStatus)
    btnStatus.positionB = currentStatus.positionD
    btnStatus.positionC = currentStatus.positionG
    btnStatus.positionD = currentStatus.positionB
    btnStatus.positionF = currentStatus.positionH
    btnStatus.positionG = currentStatus.positionC
    btnStatus.positionH = currentStatus.positionF
    return btnStatus
  },
  async reflectYneqXPlay(_, play) {
    // A  B  C
    // D  E  F
    // G  H  I
    //    \
    // A  D  G
    // B  E  H
    // C  F  I

    if (play === 'positionD') {
      return 'positionB'
    }
    if (play === 'positionG') {
      return 'positionC'
    }
    if (play === 'positionB') {
      return 'positionD'
    }
    if (play === 'positionH') {
      return 'positionF'
    }
    if (play === 'positionC') {
      return 'positionG'
    }
    if (play === 'positionF') {
      return 'positionH'
    }
    return play
  }
}

export const mutations = {
  setStarted(state, data) {
    state.started = data
  },
  setPaused(state, data) {
    state.paused = data
  },
  setStage(state, data) {
    state.stage = data
  },
  setWinner(state, data) {
    state.winner = data
    if (data === 0 || data === 1) {
      state.finished = true
      state.paused = true
    }
  },
  setFinished(state, data) {
    state.finished = data
  },
  startNewGame(state) {
    state.paused = false
    state.stage = 0
    state.winner = -1
    state.started = true
    state.finished = false
  },
  resetTable(state) {
    state.stage = 0
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
    if (state.btnStatus[position] === -1) {
      state.btnStatus[position] = value
      state.stage += 1
      if (state.stage === 9) {
        state.finished = true
        state.paused = true
      }
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
