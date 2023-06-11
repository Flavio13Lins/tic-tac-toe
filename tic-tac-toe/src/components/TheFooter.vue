<template>
  <v-layout>
    <v-footer class="bg-teal-darken-4 text-center d-flex flex-column">
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          class="mx-4"
          :icon="icon.name"
          @click="openTabWith(icon.link)"
          variant="text"
        ></v-btn>
      </div>

      <div class="pt-0">
        This is a project to put in practice some of my abilities and practice while having fun. The
        main idea here is to recognise the best pattern in tic-tac-toe game. Making it impossible to
        win, in the best case you might draw. I did a kind of a map for the player possible moves,
        finding the solution with reflect or rotations functions to the table if necessary. If you
        want to know more, contact me.
      </div>

      <v-divider></v-divider>

      <div>{{ new Date().getFullYear() }} — <strong>Flavio13Lins</strong></div>
    </v-footer>
  </v-layout>
</template>

<script>
export default {
  methods: {
    openTabWith(link) {
      window.open(link, '_blank')
    }
  },
  data() {
    return {
      icons: [
        {
          name: 'mdi-linkedin',
          link: 'https://www.linkedin.com/in/flavio13lins'
        },
        {
          name: 'mdi-github',
          link: 'https://github.com/Flavio13Lins'
        }
      ]
    }
  }
}
</script>
