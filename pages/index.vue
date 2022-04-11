<template>
  <div class="main">
    <div class="absolute">
      <div class="top2">
        <div class="category">
          <v-container>
          <h4>Umuryango</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore doloremque, placeat ipsa temporibus repudiandae sit odit. Repellendus, porro dolore nihil minima et ab delectus nesciunt! Ducimus, autem. Ratione, omnis?</p>
        </v-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  mounted() {
    this.header()
  },
  methods: {
      header() {
        if(window.scrollY > 0) {
          const top = document.querySelector('.top');
              top.classList.toggle('sticky');
        }
          // window.addEventListener("scroll", function() {
          //     const top = document.querySelector('.top');
          //     top.classList.toggle('sticky');
          // });
      },
  },

}
</script>

<style lang="scss" scoped>

.main {
  position: relative;
}
.absolute { 
  position: absolute;
  top: 80%;
}
.top2 {
  padding-top: 100px;
}
.category {
  padding:50px 0 ;

}
</style>