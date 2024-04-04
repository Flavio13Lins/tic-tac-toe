<template>
  <v-hover v-slot:default="{ isHovering, props }">
    <v-col
      class="d-flex flex-column align-center justify-center"
      v-bind="props"
      @click.exact="userClick"
      :style="
        mdAndUp
          ? isHovering
            ? `${styleBtnMD}${hoverBlock}`
            : styleBtnMD
          : isHovering
          ? `${styleBtn}${hoverBlock}`
          : styleBtn
      "
    >
      <img
        v-if="btnStatus[position] === 0"
        :style="mdAndUp ? styleXOMD : styleXO"
        :src="`${greenO}`"
      />
      <img
        v-else-if="btnStatus[position] === 1"
        :style="mdAndUp ? styleXOMD : styleXO"
        :src="`${redX}`"
      />
    </v-col>
  </v-hover>
</template>

<script>
import { mapState } from 'vuex'
import imageX from '@/assets/svgs/x.svg'
import imageO from '@/assets/svgs/o.svg'

export default {
  data() {
    return {
      imageX,
      imageO
    }
  },
  methods: {
    userClick() {
      if (this.finished || this.paused) {
        return
      } else {
        this.$store.dispatch('gameState/userClickPosition', this.position)
      }
    }
  },
  computed: mapState({
    btnStatus: (state) => state.gameState.btnStatus,
    finished: (state) => state.gameState.finished,
    paused: (state) => state.gameState.paused,
    positionValue: () => this.btnStatus[this.position]
  }),
  props: {
    mdAndUp: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'positionA'
    },
    styleBtnMD: {
      type: String,
      default: 'positionA'
    },
    styleBtn: {
      type: String,
      default: 'positionA'
    },
    hoverBlock: {
      type: String,
      default: 'positionA'
    },
    styleXOMD: {
      type: String,
      default: 'positionA'
    },
    styleXO: {
      type: String,
      default: 'positionA'
    }
  }
}
</script>
