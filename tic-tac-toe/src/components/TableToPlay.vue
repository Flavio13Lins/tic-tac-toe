<script setup>
import redX from '@/assets/svgs/xred.svg'
import greenO from '@/assets/svgs/ogreen.svg'
import { useDisplay } from 'vuetify'
const { mdAndUp } = useDisplay()
const cor = 'var(--color-border)'
let barsLength = '5px'

let styleBtn = `min-width: 90px; min-height: 170px;`
let styleXO = `max-width: 65px; max-height: 65px;`
let styleDEGH = `border-top: ${barsLength} solid ${cor}; border-right: ${barsLength} solid ${cor};`
let styleFI = `border-top: ${barsLength} solid ${cor};`
let styleAB = `border-right: ${barsLength} solid ${cor};`

let barsLengthMD = '12px'
let styleXOMD = `max-width: 250px; max-height: 250px;`
let styleBtnMD = `min-width: 274px; min-height: 274px;`
let styleDEGHMD = `border-top: ${barsLengthMD} solid ${cor}; border-right: ${barsLengthMD} solid ${cor};`
let styleFIMD = `border-top: ${barsLengthMD} solid ${cor};`
let styleABMD = `border-right: ${barsLengthMD} solid ${cor};`
let hoverBlock = ' background-color: hsla(160, 100%, 37%, 1); border-radius: 30px;'
const posABC = [
  'positionA', // 0 for O // 1 for X
  'positionB',
  'positionC'
]
// const posDEF = ['positionD', 'positionE', 'positionF']

// const posGHI = ['positionG', 'positionH', 'positionI']
</script>
<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    btnStatus: (state) => state.gameState.btnStatus
  })
}
</script>
<template>
  <v-row no-gutters align="center" justify="center">
    <v-col :style="mdAndUp ? styleABMD : styleAB">
      <v-hover v-slot:default="{ isHovering, props }">
        <v-col
          class="d-flex flex-column align-center justify-center"
          v-bind="props"
          @click="$store.dispatch('gameState/userClickPosition', posABC[0])"
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
            v-if="btnStatus[posABC[0]] === 0"
            :style="mdAndUp ? styleXOMD : styleXO"
            :src="`${greenO}`"
          />
          <img
            v-else-if="btnStatus[posABC[0]] === 1"
            :style="mdAndUp ? styleXOMD : styleXO"
            :src="`${redX}`"
          />
        </v-col>
      </v-hover>
    </v-col>
    <v-col align="center" :style="mdAndUp ? styleABMD : styleAB">
      <v-hover v-slot:default="{ isHovering, props }">
        <v-col
          v-bind="props"
          class="d-flex flex-column align-center justify-center"
          @click="$store.dispatch('gameState/userClickPosition', posABC[1])"
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
            v-if="btnStatus[posABC[1]] === 0"
            :style="mdAndUp ? styleXOMD : styleXO"
            :src="`${greenO}`"
          />
          <img
            v-else-if="btnStatus[posABC[1]] === 1"
            :style="mdAndUp ? styleXOMD : styleXO"
            :src="`${redX}`"
          />
        </v-col>
      </v-hover>
    </v-col>

    <v-hover v-slot:default="{ isHovering, props }">
      <v-col
        v-bind="props"
        class="d-flex flex-column align-center justify-center"
        @click="$store.dispatch('gameState/userClickPosition', posABC[2])"
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
        <div>
          <img
            v-if="btnStatus[posABC[2]] === 0"
            :style="mdAndUp ? styleXOMD : styleXO"
            :src="`${greenO}`"
          />
          <img
            v-else-if="btnStatus[posABC[2]] === 1"
            :style="mdAndUp ? styleXOMD : styleXO"
            :src="`${redX}`"
          />
        </div>
      </v-col>
    </v-hover>
  </v-row>
  <v-row no-gutters>
    <v-col align="center" :style="mdAndUp ? styleDEGHMD : styleDEGH">
      <v-hover v-slot:default="{ isHovering, props }">
        <v-col
          v-bind="props"
          align="center"
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
          <div>
            <span>{{ isHovering }}...</span>
          </div>
        </v-col>
      </v-hover>
    </v-col>
    <v-col align="center" :style="mdAndUp ? styleDEGHMD : styleDEGH">
      <v-hover v-slot:default="{ isHovering, props }">
        <v-col
          v-bind="props"
          align="center"
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
          <div>
            <span>{{ isHovering }}...</span>
          </div>
        </v-col>
      </v-hover>
    </v-col>
    <v-col align="center" :style="mdAndUp ? styleFIMD : styleFI">
      <v-hover v-slot:default="{ isHovering, props }">
        <v-col
          v-bind="props"
          align="center"
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
          <div>
            <span>{{ isHovering }}...</span>
          </div>
        </v-col>
      </v-hover>
    </v-col>
  </v-row>
  <v-row no-gutters>
    <v-col align="center" :style="mdAndUp ? styleDEGHMD : styleDEGH">
      <v-hover v-slot:default="{ isHovering, props }">
        <v-col
          v-bind="props"
          align="center"
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
          <div>
            <span>{{ isHovering }}...</span>
          </div>
        </v-col>
      </v-hover>
    </v-col>
    <v-col align="center" :style="mdAndUp ? styleDEGHMD : styleDEGH">
      <v-hover v-slot:default="{ isHovering, props }">
        <v-col
          v-bind="props"
          align="center"
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
          <div>
            <span>{{ isHovering }}...</span>
          </div>
        </v-col>
      </v-hover>
    </v-col>
    <v-col align="center" :style="mdAndUp ? styleFIMD : styleFI">
      <v-hover v-slot:default="{ isHovering, props }">
        <v-col
          v-bind="props"
          align="center"
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
          <div>
            <span>{{ isHovering }}...</span>
          </div>
        </v-col>
      </v-hover>
    </v-col>
  </v-row>
</template>
