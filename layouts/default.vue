<template>
  <v-app class="">
      
      <v-main>
          <navlayout />
          <v-container>
            <Nuxt />
            </v-container>

        </v-main>
  </v-app>
</template>

<script>
import navlayout from '../components/navlayout.vue'
export default {
  components: { navlayout },

}
</script>

<style lang="scss" scoped>
.bg {
  background: #E3F2FD;
}
</style>