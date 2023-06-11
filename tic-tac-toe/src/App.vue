<script setup>
import { RouterView } from 'vue-router'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="body">
    <RouterView />
    <TheFooter class="footer" />
  </div>
</template>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.footer {
  flex-grow: 0;
  max-height: 20%;
}
</style>
