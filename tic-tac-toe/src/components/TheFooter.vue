<template>
  <v-layout>
    <v-footer style="color: white; background-color: var(--primary-color);" class="text-center d-flex flex-column">
      <div>
        <v-btn
          :key="icon.name"
          v-for="icon in icons"
          class="mx-4"
          :href="icon.link"
          :icon="icon.name"
          target="_blank"
          variant="text"
        ></v-btn>
        <v-btn
         class="mx-4"
         variant="text"
         icon
         href="https://discordid.netlify.app/?id=654752684884361265"
         target="_blank"
        >
          <img
            :src="`${discordIcon}`"
          />
        </v-btn>
      </div>

      <div class="pt-0">
        This is a project to put into practice some of my abilities and training while having fun.
        The main idea here is to recognize the best pattern in a tic-tac-toe game. Making it
        impossible to win, in the best case, you might draw. I mapped the player's possible moves,
        finding the solution with reflect or rotations functions to the table if necessary. If you
        want to know more, contact me.
      </div>
      <v-divider></v-divider>
      <div>
        Email me at 
        <a href="mailto:flavio13lins@gmail.com">flavio13lins@gmail.com</a>
        <v-tooltip location="top" :text="copyText">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              style="cursor: pointer;"
              icon="mdi-content-copy"
              variant="text"
              size="x-small"
              @click="copyCode"
              @mouseout="reset"
            ></v-btn>
          </template>
        </v-tooltip>
      </div>
      <div>{{ new Date().getFullYear() }} — <strong>Flavio13Lins</strong></div>
    </v-footer>
  </v-layout>
</template>

<script>
import discordIcon from '@/assets/svgs/discord.svg'

export default {
  created() {
    this.copyText = this.text
  },
  methods: {
    async copyCode() {
      await navigator.clipboard.writeText("flavio13lins@gmail.com");
      this.copyText = "Copied"
    },
    reset() {
      this.copyText = this.text
    }
  },
  data() {
    return {
      text: "Copy email",
      copyText: '',
      icons: [
        {
          name: 'mdi-badge-account-outline',
          link: 'https://flavio13lins.github.io/FlavioResume/'
        },
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
      ],
      discordIcon
      // {
      //   name: 'discord',
      //   link: 'https://www.linkedin.com/in/flavio13lins'
      // },
    }
  }
}
</script>
