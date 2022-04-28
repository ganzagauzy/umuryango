<template>
  <div>
      <canvas id="Mychart" width="100" height="55"></canvas>
  </div>
</template>

<script>
export default {
    head: {
        link: [
        
        // {
        //     rel: "stylesheet",
        //     href: "https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css",
        // },
        ],
        script: [
        {
            src: 'https://cdn.jsdelivr.net/npm/chart.js@3.7.1/dist/chart.min.js'
        },
        {
            src: '/js/rate2.js'
        }
        ],
    },
}
</script>

<style lang="scss" scoped>

</style>