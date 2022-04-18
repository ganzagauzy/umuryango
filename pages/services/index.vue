<template>
  <div class="main">
    <div class="absolute">
      <div class="top2">
        <div class="category">
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
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  
  data() {
        return {
            categories: [],
        }
    },
  mounted() {
    this.header()
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
.main {
  background: #E3F2FD;
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
.cat-serv {
  margin-left: 50px;

}
.services:hover {
  cursor: pointer;
}
.nuxt-link {
    text-decoration: none;
}

</style>