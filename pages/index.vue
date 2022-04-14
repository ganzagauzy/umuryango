<template>
  <div class="main">
    <div class="absolute">
      <div class="top2">
        <div class="category">
          <v-container>
          <!-- <h4>Categories</h4> -->
            <ul v-for="category in categories.categories"
                    :key="category.id" class="cat-serv">
                     <li>
                          
                    <b>{{category.name}}</b>
                    <b>{{category.id}}</b>
                    <br>
                    <!-- {{category.services}} -->
                    <div v-for="service in category.services"
                    :key="service.id">
                    <br>
                    Service
                    {{service.id}}
                    {{service.name}}
                    </div>
                     </li>
                     <br>
                    </ul>
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
</style>