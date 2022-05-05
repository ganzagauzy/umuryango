<template>
  <div class="main">
      <!-- hi {{this.$route.params.id}} -->
      
      <div class="d-flex flex-wrap justify-content-space-between display-flex">
        
          <v-card 
          width="400" class="border-radius">
        <v-card-title>
          <span class="text-h5"> {{service.name}} </span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <p>Price: {{service.price}} </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, at.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, at.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, at.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, at.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, at.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, at.</p>
          </v-container>
        </v-card-text>
       
      </v-card>
        

        <v-card 
          width="700" class="border-radius apply-top">
        <v-card-title>
          <span class="text-h5">Apply</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Name*"
                  required
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              
              
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              
              <v-col
              >
                <v-select
                  :items="['Irembo', 'Imisor']"
                  label="Type*"
                  required
                  outlined
                  dense
                ></v-select>
              </v-col>
              <v-col
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                  outlined
                  dense
                ></v-select>
              </v-col>
              
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          
          <v-btn
            text
            dark
            class="btn"
            @click="dialog = false"
          >
            <p class="btn-text">Saba</p><span class="square"></span>
          </v-btn>
        </v-card-actions>
      </v-card>


      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {

   data() {
     return {
            service: '',
            
        }
    },
     computed: {
    id() {
      return this.$route.params.storeid;
    },
  },
  async created () {
    const id = this.$route.params.id;
    console.log(id);
          const config = {
              headers: {
                  'Accept': 'application/json'

              }
          }
          try {
          const res = await axios.get(`https://hafi-yawe.fly.dev/api/services/${id}`, config);
          
          this.service = res.data
          console.log(this.service);

          }
          catch(error) {
              console.log(error);
          }


      },
}
</script>

<style lang="scss" scoped>
.main {
    margin-top: 50px;
    margin-bottom: 50px;
}
.display-flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.btn {
  margin-right: 50px;
  background: #011936;
  // background: #065A82;
}
.btn {
    z-index: 5;
    position: relative;
    overflow: hidden;
}
.btn-text {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
}
// .btn:hover .square {
//     right: -25px;
//     width: 1000%;
//     height: 1000%;
//     transition: 0.25s;
// }
// .square {
//     position: absolute;
//     top: 50%;
//     right: -20px;
//     transform: translateY(-50%);
//     border-radius: 8px;
//     transition: 0.25s;
//     height: 40px;
//     width: 40px;
//     background: #065A82;
//     // background: #011936;
   
// }
.border-radius {
  border-radius: 20px;
}
.apply-top {
  @media screen and (max-width:1248px) {
    margin-top: 30px;
    margin-bottom: 50px;
  }
}
</style>