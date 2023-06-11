<script setup>
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
let hoverBlock = ' background-color: #3CB371; border-radius: 30px;'
</script>
<script>
import { mapState } from 'vuex'
import Clickable from '@/components/ClickableBox.vue'

export default {
  computed: mapState({
    btnStatus: (state) => state.gameState.btnStatus
  }),
  components: {
    Clickable
  }
}
</script>
<template>
  <v-row no-gutters align="center" justify="center">
    <v-col :style="mdAndUp ? styleABMD : styleAB">
      <Clickable
        :mdAndUp="mdAndUp"
        position="positionA"
        :styleBtnMD="styleBtnMD"
        :styleBtn="styleBtn"
        :hoverBlock="hoverBlock"
        :styleXOMD="styleXOMD"
        :styleXO="styleXO"
      ></Clickable>
    </v-col>
    <v-col :style="mdAndUp ? styleABMD : styleAB">
      <Clickable
        :mdAndUp="mdAndUp"
        position="positionB"
        :styleBtnMD="styleBtnMD"
        :styleBtn="styleBtn"
        :hoverBlock="hoverBlock"
        :styleXOMD="styleXOMD"
        :styleXO="styleXO"
      ></Clickable>
    </v-col>

    <v-col align="center">
      <Clickable
        :mdAndUp="mdAndUp"
        position="positionC"
        :styleBtnMD="styleBtnMD"
        :styleBtn="styleBtn"
        :hoverBlock="hoverBlock"
        :styleXOMD="styleXOMD"
        :styleXO="styleXO"
      ></Clickable>
    </v-col>
  </v-row>
  <v-row no-gutters>
    <v-col align="center" :style="mdAndUp ? styleDEGHMD : styleDEGH">
      <Clickable
        :mdAndUp="mdAndUp"
        position="positionD"
        :styleBtnMD="styleBtnMD"
        :styleBtn="styleBtn"
        :hoverBlock="hoverBlock"
        :styleXOMD="styleXOMD"
        :styleXO="styleXO"
      ></Clickable>
    </v-col>
    <v-col align="center" :style="mdAndUp ? styleDEGHMD : styleDEGH">
      <Clickable
        :mdAndUp="mdAndUp"
        position="positionE"
        :styleBtnMD="styleBtnMD"
        :styleBtn="styleBtn"
        :hoverBlock="hoverBlock"
        :styleXOMD="styleXOMD"
        :styleXO="styleXO"
      ></Clickable>
    </v-col>
    <v-col align="center" :style="mdAndUp ? styleFIMD : styleFI">
      <Clickable
        :mdAndUp="mdAndUp"
        position="positionF"
        :styleBtnMD="styleBtnMD"
        :styleBtn="styleBtn"
        :hoverBlock="hoverBlock"
        :styleXOMD="styleXOMD"
        :styleXO="styleXO"
      ></Clickable>
    </v-col>
  </v-row>
  <v-row no-gutters>
    <v-col align="center" :style="mdAndUp ? styleDEGHMD : styleDEGH">
      <Clickable
        :mdAndUp="mdAndUp"
        position="positionG"
        :styleBtnMD="styleBtnMD"
        :styleBtn="styleBtn"
        :hoverBlock="hoverBlock"
        :styleXOMD="styleXOMD"
        :styleXO="styleXO"
      ></Clickable>
    </v-col>
    <v-col align="center" :style="mdAndUp ? styleDEGHMD : styleDEGH">
      <Clickable
        :mdAndUp="mdAndUp"
        position="positionH"
        :styleBtnMD="styleBtnMD"
        :styleBtn="styleBtn"
        :hoverBlock="hoverBlock"
        :styleXOMD="styleXOMD"
        :styleXO="styleXO"
      ></Clickable>
    </v-col>
    <v-col align="center" :style="mdAndUp ? styleFIMD : styleFI">
      <Clickable
        :mdAndUp="mdAndUp"
        position="positionI"
        :styleBtnMD="styleBtnMD"
        :styleBtn="styleBtn"
        :hoverBlock="hoverBlock"
        :styleXOMD="styleXOMD"
        :styleXO="styleXO"
      ></Clickable>
    </v-col>
  </v-row>
</template>
