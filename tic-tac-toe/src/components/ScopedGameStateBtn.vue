<template>
  <v-btn
    :loading="loading"
    :variant="variant"
    :stacked="stacked"
    :prepend-icon="hasIcon && iconPos === 'left' ? icon : ''"
    :append-icon="hasIcon && iconPos === 'right' ? icon : ''"
    :icon="onlyIcon ? icon : false"
    v-if="!onlyIcon"
    :size="size"
    @click="$store.dispatch(`gameState/${action}`)"
  >
    <span>{{ text }}</span>
  </v-btn>
  <v-btn
    :loading="loading"
    :icon="icon"
    v-if="onlyIcon"
    :size="size"
    @click="$store.dispatch(`gameState/${action}`)"
  ></v-btn>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    hasIcon: {
      type: Boolean,
      default: true
    },
    iconPos: {
      type: String,
      default: 'left'
    },
    icon: {
      type: String,
      default: 'mdi-play'
    },
    onlyIcon: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'large'
    },
    text: {
      type: String,
      default: 'Start'
    },
    variant: {
      type: String,
      default: 'tonal'
    },
    stacked: {
      type: Boolean,
      default: true
    },
    action: {
      type: String,
      default: 'startNewGame'
    }
  }
}
</script>
