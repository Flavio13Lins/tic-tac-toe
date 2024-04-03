<template>
  <v-layout>
    <v-footer class="bg-teal-darken-4 text-center d-flex flex-column">
      <div>
        <v-btn
          :key="icon.name"
          v-for="icon in icons"
          class="mx-4"
          :href="icon.link"
          :icon="icon.name"
          @click="openTabWith(icon.link)"
          variant="text"
        ></v-btn>
      </div>

      <div class="pt-0">
        This is a project to put into practice some of my abilities and training while having fun.
        The main idea here is to recognize the best pattern in a tic-tac-toe game. Making it
        impossible to win, in the best case, you might draw. I mapped the player's possible moves,
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
        },
        {
          name: 'mdi-instagram',
          link: 'https://www.instagram.com/Flavio13Lins'
        }
      ]
    }
  }
}
</script>
