<script>
import { mapState } from 'vuex'
import ScopedGameStateBtn from './ScopedGameStateBtn.vue'
import TableToPlay from './TableToPlay.vue'
// import TheFooter from './TheFooter.vue'

export default {
  computed: mapState({
    started: (state) => state.gameState.started,
    paused: (state) => state.gameState.paused,
    loading: (state) => state.gameState.loading,
    finished: (state) => state.gameState.finished,
    winner: (state) => state.gameState.winner
  }),
  components: {
    ScopedGameStateBtn,
    TableToPlay
  }
}
</script>

<template>
  <v-row no-gutters justify="center">
    <v-col align="center">
      <h1>TIC TAC TOE</h1>
      <ScopedGameStateBtn
        v-if="!started"
        action="startNewGame"
        :loading="loading"
      ></ScopedGameStateBtn>
      <ScopedGameStateBtn
        v-if="started"
        :loading="loading"
        action="resetGame"
        icon="mdi-restart"
        size="regular"
        text="Reset"
        variant="outlined"
      ></ScopedGameStateBtn>
      <h3 v-if="finished && winner === -1">Draw</h3>
      <h3 v-if="finished && winner === 1">Sorry, you lose!</h3>
      <h3 v-if="finished && winner === 0">What? YOU WON!</h3>
    </v-col>
  </v-row>
  <TableToPlay v-if="!loading && started"></TableToPlay>
</template>
