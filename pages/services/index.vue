<template>
<v-app class="main">

        
        <v-container class="show-btn">
          <div class="irembo-btn">
          <v-btn class="btn-irembo" @click="">Irembo</v-btn>
          </div>
          <div class="imisoro-btn">
          <v-btn class="btn-imisoro" @click="getTax">Imisoro</v-btn>
          </div>
          
          
        
        </v-container>
        
        <div class="category" >
          <h2 class="text-center">Irembo</h2>
          <br>
          <v-container class="d-flex flex-wrap justify-content-space-between container">
          <!-- <h4>Categories</h4> -->
            <div v-for="category in categories.categories"
                    :key="category.id" class="cat-serv">
                     <div>
                          
                    <b>{{category.name}}</b>
                    <b>{{category.id}}</b>
                    <br>
                    <!-- {{category.services}} -->
                    <div v-for="service in category.services"
                    :key="service.id" class="services">

                    
                    <br>
                    <NuxtLink
                    :to="{
                      name: 'services-id',
                      params: { id: service.id },
                    }"
                    class="nuxt-link"
                  >
                    Service
                    {{service.id}}
                    {{service.name}}
                    </NuxtLink>
                    </div>
                     </div>
                     <br>
                    </div>
        </v-container>
        
        </div>


</v-app>
</template>

<script>
import axios from 'axios'
import Dialog from '../../components/dialog.vue'
import Footer from '../../components/footer.vue'
export default {
  
  data() {
      
    Footer
    
     return {
            categories: [],
            taxes: [],
            showirembo: true,
            showimisoro: false,
            dialog: false,
        }
    },
  mounted() {
    this.header();
    // this.Tax();
  },
  async created () {
        const config = {
            headers: {
                'Accept': 'application/json'

            }
        }
        try {
        const res = await axios.get('https://hafi-yawe.fly.dev/api/categories', config);
        
        this.categories = res.data
        console.log(this.categories);

        }
        catch(error) {
            console.log(error);
        }


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
      async getTax () {
        const config = {
            headers: {
                'Accept': 'application/json'

            }
        }
        try {
        const res = await axios.get('https://hafi-yawe.fly.dev/api/taxes', config);
        
        this.taxes = res.data
        console.log(this.taxes);
        console.log("taxes");

        }
        catch(error) {
            console.log(error);
        }
      },
      irembo() {
        this.showirembo = true
        this.showimisoro = false
      },
      imisoro() {
        this.showimisoro = true
        this.showirembo = false
      },
  },

}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
li {
  list-style: none;
}

// .category {
//   padding:20px 0 ;

// }
.main {
  bottom: 0;
}
.cat-serv {
  margin-left: 50px;

}
.services:hover {
  cursor: pointer;
}
.nuxt-link {
    text-decoration: none;
    color: #1d4e89;
}
.nuxt-link:hover {
    text-decoration: underline;
}


.show-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.irembo-btn {
  margin-left: 50px;
}
.imisoro-btn {
  margin-right: 50px;
}
// .irembo-imisoro {
//   margin-left: 80px;
//   margin-right: 80px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;

  
  
// }
.btn-btn {
     @media screen and (max-width:375px) {
      margin-top: 10px;
  }
  }
  

  
  

</style>