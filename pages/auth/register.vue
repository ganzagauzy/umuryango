<template>
  <v-app app class="header-store accent">
    
    <v-main>
      <v-container class="py-10 container">
        <v-card class="shadow mx-auto" max-width="500">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12">
                  <v-card-text>
                    <h5
                      class="
                        text-center text-h6
                        font-weight-bold
                        text--accent-3
                        card-height
                        font-primary
                      "
                    >
                      Register
                    </h5>
                    <h4></h4>
                    <v-form @submit.prevent="submit" class="px-4">
                      <label>Name</label>
                      <v-text-field
                        cols="12"
                        v-model="name"
                        type="text"
                        outlined
                        dense
                      ></v-text-field>
                      <label>Email</label>
                      <v-text-field
                        cols="12"
                        v-model="email"
                        type="email"
                        outlined
                        dense
                      ></v-text-field>

                      <label>Password</label>
                      <v-text-field
                        v-model="password"
                        type="password"
                        outlined
                        dense
                      ></v-text-field>
                      {{ errors }}
                      <div class="text-center mb-3">
                        <!-- <v-btn
                          type="submit"
                          block
                          elevation="0"
                          color="primary"
                        >
                          Register
                        </v-btn> -->
                        <v-btn 
                          class="btn"
                          text dark
                          type="submit"
                          elevation="0"
                          ><p class="btn-text">Register</p><span class="square"></span></v-btn>
                      </div>
                    </v-form>
                  </v-card-text>
                  <v-card-text>
                    
                    <p
                      class="text-center"
                      style="font-size: 15px; font-weight: 600"
                    >
                     Have an account?
                      <span class="text-link" @click="login"
                        >Login Here</span
                      >
                    </p>
                    <p
                      class="text-center"
                      style="font-size: 15px; font-weight: 600"
                    >
                     Go to 
                      <span class="text-link" @click="home"
                        >home</span
                      >
                    </p>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>

           
            
          </v-window>
        </v-card>

        
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import axios from 'axios'
export default {
  head() {
    return {
      title: "login",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "home page for PayPack Market Place",
        },
      ],
    };
  },
  data() {
      return {
        password: '',
        email: '',
        step: '',
        name: '',
        errors: '',
      }
  },
  methods: {
    login() {
      this.$router.push("/auth/login");
    },
    home() {
      this.$router.push("/");
    },
    async submit() {
       await axios
        .post("https://hafi-yawe.fly.dev/api/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then(() => {
            
            console.log("successfully created a user")
          this.name = "",
          this.email = "",
          this.password = ""
          this.$router.push("/auth/login");
        })
        .catch( error => {
          this.errors = error
          console.log(error);
        });
      console.log("sign up");
    },
  },
  layout: "empty",
};
</script>


<style lang="scss" scoped>
.card-height {
  margin: 10px 0;
}

.font-primary {
  font-family: var(--body-font) !important;
}

.card-color {
  background: #da9412;
}
.button {
  margin: 20px 20px;
}
.btn {
  background: #065A82;
}
.align {
  margin-top: 80px;
  @media screen and (max-width: 600px) {
    margin-top: 10px;
  }
}
.header-store {
    background: #AAAAAA;
  min-height: 100vh;
}
.text-link {
  color: var(--primary-color);
  cursor: pointer;
  text-decoration: underline;
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
.container {
  align-self: center;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

