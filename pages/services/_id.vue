<template>
  <div class="main">
      <!-- hi {{this.$route.params.id}} -->
      
      <div class="d-flex flex-wrap justify-content-space-between display-flex">
        
          <v-card 
          width="400">
        <v-card-title>
          <span class="text-h5">Umuryango</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, at.</p>
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
          width="700">
        <v-card-title>
          <span class="text-h5">User Request</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal first name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
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
export default {

}
</script>

<style lang="scss" scoped>
.main {
    margin-top: 150px;
}
.display-flex {
  display: flex;
  justify-content: space-between;
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
    background: #065A82;
    // background: #011936;
   
}
</style>