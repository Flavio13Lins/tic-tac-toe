<template>
  <v-row no-gutters>
    <v-col align="center" class="my-16" cols="12">
      <v-icon color="error" icon="mdi-alert-circle" size="150"></v-icon>
    </v-col>
  </v-row>
  <v-row no-gutters>
    <v-col align="center" cols="12">
      <span class="text-center text-wrap text-h3">Oops, error!</span>
    </v-col>
  </v-row>
  <v-row no-gutters>
    <v-col cols="12" class="my-16 text-center text-wrap text-h3">
      <v-btn @click="$router.back()">
        <span>Back to Home</span>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>
<style scoped></style>
