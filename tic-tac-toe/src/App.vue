<script setup>
import { RouterView } from 'vue-router'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <!-- Btn with switch in header to change theme [auto, dark, light] -->
  <div class="body">
    <RouterView />
    <TheFooter class="footer" />
  </div>
</template>

<style scoped>
/* TODO: simulate a class with variable background color based on a vuex value */
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
