<template>
  <v-data-table
    :headers="headers"
    :items="services"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>
            <h3>Services</h3>
        </v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="400px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="btn show-btn" 
                    v-bind="attrs"
                    @click="formtittle"
					v-on="on" text dark elevation="0" 
					><p class="btn-text">New Service</p>
					<span class="square"></span>
			</v-btn>
          </template>
          <v-card >
            
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Service name"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-text-field
                      v-model="editedItem.category_id"
                      label="Category"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-text-field
                      v-model="editedItem.fields"
                      label="Fields"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-text-field
                      v-model="editedItem.price"
                      label="Price"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <!-- <v-col
                    cols="12"
                    sm="12"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.protein"
                      label="Protein (g)"
                    ></v-text-field>
                  </v-col> -->
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="step ++"
              >
                Next
              </v-btn>
            </v-card-actions>
              </v-window-item>
              <v-window-item :value="2">
                <v-card-title>
              <span class="text-h5">Requirements</span>
            </v-card-title>
            <v-card-text>
              
              <br>
              <v-container>
                
                <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-text-field
                      v-model="editedItem.requirement1"
                      label="Requirement1"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-text-field
                      v-model="editedItem.requirement2"
                      label="requirement2"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-text-field
                      v-model="editedItem.requirement3"
                      label="Requirement3"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-text-field
                      v-model="editedItem.requirement4"
                      label="Requirement4"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <!-- <v-col
                    cols="12"
                    sm="12"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.protein"
                      label="Protein (g)"
                    ></v-text-field>
                  </v-col> -->
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="step --"
              >
                Back
              </v-btn>
              <div>
                <v-btn v-if="edit == false"
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
                <v-btn v-else
                color="blue darken-1"
                text
                @click="update(item)"
              >
                Edit
              </v-btn>
              </div>
            </v-card-actions>
              </v-window-item>
            </v-window>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";
  export default {
    data: () => ({
      step:1 ,
      edit: false,
      dialog: false,
      dialogDelete: false,
      saveDate: false,
      uploading: false,
      formTitle: '',
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Id', value: 'id' },
        { text: 'Price', value: 'price' },
        { text: 'CategoryId', value: `category_id` },
        { text: 'Category', value: `requirement1` },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      
      desserts: [],
      services: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        category_id: '',
        price: '',
        fields: '',
        requirement1: '',
        requirement2: '',
        requirement3: '',
        requirement4: '',
      },
      defaultItem: {
        name: '',
        category: '',
        price: '',
        fields: '',
      },
    }),

    // computed: {
    //   formTitle () {
    //     return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    //   },
    // },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
      this.getServices()
    },

    methods: {
        async getServices() {
		const config = {
		headers: {
			Accept: "application/json",
		},
		};
		try {
		const res = await axios.get(
			"https://hafi-yawe.fly.dev/api/services",
			config
		);

		this.services = res.data.services;
		this.servicesize = res.data.services.length
		console.log(this.servicesize);
		console.log("services",this.services);
		} catch (error) {
		console.log(error);
		}
		

	},
      initialize () {
        this.desserts = []
        this.services = []
      },
      formtittle() {
        this.formTitle = 'New Service'
      },

      editItem (item) {
        this.edit = true
        this.formTitle = 'Edit Service'
        this.editedIndex = this.services.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.services.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        const id = this.editedItem.id;
        console.log("id",id);
          axios.delete(`https://hafi-yawe.fly.dev/api/services/${this.editedItem.id}`)
          .then(() => {
              this.services.splice(this.editedIndex, 1)
              this.closeDelete()
          }).catch( err => {
              console.log(err);
              this.closeDelete()
          })
        
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

     async save () {
        const service = {}
        service.name = this.editedItem.name
        service.category_id = this.editedItem.category_id
        service.price = this.editedItem.price
        service.fields = this.editedItem.fields
        service.requirement1 = this.editedItem.requirement1
        service.requirement2 = this.editedItem.requirement2
        service.requirement3 = this.editedItem.requirement3
        service.requirement4 = this.editedItem.requirement4
         

        if (this.editedIndex > -1) {
          console.log("saving");
        } else {
          if (!this.uploading) {
            const config = {
              headers: {"content-type": "application/json"}
            };
            // this.$nuxt.$loading.start()
            this.saveData = true
            await axios.post(`https://hafi-yawe.fly.dev/api/services`, service, config).then(data => {
              this.services.push(this.editedItem)
              axios.get('https://hafi-yawe.fly.dev/api/services', config)
            //   this.$nuxt.$loading.finish()
              this.saveData = false
             this.is_submitting = false
              this.close()
              console.log("succesfull");
            //   this.$bvToast.toast('Portfolio Created Successfully', {
            //     title: `Creating Portfolio`,
            //     variant: 'success',
            //     solid: true
            //   })
            })
              .catch(({response: err}) => {
                this.saveData = false
                const errors = err.data
                this.createError = errors && errors.errors
                // this.$nuxt.$loading.finish()
                console.log("failed");
                // this.$bvToast.toast('Portfolio Creating Failed', {
                //   title: `Creating Portfolio`,
                //   variant: 'danger',
                //   solid: true
                // })
              })
          }
        }
      
      },
     async update (item) {
        const service = {}
        service.name = this.editedItem.name
        service.category_id = this.editedItem.category_id
        service.price = this.editedItem.price
        service.fields = this.editedItem.fields
         

        if (this.editedIndex > -1) {
          if (!this.uploading) {
            const config = {
              headers: {
                Accept: 'application/json'
              }
            }
            // this.$nuxt.$loading.start()
            this.saveData = true
            await axios.put(`https://hafi-yawe.fly.dev/api/services/${this.editedItem.id}`, service, config).then(data => {
              Object.assign(this.services[this.editedIndex], this.editedItem)
              axios.get('https://hafi-yawe.fly.dev/api/services', config)
            //   this.$nuxt.$loading.finish()
              this.saveData = false
             this.is_submitting = false
              this.close()
              console.log("success");
            //   this.$bvToast.toast('Portfolio Updated Successfully', {
            //     title: `Updating Portfolio`,
            //     variant: 'success',
            //     solid: true
            //   })
            })
              .catch(({response: err}) => {
             this.is_submitting = false
                this.saveData = false
                const errors = err.data
                this.createError = errors && errors.errors
                // this.$nuxt.$loading.finish()
              })
          }
        } else {
          console.log("for editing");
        }
      
      },
    },
  }
</script>

<style lang="scss" scoped>

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
  margin-top: 15px;
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

