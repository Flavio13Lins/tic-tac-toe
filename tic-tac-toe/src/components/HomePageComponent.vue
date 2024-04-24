<script>
import { mapState } from 'vuex'
import ScopedGameStateBtn from './ScopedGameStateBtn.vue'
import TableToPlay from './TableToPlay.vue'
// import TheFooter from './TheFooter.vue'

export default {
  computed: mapState({
    started: (state) => state.gameState.started,
    paused: (state) => state.gameState.paused,
    isLoading: (state) => state.gameState.isLoading,
    finished: (state) => state.gameState.finished,
    winner: (state) => state.gameState.winner,
    hasPreDef: (state) => state.theme.hasPreDef,
    isDark: (state) => state.theme.isDark,
    theme: (state) => state.theme.theme,
  }), 
  data() {
    const matchMediaDark = window.matchMedia("(prefers-color-scheme: dark)")
    return {
      gameResult: false,
      matchMediaDark,
      myPrefThemeIsDark: matchMediaDark.matches
    }
  },
  mounted() {
    this.matchMediaDark.addEventListener('change', () => {
      // call action to change theme moduls
      this.myPrefThemeIsDark = this.matchMediaDark.matches;
  })},
  watch: {
    finished(nv) {
      if (nv) {
        this.gameResult = true
      }
    }
  },
  methods: {
    async restartGame() {
      this.gameResult = false
      await this.$store.dispatch(`gameState/resetGame`)
      await this.$store.dispatch(`gameState/startNewGame`)
      await this.scrollToGame()
    },
    async scrollToGame() {
      var i = 0
      var intervalId = await setInterval(() => {
        var currentPositionOfPage = window.scrollY
        if (i <= 5) {
          window.scrollTo(0, currentPositionOfPage + 10)
          i++
        } else if (i <= 10) {
          window.scrollTo(0, currentPositionOfPage + 5)
          i++
        } else if (i <= 15) {
          window.scrollTo(0, currentPositionOfPage + 2)
          i++
        } else if (i <= 20) {
          window.scrollTo(0, currentPositionOfPage + 1)
          i++
        } else {
          clearInterval(intervalId)
        }
      }, 100)
    }
  },
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
      <!-- <div> 1{{ myPrefThemeIsDark }} </div>
      <div> 2{{ hasPreDef }} </div>
      <div> 3{{ paused }} </div>
      <h2> 4{{ isDark }}</h2> -->
      <ScopedGameStateBtn
        key="Start"
        v-if="!started"
        action="startNewGame"
        @scrollToGame="scrollToGame"
      ></ScopedGameStateBtn>
      <ScopedGameStateBtn
        @scrollToGame="_"
        key="Reset"
        v-if="started"
        action="resetGame"
        icon="mdi-restart"
        size="regular"
        text="Reset"
        variant="outlined"
      ></ScopedGameStateBtn>
      <v-dialog v-model="gameResult" width="auto">
        <v-card min-width="280" min-height="140" style="background-color: var(--quaternary-color);">
          <v-row justify="space-between" no-gutters>
            <v-spacer></v-spacer>
            <v-card-title class="ma-4">
              <h3 v-if="finished && winner === -1">Draw</h3>
              <h3 v-if="finished && winner === 1">Sorry, you lose!</h3>
              <h3 v-if="finished && winner === 0">What? YOU WON!</h3>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-btn
              elevation="0"
              size="x-small"
              class="ma-2"
              color="var(--quaternary-color)"
              icon="mdi-close"
              @click="gameResult = false"
            ></v-btn>
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="var(--primary-color)" variant="tonal" @click="restartGame">Restart</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
  <TableToPlay v-if="!isLoading && started"></TableToPlay>
</template>
