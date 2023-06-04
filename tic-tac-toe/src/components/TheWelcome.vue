<script setup>
import { useDisplay } from 'vuetify'
const { mdAndUp } = useDisplay()
const cor = 'var(--color-border)'
let barsLength = '5px'
let styleBtn = `min-width: 90px; min-height: 90px;`
let styleDEGH = `border-top: ${barsLength} solid ${cor}; border-right: ${barsLength} solid ${cor};`
let styleFI = `border-top: ${barsLength} solid ${cor};`
let styleAB = `border-right: ${barsLength} solid ${cor};`

let barsLengthMD = '12px'
let styleBtnMD = `min-width: 200px; min-height: 200px;`
let styleDEGHMD = `border-top: ${barsLengthMD} solid ${cor}; border-right: ${barsLengthMD} solid ${cor};`
let styleFIMD = `border-top: ${barsLengthMD} solid ${cor};`
let styleABMD = `border-right: ${barsLengthMD} solid ${cor};`
let hoverBlock = ' background-color: hsla(160, 100%, 37%, 1); border-radius: 30px;'
</script>

<template>
  <v-row no-gutters justify="center">
    <v-col align="center">
      <h1>TIC TAC TOE</h1>
    </v-col>
  </v-row>
  <v-row hight="200px" no-gutters>
    <v-col align="center" :style="mdAndUp ? styleABMD : styleAB">
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
    <v-col align="center" :style="mdAndUp ? styleABMD : styleAB">
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
    <v-col align="center">
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
