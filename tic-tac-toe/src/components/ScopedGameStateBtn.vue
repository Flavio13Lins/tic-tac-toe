<template>
  <v-btn
    :loading="isLoading"
    :variant="variant"
    :stacked="stacked"
    :prepend-icon="hasIcon && iconPos === 'left' ? icon : ''"
    :append-icon="hasIcon && iconPos === 'right' ? icon : ''"
    :icon="onlyIcon ? icon : false"
    v-if="!onlyIcon"
    :size="size"
    @click="click"
  >
    <span>{{ text }}</span>
  </v-btn>
  <v-btn :loading="isLoading" :icon="icon" v-if="onlyIcon" :size="size" @click="click"></v-btn>
</template>

<script>
import { mapState } from 'vuex'

export default {
  inheritAttrs: false,
  computed: mapState({
    isLoading: (state) => state.gameState.isLoading
  }),
  props: {
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
  },
  emits: {
    scrollToGame: null
  },
  methods: {
    click() {
      this.$store.dispatch(`gameState/${this.action}`)
      if (this.action === 'startNewGame') {
        this.$emit('scrollToGame')
      }
    }
  }
}
</script>
