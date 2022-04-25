<template>
<v-app>
  <body class="body">
    	<main>
      
			<div class="head-title">
        
				<div class="left">
					<ul class="breadcrumb">
						<li>
							<a href="#">Imisoro</a>
						</li>
					</ul>
				</div>
				<!-- <a href="#" class="btn-download">
					<i class='bx bx-plus' ></i>
					<span class="text">New Category</span>
				</a> -->
				
			</div>

			<ul class="box-info">
				<li>
					
					<span class="text">
						<h3>1020</h3>
						<p>Categories</p>
					</span>
					<i class='bx bxs-calendar-check' ></i>
				</li>
				<li>
					<span class="text">
						<h3>2834</h3>
						<p>Services</p>
					</span>
					<i class='bx bxs-calendar-check' ></i>
				</li>
				<li>
					<span class="text">
						<h3>2543</h3>
						<p>Total</p>
					</span>
					<i class='bx bxs-calendar-check' ></i>
				</li>
			</ul>


			<div class="table-data">
                <div class="todo">
					<div class="head">
						<h3>Categories</h3>
						<!-- <i class='bx bx-plus' >New Category</i> -->

						<v-dialog
							v-model="dialogCategory"
							max-width="300px"
							>
							<template v-slot:activator="{ on, attrs }">
								<v-btn class="btn show-btn" v-bind="attrs"
								v-on="on" text dark elevation="0" 
									><p class="btn-text">New Category</p>
									<span class="square"></span>
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
										sm="12"
										md="12"
									>
										<v-text-field
										v-model="editedItem.name"
										label="Dessert name"
										></v-text-field>
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
								<v-btn
									color="blue darken-1"
									text
									@click="save"
								>
									Save
								</v-btn>
								</v-card-actions>
							</v-card>
							</v-dialog>
						

					</div>
					<ul class="todo-list pb-3" v-for="category in categories.categories"
						:key="category.id">
						<li class="completed">
							<p> {{category.name}} {{category.id}} </p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<!-- <li class="completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="not-completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="not-completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li> -->
					</ul>
				</div>
				<div class="order">

					<v-data-table
						:headers="headers"
						:items="desserts"
						sort-by="calories"
						class="elevation-1"
					>
						<template v-slot:top>
						<v-toolbar
							flat
						>
							<v-toolbar-title><h3>Services</h3></v-toolbar-title>
							<v-divider
							class="mx-4"
							inset
							vertical
							></v-divider>
							<v-spacer></v-spacer>
							<v-dialog
							v-model="dialog"
							max-width="500px"
							>
							<template v-slot:activator="{ on, attrs }">
								<!-- <v-btn
								color="#c6e7ff"
								class="mb-2"
								v-bind="attrs"
								v-on="on"
								>
								New Service
								</v-btn> -->
								<v-btn class="btn show-btn" v-bind="attrs"
								v-on="on" text dark elevation="0" 
									><p class="btn-text">New Service</p>
									<span class="square"></span>
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
										sm="6"
										md="4"
									>
										<v-text-field
										v-model="editedItem.name"
										label="Dessert name"
										></v-text-field>
									</v-col>
									<v-col
										cols="12"
										sm="6"
										md="4"
									>
										<v-text-field
										v-model="editedItem.calories"
										label="Calories"
										></v-text-field>
									</v-col>
									<v-col
										cols="12"
										sm="6"
										md="4"
									>
										<v-text-field
										v-model="editedItem.fat"
										label="Fat (g)"
										></v-text-field>
									</v-col>
									<v-col
										cols="12"
										sm="6"
										md="4"
									>
										<v-text-field
										v-model="editedItem.carbs"
										label="Carbs (g)"
										></v-text-field>
									</v-col>
									<v-col
										cols="12"
										sm="6"
										md="4"
									>
										<v-text-field
										v-model="editedItem.protein"
										label="Protein (g)"
										></v-text-field>
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
								<v-btn
									color="blue darken-1"
									text
									@click="save"
								>
									Save
								</v-btn>
								</v-card-actions>
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


					<!-- <div class="head">
						<h3>Services</h3>
						<i class='bx bx-plus' >New Service</i>
						<i class='bx bx-search' ></i>
						<i class='bx bx-filter' ></i>
					</div>
					<table>
						<thead>
							<tr>
								<th>User</th>
								<th>Date Order</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<img src="img/people.png">
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span class="status completed">Completed</span></td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png">
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span class="status pending">Pending</span></td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png">
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span class="status process">Process</span></td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png">
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span class="status pending">Pending</span></td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png">
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span class="status completed">Completed</span></td>
							</tr>
						</tbody>
					</table> -->
				</div>
				
			</div>
			
		</main>
  </body>
  </v-app>
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
      dialog: false,
      dialogDelete: false,
      dialogCategory: false,
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Cateory', value: 'calories' },
        { text: 'Price', value: 'fat' },
        // { text: 'Carbs (g)', value: 'carbs' },
        // { text: 'Protein (g)', value: 'protein' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      categories: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
    },

	// callin api

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
      this.initialize()

  },

    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
		this.dialogCategory = false
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

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },


layout: 'testadmin'
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
// .service-btn .square {
//   position: absolute;
//   top: 50%;
//   right: -20px;
//   transform: translateY(-50%);
//   border-radius: 8px;
//   transition: 0.25s;
//   height: 40px;
//   width: 40px;
//   background: #1d4e89;
// }
</style>