<template>
  <div>
      <canvas id="chart" width="300" height="300"></canvas>
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
            src: '/js/rate1.js'
        }
        ],
    },
}
</script>

<style lang="scss" scoped>

</style>