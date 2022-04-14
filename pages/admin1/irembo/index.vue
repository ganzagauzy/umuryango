<template>
  <div>
    <div>
      <h2>Irembo</h2>
      <div class="insight">
        <div class="box1">
          <span class="icon-sharp"><v-icon dark>mdi-grid</v-icon></span>
          <div class="middle">
            <div class="left">
              <!-- <h3>Tot1</h3> -->
              <h1>50</h1>
            </div>
            <div class="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div class="number">
                <p>50%</p>
              </div>
            </div>
          </div>
          <small class="text-muted"> Irembo </small>
        </div>
        <!-- end-->
        <div class="box2">
          <span class="icon-sharp"><v-icon dark>mdi-grid</v-icon></span>
          <div class="middle">
            <div class="left">
              <!-- <h3>Tot1</h3> -->
              <h1>50</h1>
            </div>
            <div class="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div class="number">
                <p>50%</p>
              </div>
            </div>
          </div>
          <small class="text-muted"> Irembo </small>
        </div>
        <!-- end-->
        <div class="box3">
          <span class="icon-sharp"><v-icon dark>mdi-grid</v-icon></span>
          <div class="middle">
            <div class="left">
              <!-- <h3>Tot1</h3> -->
              <h1>50</h1>
            </div>
            <div class="progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div class="number">
                <p>50%</p>
              </div>
            </div>
          </div>
          <small class="text-muted"> Irembo </small>
        </div>
        <!-- end-->
      </div>
      <div class="categories py-5">
        <h2>Categories and Services</h2>
        <div
          v-for="category in categories.categories"
          :key="category.id"
          class="cat-serv"
        >
          <v-card class="card" rounded>
            Category
            <b>{{ category.name }}</b>
            <b>{{ category.id }}</b>
            <br />
            {{ category }}
            <v-btn @click="edit(category)" icon><v-icon>mdi-pencil</v-icon> </v-btn>
            <v-btn @click="remove(category)" icon><v-icon>mdi-delete</v-icon> </v-btn>
            <br /><br />
            {{ category.services }}
            <div v-for="service in category.services" :key="service.id">
              <br />
              Service
              {{ service.id }}
              {{ service.name }}
              <v-btn @click="edit(service)" icon><v-icon>mdi-pencil</v-icon> </v-btn>
              <v-btn @click="remove(service)" icon><v-icon>mdi-delete</v-icon> </v-btn>
            </div>
          </v-card>
        </div>
      </div>
    </div>
    <div class="right-side">
      <div class="margin-right">
        <v-btn class="btn show-btn" text dark elevation="0" @click="showformcat"
          ><p class="btn-text">+ New Category</p>
          <span class="square"></span>
        </v-btn>
        <v-btn
          class="btn show-btn service-btn"
          text
          dark
          elevation="0"
          @click="showformserv"
          ><p class="btn-text">+ New Service</p>
          <span class="square"></span>
        </v-btn>
        <v-card
          class="shadow mx-auto"
          max-width="400"
          v-if="showformcategory == true"
        >
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12">
                  <v-card-text>
                    <h3
                      class="
                        text-center text-h6
                        font-weight-bold
                        text--accent-3
                        card-height
                        font-primary
                      "
                    >
                      Create new category
                    </h3>
                    <h4></h4>
                    <v-form @submit.prevent="createcategory" class="px-4">
                      <label>Name</label>
                      <v-text-field
                        cols="12"
                        v-model="name"
                        type="text"
                        outlined
                        dense
                      ></v-text-field>
                      <!-- <label>Slug</label>
                      <v-text-field
                        cols="12"
                        v-model="slug"
                        type="text"
                        outlined
                        dense
                      ></v-text-field> -->

                      
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
                        <v-btn class="btn" text dark type="submit" elevation="0"
                          ><p class="btn-text">Create</p>
                          <span class="square"></span
                        ></v-btn>
                      </div>
                    </v-form>
                  </v-card-text>
                  <v-card-text>
                    <!-- <p
                            class="text-center"
                            style="font-size: 15px; font-weight: 600"
                            >
                            Create new category
                            
                            </p> -->
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
        <v-card
          class="shadow mx-auto"
          max-width="400"
          v-if="showformservice == true"
        >
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12">
                  <v-card-text>
                    <h3
                      class="
                        text-center text-h6
                        font-weight-bold
                        text--accent-3
                        card-height
                        font-primary
                      "
                    >
                      Create new Service
                    </h3>
                    <h4></h4>
                    <v-form @submit.prevent="createservice" class="px-4">
                      <label>Service Name</label>
                      <v-text-field
                        cols="12"
                        v-model="servicename"
                        type="text"
                        outlined
                        dense
                      ></v-text-field>
                      <!-- <label>Service Slug</label>
                      <v-text-field
                        cols="12"
                        v-model="serviceslug"
                        type="text"
                        outlined
                        dense
                      ></v-text-field> -->
                      <label>Service Field</label>
                      <v-text-field
                        cols="12"
                        v-model="servicefield"
                        type="text"
                        outlined
                        dense
                      ></v-text-field>

                      <label>Service Price</label>
                      <v-text-field
                        v-model="serviceprice"
                        type="number"
                        outlined
                        dense
                      ></v-text-field>
                      <label>Service Category</label>
                      <v-text-field
                        v-model="servicecategory"
                        type="number"
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
                        <v-btn class="btn" text dark type="submit" elevation="0"
                          ><p class="btn-text">Create</p>
                          <span class="square"></span
                        ></v-btn>
                      </div>
                    </v-form>
                  </v-card-text>
                  <v-card-text>
                    <!-- <p
                            class="text-center"
                            style="font-size: 15px; font-weight: 600"
                            >
                            Create new category
                            
                            </p> -->
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      categories: [],
      name: "",
      slug: "",
      servicename: "",
      step: "",
      errors: "",
      serviceslug: "",
      servicecategory: "",
      serviceprice: "",
      servicefield: "",
      showformcategory: false,
      showformservice: false,
    };
  },
  async created() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(
        "https://hafi-yawe.fly.dev/api/categories",
        config
      );

      this.categories = res.data;
      console.log(this.categories);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    showformcat() {
      this.showformcategory = !this.showformcategory;
      this.showformservice = false;
    },
    showformserv() {
      this.showformservice = !this.showformservice;
      this.showformcategory = false;
    },
    async createcategory() {
      await axios
        .post("https://hafi-yawe.fly.dev/api/categories", {
          name: this.name,
        })
        .then(() => {
            this.showformcat = false
          console.log("success");
        })
        .catch((error) => {
          console.log(error);
          this.errors = error
        });

      console.log("create category");
    },
    async createservice() {
      await axios
        .post("https://hafi-yawe.fly.dev/api/services", {
          name: this.servicename,
          price: this.serviceprice,
          fields: this.servicefield,
          category_id: this.servicecategory,
        })
        .then(() => {
            this.showformserv = false
            this.errors = error
          console.log("successfully created service");
        })
        .catch((error) => {
          console.log(error);
        });

      console.log("create service");
    },
    edit(category) {
        const editedcategory = {
            name: "hi"
        }
        axios.put("https://hafi-yawe.fly.dev/api/category/{category.id}", editedcategory)
        .then(() => {
            console.log("success");
        })
        console.log("edit", category.name);
    },
    remove(category) {
        
    },
    edit(service) {
        console.log("edit", service.name);
    },
    remove(service) {
        console.log("remove", service.name);
    },

    // createservice() {
    //   console.log("create service");
    // },
  },
  // async asyncData({$axios, params, req, redirect}) {
  //   const config = {
  //     headers: {
  //       Accept: 'application/json'
  //     }
  //   }
  //   try {
  //     const res = await $axios.get('/categories', config)
  //     console.log(" data",res);
  //     console.log("hi");
  //     const categories = res.data.categories
  //     return {categories}
  //   } catch (e) {
  //     return {categories: []};
  //   }
  // },

  layout: "admin",
};
</script>

<style lang="scss" scoped>
.insight {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.insight > div {
  background: #fdfeff;
  padding: 3rem;
  border-radius: 0.4rem;
  margin-top: 1rem;
  box-shadow: 0 2rem 3rem #fafafa;
  transition: all 300ms ease;
}
.insight > div:hover {
  box-shadow: none;
}
.insight > div span {
  background: #011936;
  padding: 0.7rem 0.5rem;
  border-radius: 50%;

  color: #fafafa;
}
.insight > div .middle {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.insight h3 {
  margin: 1rem 0 0.6rem;
  font-size: 1rem;
}
.insight .progress {
  position: relative;
  width: 92px;
  height: 92px;
}
.insight svg {
  width: 7rem;
  height: 7rem;
}
.insight svg circle {
  fill: none;
  stroke: #011936;
  stroke-width: 14;
  stroke-linecap: round;
  transform: translate(5px, 5px);
  stroke-dasharray: 110;
  stroke-dashoffset: 92;
}
.insight .box1 svg circle {
  stroke-dashoffset: -30;
  stroke-dasharray: 200;
}
.insight .box2 svg circle {
  stroke-dashoffset: 20;
  stroke-dasharray: 80;
}
.insight .box3 svg circle {
  stroke-dashoffset: 35;
  stroke-dasharray: 110;
}
.insight .progress .number {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.insight small {
  margin-top: 1.3rem;
  display: block;
}

/**media queries */
@media screen and (max-width: 1200px) {
  /** main */
  .insight {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  // main .recent-category {
  //     width: 94%;
  //     position: absolute;
  //     left: 50%;
  //     transform: translateX(-50%);
  //     margin: 2rem 0 0 8.8rem;

  // }
  // main .recent-category .table {
  //     width: 84vw;
  // }
}
/**mobal queries */
@media screen and (max-width: 768px) {
  /**main */
  .insight {
    padding-right: 40px;
  }
  .recent-category {
    position: relative;
    margin: 3rem 0 0;
    width: 100%;
  }
}
.categories {
  padding: 100px 0;
  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
}
.categories h2 {
  margin-bottom: 30px;
}
.categories .cat-serv {
  padding-bottom: 10px;
  @media screen and (max-width: 768px) {
    padding-right: 40px;
  }
}
.card {
  padding: 20px 20px;
  border-radius: 10px;
}

/**right side */
.right-side {
  position: absolute;
  top: 0;
  width: 100%;
  left: 100%;
  padding: 15px 30px;
}
.right-side .margin-right {
  margin-right: 280px;
  @media screen and (max-width: 1200px) {
    margin-right: 0;
  }
}

@media screen and (max-width: 768px) {
  .right-side {
    position: relative;
    left: 0;
    padding: 0 0;
  }
  .right-side .margin-right {
    margin-right: 30px;
  }
}

/**form create */

.btn {
  background: #1d4e89;
  z-index: 5;
  position: relative;
  overflow: hidden;
}
.service-btn {
  background: #011936;
}
.btn-text {
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
.service-btn .square {
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
  border-radius: 8px;
  transition: 0.25s;
  height: 40px;
  width: 40px;
  background: #1d4e89;
}
.show-btn {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>