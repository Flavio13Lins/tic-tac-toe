<template>
  <v-hover v-slot:default="{ isHovering, props }">
    <v-col
      class="d-flex flex-column align-center justify-center"
      v-bind="props"
      @click="$store.dispatch('gameState/userClickPosition', position)"
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
import redX from '@/assets/svgs/xred.svg'
import greenO from '@/assets/svgs/ogreen.svg'

export default {
  data() {
    return {
      redX,
      greenO
    }
  },
  computed: mapState({
    btnStatus: (state) => state.gameState.btnStatus,
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
