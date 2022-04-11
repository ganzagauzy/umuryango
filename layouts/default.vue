<template>
  <v-app>
      
      <v-main>
          <navlayout />
            <Nuxt />

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

</style>