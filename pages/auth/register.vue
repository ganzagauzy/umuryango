<template>
  <v-app app class="header-store accent">
    
    <v-main>
      <v-container class="py-10">
        <v-card class="shadow mx-auto" max-width="400">
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
                    <v-form @submit.prevent="login" class="px-4">
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
                        <v-btn
                          type="submit"
                          block
                          elevation="0"
                          color="primary"
                        >
                          Register
                        </v-btn>
                      </div>
                    </v-form>
                  </v-card-text>
                  <v-card-text>
                    
                    <p
                      class="text-center"
                      style="font-size: 15px; font-weight: 600"
                    >
                     Have an account?
                      <span class="text-link" @click="step++"
                        >Login Here</span
                      >
                    </p>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>

            <v-window-item :value="2">
              <v-card-text>
                <h5
                  class="
                    text-center
                    font-weight-bold
                    text-h5
                    font-primary
                    card-height
                  "
                >
                  Sign Up
                </h5>
                <v-form ref="form">
                  <div>
                    <label for="">Names</label>
                    <v-text-field
                      dense
                      outlined
                      v-model="name"
                      type="text"
                      :rules="inputRules"
                    ></v-text-field>
                  </div>
                  <div>
                    <label for="">Telephone</label>
                    <v-text-field
                      dense
                      outlined
                      type="tel"
                      v-model="telephone"
                      :rules="inputRules"
                    ></v-text-field>
                  </div>
                  
                  <div class="text-center mt-3">
                    <v-btn block color="primary" @click="step++">Next</v-btn>
                  </div>
                </v-form>
              </v-card-text>
              <v-card-text>
                <p
                  class="text-center"
                  style="font-size: 15px; font-weight: 600"
                >
                  Already have an account?
                  <span class="text-link" @click="step--">Sign In</span>
                </p>
              </v-card-text>
            </v-window-item>
            <v-window-item :value="3">
              <v-card-text>
                <h3
                  class="
                    text-center
                    font-primary font-weight-bold
                    text-h5
                    card-height
                  "
                >
                  Finish last steps
                </h3>
                <h4></h4>
                <v-form ref="form">
                  
                  <div>
                    <label for="">Email</label>
                    <v-text-field
                      dense
                      outlined
                      v-model="email"
                      type="email"
                      :rules="inputRules"
                    ></v-text-field>
                  </div>
                  <div>
                    <label for="">Password</label>
                    <v-text-field
                      dense
                      outlined
                      v-model="password"
                      type="password"
                      required
                      :rules="inputRules"
                    ></v-text-field>
                    {{ errors }}
                  </div>
                  <div class="text-center mt-3">
                    <v-btn block color="primary" @click="submit">
                      Sign Up
                    </v-btn>
                  </div>
                </v-form>
              </v-card-text>
              <v-card-text>
                <!-- <p
                  class="text-center"
                  style="font-size: 15px; font-weight: 600"
                >
                  *After registering go to your email and verify your email
                  
                </p> -->
                <p
                  class="text-center"
                  style="font-size: 15px; font-weight: 600"
                >
                  Already have an account?
                  <span class="text-link" @click="step -= 2">Sign In</span>
                </p>
              </v-card-text>
            </v-window-item>
            <v-window-item :value="4">
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
                      Reset Password
                    </h5>
                    <h4></h4>
                    <v-form @submit.prevent="reset" class="px-4">
                      <label>Email</label>
                      <v-text-field
                        cols="12"
                        v-model="email"
                        type="email"
                        outlined
                        dense
                      ></v-text-field>
                      <p>{{ errors }}</p>
                      <div class="text-center mb-3">
                        <v-btn
                          type="submit"
                          block
                          elevation="0"
                          color="primary"
                        >
                          Reset
                        </v-btn>
                      </div>
                    </v-form>
                  </v-card-text>
                  <v-card-text>
                    <p
                  class="text-center"
                  style="font-size: 15px; font-weight: 600"
                >
                  Remember Password?
                  <span class="text-link" @click="step -= 3">Sign In</span>
                </p>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>

        <v-snackbar v-model="snackbar" shaped color="primary" right top>
          <v-icon>{{ icon }}</v-icon> {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn
              color=""
              text
              v-bind="attrs"
              @click="snackbar = false"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
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
  background: #da9412;
}
.align {
  margin-top: 80px;
  @media screen and (max-width: 600px) {
    margin-top: 10px;
  }
}
.header-store {
    background: #E3F2FD;
  min-height: 100vh;
}
.text-link {
  color: var(--primary-color);
  cursor: pointer;
  text-decoration: underline;
}
</style>

