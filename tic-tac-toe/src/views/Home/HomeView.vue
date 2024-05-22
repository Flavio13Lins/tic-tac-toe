<script setup>
import HomePage from '@/components/HomePageComponent.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
let  theme = computed(() => useStore)
// let  theme = mapState({theme: (state) => state.theme.theme})
</script>

<template>
  <div>{{ theme }}</div>
  <HomePage />
</template>
