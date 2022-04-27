<template>
  <v-card class="border">
      <v-expansion-panels focusable class="">
          <div class="flex">
                <h3 class="title">Categories</h3>

                <v-dialog
                    v-model="dialog"
                    max-width="400px"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        
                        class="mb-2"
                        v-bind="attrs"
                        v-on="on"
                        >
                        New Category
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                        <span class="text-h5">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col
                                cols="12"
                            >
                                <v-text-field
                                v-model="editedItem.name"
                                label="Name"
                                outlined
                                dense
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                            >
                                <v-select
                                :items="items"
                                v-model="editedItem.type"
                                label="Type"
                                outlined
                                dense
                                ></v-select>
                            </v-col>
                            
                            <v-col
                                cols="12"
                            >
                                <strong>Note:</strong> On type Select 1 for Irembo, and 2 for Imisoro
                            </v-col>
                            
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
                                @click="save"
                            >
                                Edit
                            </v-btn>
                        </div>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
          </div>
    <v-expansion-panel
      v-for="(category,i) in categories.categories"
      :key="i"
    >
    <!-- {{category.services}} -->
        <div class="category-btn ">
             <div>
                 <v-btn text @click="updateCategory(category)">
                     <v-icon >mdi-pencil</v-icon>
                 </v-btn>
                 <v-btn text @click="remove(category)">
                     <v-icon>mdi-delete</v-icon>
                 </v-btn>
             </div>
         </div>
      <v-expansion-panel-header>
          {{category.name}}
         </v-expansion-panel-header>
         
      <v-expansion-panel-content>
          <div v-for="service in category.services"
                    :key="service.id">
                    <div v-if="service.length < 1" class="py-1">
                        No Service Available
                    </div>
                    <div v-else class="py-1">
                        {{service.name}}
                    </div>
          </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  </v-card>
</template>


<script>
import axios from "axios";
export default {
  head: {
    
    link: [
      
      
      {
        rel: "stylesheet",
        href: "/css/style.css",
      },
    ]
  },

   data: () => ({
      
      categories: [],
	  servicesize: '',
      edit: false,
      dialog: false,
      formTitle: 'New Category',
      items: ['1', '2'],
      editedIndex: -1,
      editedItem: {
        name: '',
        type: '',
        
      },
    }),

    
	created() {
	
		this.getCategories()
		// this.initialize()

  },
  
  

	

    methods: {
		// callin api
		
		async getCategories() {
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

		
		this.categories = res.data
		// this.servicesize = res.data.services.length
		// console.log(this.servicesize);
		} catch (error) {
		console.log(error);
		}
		

	},
    close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
    save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
      remove(category) {
        console.log(category);
      },
      updateCategory(category) {
          this.edit = true
          this.dialog = true
          this.editedItem.name = category.name
          this.formTitle = "Edit Category"
        console.log("edit",category);
      },
    //   initialize () {
    //     this.desserts = [],
    //     this.services = []
    //   },
    }



      

}
</script>


<style lang="scss" scoped>
.border {
    margin-top: 30px;
    border-radius: 20px;
}
.title {
    margin: 10px 0;
}
.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 20px;
}
.category-btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
</style>