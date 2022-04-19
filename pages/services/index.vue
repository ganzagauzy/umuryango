<template>
  <div class="main">
    <div class="absolute">
      <div class="top2">
        <div class="show-btn d-flex flex-wrap justify-content-space-between">
          <v-btn @click="irembo">Irembo</v-btn>
        <v-btn @click="imisoro">Imisoro</v-btn>
        </div>
        <div class="category" v-if="showirembo == true">
          <h4>Irembo</h4>
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
        <div class="category" v-if="showimisoro == true">
           <h4>Imisoro</h4>
          <br>
          <v-container class="d-flex flex-wrap justify-content-space-between container">
         
            <div v-for="tax in taxes"
                    :key="tax.id" class="cat-serv">
                     <div>
                          
                    <b>{{tax.name}}</b>
                    <b>{{tax.id}}</b>
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
            taxes: [],
            showirembo: true,
            showimisoro: false
        }
    },
  mounted() {
    this.header();
    this.Tax();
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
      async Tax () {
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
    color: #1d4e89;
}
.nuxt-link:hover {
    text-decoration: underline;
}


.show-btn {
  padding-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

</style>