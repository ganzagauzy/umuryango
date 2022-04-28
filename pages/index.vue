<template>
  <div class="main">
    <!-- <div class="absolute">
      <div class="top2">
        <div class="category">
          <v-container class="d-flex flex-wrap justify-content-space-between container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rem dolores veritatis eaque inventore, repellat temporibus cum nisi, nihil rerum, esse hic in ratione dolorem unde harum libero reprehenderit odio?</p>
          <v-btn class="btn" text dark
                        
                        nuxt
                        to="/services"
                      ><p class="btn-text">Get Started</p><span class="square"></span>
                      </v-btn>
            
        </v-container>
        </div>
      </div>
    </div> -->
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
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // {'http-equiv' : "refresh", content : "0", url : "http://localhost:3000/services"},
        
        // { charset: 'utf-8' },
        // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // { hid: 'description', name: 'description', content: '' },
        // { name: 'format-detection', content: 'telephone=no' }
      ],
        link: [],
        script: [],
    },
  mounted() {
    this.header()
    this.$router.push("/services");
  },
  async created () {
        // this.$router.push("/services");
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
.btn {
    z-index: 5;
    position: relative;
    overflow: hidden;
    background: #065A82;
}
.btn-text {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
}
.btn:hover .square {
    right: -25px;
    width: 1000%;
    height: 1000%;
    transition: 0.25s;
}
.square {
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
    border-radius: 8px;
    transition: 0.25s;
    height: 40px;
    width: 40px;
    background: #011936;
    
}
</style>