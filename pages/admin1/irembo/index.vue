<template>
  <div>
     <div>
         <h2>irembo</h2>
         <div class="insight">
                   <div class="box1">
                       <span class="icon-sharp"><v-icon dark>mdi-grid</v-icon></span>
                       <div class="middle">
                           <div class="left">
                               <h3>Tot1</h3>
                               <h1>50</h1>
                           </div>
                           <div class="progress">
                               <svg>
                                   <circle cx="38" cy="38" r="36">

                                   </circle>
                               </svg>
                               <div class="number">
                                   <p>50%</p>
                               </div>
                           </div>
                       </div>
                       <small class="text-muted">
                           last
                       </small>
                   </div>
                   <!-- end-->
                   <div class="box2">
                       <span class="icon-sharp"><v-icon dark>mdi-grid</v-icon></span>
                       <div class="middle">
                           <div class="left">
                               <h3>Tot1</h3>
                               <h1>50</h1>
                           </div>
                           <div class="progress">
                               <svg>
                                   <circle cx="38" cy="38" r="36">

                                   </circle>
                               </svg>
                               <div class="number">
                                   <p>50%</p>
                               </div>
                           </div>
                       </div>
                       <small class="text-muted">
                           last
                       </small>
                   </div>
                   <!-- end-->
                   <div class="box3">
                       <span class="icon-sharp"><v-icon dark>mdi-grid</v-icon></span>
                       <div class="middle">
                           <div class="left">
                               <h3>Tot1</h3>
                               <h1>50</h1>
                           </div>
                           <div class="progress">
                               <svg>
                                   <circle cx="38" cy="38" r="36">

                                   </circle>
                               </svg>
                               <div class="number">
                                   <p>50%</p>
                               </div>
                           </div>
                       </div>
                       <small class="text-muted">
                           last
                       </small>
                   </div>
                   <!-- end-->
              </div>
              <div class="categories py-5">
                  <h2>Categories and Services</h2>
                  <div v-for="category in categories.categories"
                    :key="category.id" class="cat-serv">
                    <v-card class="card" rounded>
                        Category
                    <b>{{category.name}}</b>
                    <b>{{category.id}}</b>
                    <br><br>
                    {{category.services}}
                    <div v-for="service in category.services"
                    :key="service.id">
                    <br>
                    Service
                    {{service.id}}
                    {{service.name}}
                    </div>
                    </v-card>
                    </div>
                  
                  
              </div>
     </div>
     <div class="right-side">
         <div class="margin-right">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto fugiat quo ipsa illum soluta laudantium placeat, nihil similique dignissimos delectus atque unde voluptates molestias! Nihil consectetur soluta voluptates dolorum?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto fugiat quo ipsa illum soluta laudantium placeat, nihil similique dignissimos delectus atque unde voluptates molestias! Nihil consectetur soluta voluptates dolorum?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto fugiat quo ipsa illum soluta laudantium placeat, nihil similique dignissimos delectus atque unde voluptates molestias! Nihil consectetur soluta voluptates dolorum?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto fugiat quo ipsa illum soluta laudantium placeat, nihil similique dignissimos delectus atque unde voluptates molestias! Nihil consectetur soluta voluptates dolorum?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto fugiat quo ipsa illum soluta laudantium placeat, nihil similique dignissimos delectus atque unde voluptates molestias! Nihil consectetur soluta voluptates dolorum?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto fugiat quo ipsa illum soluta laudantium placeat, nihil similique dignissimos delectus atque unde voluptates molestias! Nihil consectetur soluta voluptates dolorum?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto fugiat quo ipsa illum soluta laudantium placeat, nihil similique dignissimos delectus atque unde voluptates molestias! Nihil consectetur soluta voluptates dolorum?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto fugiat quo ipsa illum soluta laudantium placeat, nihil similique dignissimos delectus atque unde voluptates molestias! Nihil consectetur soluta voluptates dolorum?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto fugiat quo ipsa illum soluta laudantium placeat, nihil similique dignissimos delectus atque unde voluptates molestias! Nihil consectetur soluta voluptates dolorum?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto fugiat quo ipsa illum soluta laudantium placeat, nihil similique dignissimos delectus atque unde voluptates molestias! Nihil consectetur soluta voluptates dolorum?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto fugiat quo ipsa illum soluta laudantium placeat, nihil similique dignissimos delectus atque unde voluptates molestias! Nihil consectetur soluta voluptates dolorum?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto fugiat quo ipsa illum soluta laudantium placeat, nihil similique dignissimos delectus atque unde voluptates molestias! Nihil consectetur soluta voluptates dolorum?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto fugiat quo ipsa illum soluta laudantium placeat, nihil similique dignissimos delectus atque unde voluptates molestias! Nihil consectetur soluta voluptates dolorum?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto fugiat quo ipsa illum soluta laudantium placeat, nihil similique dignissimos delectus atque unde voluptates molestias! Nihil consectetur soluta voluptates dolorum?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto fugiat quo ipsa illum soluta laudantium placeat, nihil similique dignissimos delectus atque unde voluptates molestias! Nihil consectetur soluta voluptates dolorum?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto fugiat quo ipsa illum soluta laudantium placeat, nihil similique dignissimos delectus atque unde voluptates molestias! Nihil consectetur soluta voluptates dolorum?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto fugiat quo ipsa illum soluta laudantium placeat, nihil similique dignissimos delectus atque unde voluptates molestias! Nihil consectetur soluta voluptates dolorum?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto fugiat quo ipsa illum soluta laudantium placeat, nihil similique dignissimos delectus atque unde voluptates molestias! Nihil consectetur soluta voluptates dolorum?</p>
        </div>
     </div>
  </div>
</template>

<script>


import axios from 'axios'
export default  {
    data() {
        return {
            categories: [],
        }
    },
    async created () {
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
  
layout: 'admin'
}
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
    box-shadow: 0 2rem 3rem #FAFAFA;
    transition: all 300ms ease;
}
 .insight > div:hover {
    box-shadow: none;
}
 .insight > div span {
    background: #011936;
    padding: 0.7rem 0.5rem;
    border-radius: 50%;
    
    color: #FAFAFA;
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
    transform: translate(5px , 5px);
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
@media screen and (max-width:1200px) {
    
    
   
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
@media screen and (max-width:768px) {
   
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
    @media screen and (max-width:768px) {
        padding: 50px 0;
    }
}
.categories h2 {
    margin-bottom: 30px;
}
.categories .cat-serv {
    padding-bottom: 10px;
    @media screen and (max-width:768px) {
        padding-right:  40px;
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
    @media screen and (max-width:1200px) {
        margin-right: 0;
    }
}

@media screen and (max-width:768px) {
    .right-side {
        position: relative;
        left: 0;
        padding: 0 0;
    }
    .right-side .margin-right {
        margin-right: 30px;
    }
}
</style>