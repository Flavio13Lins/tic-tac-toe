<script>
import { mapState } from 'vuex'
import ScopedGameStateBtn from './ScopedGameStateBtn.vue'
import TableToPlay from './TableToPlay.vue'

export default {
  computed: mapState({
    started: (state) => state.gameState.started,
    paused: (state) => state.gameState.paused,
    loading: (state) => state.gameState.loading
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
    </v-col>
  </v-row>
  <TableToPlay v-if="!loading && started"></TableToPlay>
</template>
