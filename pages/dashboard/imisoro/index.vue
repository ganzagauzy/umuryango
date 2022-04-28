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

			<!-- <ul class="box-info">
				<li>
					
					<span class="text">
						<h3>1020</h3>
						<p>Categories</p>
					</span>
					<i class='bx bxs-calendar-check' ></i>
				</li>
				<li>
					<span class="text">
						<h3> {{servicesize}} </h3>
						<p>Services</p>
					</span>
					<i class='bx bxs-calendar-check' ></i>
				</li>
				<li>
					<span class="text">
						<h3> {{servicesize+servicesize}} </h3>
						<p>Total</p>
					</span>
					<i class='bx bxs-calendar-check' ></i>
				</li>
			</ul> -->

			
			
			<div class="table-data">
                
				<div class="order">
					<categoriesimisoro />
				
				</div>
				<div class="order">

					<serviceirembo />

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
import serviceirembo from '../../../components/serviceirembo.vue';
import Categoriesimisoro from '../../../components/categoriesimisoro.vue';
export default {
  components: { serviceirembo, Categoriesimisoro },
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
      
      desserts: [],
      services: [],
      categories: [],
	  servicesize: '',
      editedIndex: -1,
      editedItem: {
        name: '',
        category: '',
        fat: '',
        carbs: '',
        protein: '',
      },
      defaultItem: {
        name: '',
        calories: '',
        fat: '',
        carbs: '',
        protein: '',
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

    

	

	created() {
		// this.getCategories()
		this.getServices()
		this.initialize()

  },

	

    methods: {
		// callin api
	// 	async getCategories() {
	// 	const config = {
	// 	headers: {
	// 		Accept: "application/json",
	// 	},
	// 	};
	// 	try {
	// 	const res = await axios.get(
	// 		"https://hafi-yawe.fly.dev/api/categories",
	// 		config
	// 	);

	// 	this.categories = res.data;
	// 	console.log(this.categories);
	// 	} catch (error) {
	// 	console.log(error);
	// 	}
		

	// },
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

		
		this.servicesize = res.data.services.length
		console.log(this.servicesize);
		} catch (error) {
		console.log(error);
		}
		

	},
      initialize () {
        this.desserts = [],
        this.services = []
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