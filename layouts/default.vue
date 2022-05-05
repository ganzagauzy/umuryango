<template>
  <v-app class="">
      
      <v-main>
          <navlayout />
          <v-container>
            <Nuxt />
            </v-container>
            <div class="footer">
              <v-container class="row">
             <div class="col">
               <h4>Hafi Yawe</h4>
               <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quo in mollitia, sed nulla assumenda quibusdam neque voluptatibus earum error. </p>
               {{ new Date().getFullYear() }} — <strong>Hafi Yawe</strong>
             </div>
             <div class="col">
                <h4>
                  Useful LInks
                </h4>
                <div class="nuxtlink">
                  <p>
                    <nuxt-link to="" class="link">
                  Home
                </nuxt-link>
                  </p>
                <p>
                  <nuxt-link to="" class="link">
                  About Us
                </nuxt-link>
                </p>
                </div>
             </div>
             <div class="col">
               <h4>
                 Contact Us
               </h4>
                <p>07888888888</p>
                <p>test@me.com</p>
             </div>
             <div class="col">
               <h4>Follow us</h4>
               <div >
                 <a href="">
                 <v-icon link class="icon" dark>mdi-facebook</v-icon>
                 </a>
                 <a href="">
                 <v-icon class="icon" dark>mdi-whatsapp</v-icon>
                 </a>
                 <a href="">
                 <v-icon class="icon" dark>mdi-instagram</v-icon>
                 </a>
                 <a href="">
                 <v-icon class="icon" dark>mdi-twitter</v-icon>
                 </a>
               </div>
             </div>
             </v-container>
            </div>

        </v-main>
        
  </v-app>
</template>

<script>
import Footer from '../components/footer.vue'
import navlayout from '../components/navlayout.vue'
export default {
  components: { navlayout, Footer },

}
</script>

<style lang="scss" scoped>
.bg {
  background: #E3F2FD;
}
.footer {
  background: #065A82;
  color: #fff;
}
.row {
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
h4 {
  margin-bottom: 10px;
}
.col {
  flex-basis: 20%;
  @media screen and (max-width:500px) {
    flex-basis: 100%;
  }
}
.col:nth-child(1) {
  flex-basis: 40%;
}
.nuxtlink {
  display: flex;
  flex-direction: column;
}
.link {
  text-decoration: none;
  color: #fff;
}
.link:hover {
  text-decoration: underline;
}
.icon {
  margin-right: 10px;
}
.icon:hover {
  transform: translateY(-5px);
}
a {
  text-decoration: none;
}
</style>