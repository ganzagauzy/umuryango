<template>
  <div @click.stop="drawer = false">
      <header>
          <div class="nav-toggle-btn " id="menu-btn" >
                      <span class="one"></span>
                      <span class="two"></span>
                      <span class="three"></span>
                  </div>
          <NuxtLink to="/" class="logo text--white">Hafi Yawe</NuxtLink>
          <nav>
              <ul>
                  
                  <li>
                      <v-btn class="btn" text
                        dark
                        nuxt
                        to="/"
                      ><p class="btn-text">Home</p><span class=""></span>
                      </v-btn>
                  </li>
                  <li>
                      <v-btn class="btn" text
                        dark
                        nuxt
                        to="/auth/register"
                      ><p class="btn-text">Register</p><span class=""></span>
                      </v-btn>
                  </li>
                  <li>
                      <v-btn class="btn" 
                        text dark
                        nuxt
                        to="/auth/login"
                        ><p class="btn-text">Log in</p><span class=""></span></v-btn>
                  </li>
                  
                  <div class="nav-toggle-account-btn px-5">
                      <span class="account active">
                          <v-menu offset-y class="pb-4">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon
                                    
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                    >
                                    mdi-account
                                    </v-icon>
                                </template>
                                <v-list  width="200" class="py-2">
                                    <v-list-item
                                    v-for="(item, index) in items"
                                    :key="index"
                                    :to="item.to"
                                    router
                                    exact
                                    >
                                    <v-list-item-title class="px-3">{{ item.title }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                                </v-menu>
                      </span>
                  </div>

              </ul>
          </nav>
      </header>
      <div class="hero">
          <div class="t1 drop-anim"></div>
          <div class="t2 drop-anim"></div>
          <h2 class="main-heading py-5">Hafi Yawe</h2>
          <div class="t3 drop-anim"></div>
          <div class="t4 drop-anim"></div>
          <div class="search py-5">
              <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-text-field dark
            label="Search"
            filled
            rounded
            dense
            clearable
            class="search-btn"
          ></v-text-field>
        </v-col>
          </div>

      </div>
      
      <div class="aside">
          <aside>
              <div class="top">
              <div class="logo">
                  <img src="" alt="">
                  <h2>Hafi yawe</h2>
              </div>
              <div class="close" id="close-btn">
                  <span class="icon-sharp">
                      <v-icon>mdi-close</v-icon>
                  </span>
              </div>
              </div>
              <div class="sidebar">
                  <Nuxt-Link to="/" id="link">
                      <span class="icon-sharp">
                          <v-icon>mdi-grid</v-icon>
                      </span>
                      <h3 class="text-muted">Home</h3>
                  </Nuxt-Link>
                  
                  <Nuxt-Link to="/auth/register" id="link" class="">
                      <span class="icon-sharp">
                          <v-icon>mdi-grid</v-icon>
                      </span>
                      <h3 class="text-muted" >Register</h3>
                  </Nuxt-Link>
                  <Nuxt-Link to="/auth/login" id="link" class="">
                      <span class="icon-sharp">
                          <v-icon>mdi-grid</v-icon>
                      </span>
                      <h3 class="text-muted">Login</h3>
                  </Nuxt-Link>
                  <!-- <Nuxt-Link to="">
                      <span class="icon-sharp">
                          <v-icon>mdi-grid</v-icon>
                      </span>
                      <h3 class="text-muted">Dasboard</h3>
                  </Nuxt-Link>
                  <Nuxt-Link to="">
                      <span class="icon-sharp">
                          <v-icon>mdi-grid</v-icon>
                      </span>
                      <h3 class="text-muted">Dasboard</h3>
                  </Nuxt-Link>
                  <Nuxt-Link to="">
                      <span class="icon-sharp">
                          <v-icon>mdi-grid</v-icon>
                      </span>
                      <h3 class="text-muted">Dasboard</h3>
                  </Nuxt-Link>
                  <Nuxt-Link to="">
                      <span class="icon-sharp">
                          <v-icon>mdi-grid</v-icon>
                      </span>
                      <h3 class="text-muted">Dasboard</h3>
                  </Nuxt-Link>
                  <Nuxt-Link to="">
                      <span class="icon-sharp">
                          <v-icon>mdi-grid</v-icon>
                      </span>
                      <h3 class="text-muted">Dasboard</h3>
                  </Nuxt-Link> -->
                  
              </div>

          </aside>
      </div>
  </div>
</template>

<script>
export default {
    data: () => ({
      items: [
        { title: 'Register',
        to: '/auth/register' },
        { title: 'Log in',
        to: '/auth/login' },
      ],
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      links: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        },
      ]
    }),
    mounted() {
        this.mobal();
        this.responsive();
    },
    methods: {
        mobal() {
            if(window.innerWidth > 767) {
                this.drawer = false
            }
        },
        responsive() {
            const sideMenu = document.querySelector("aside")
            const menuBtn = document.querySelector("#menu-btn")
            const closeBtn = document.querySelector("#close-btn")
            const link = document.querySelector("#link")
            menuBtn.addEventListener("click", () => {
                sideMenu.style.display= "block"
            })
            closeBtn.addEventListener("click", () => {
                sideMenu.style.display= "none"
            })
            link.addEventListener("click", () => {
                sideMenu.style.display= "none"
            })
        }
    }
}
</script>


<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
ul {
    list-style: none;
}
li {
    list-style: none;
}
a {
    text-decoration: none;
}
header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #065A82;
}
header .logo {
    color: #fff;
    font-size: 1.5em;
}
header ul {
    display: flex;
    justify-content: space-around;
}
header ul li {
    margin-right: 30px;
}
header ul li {
    background: #011936;
    padding: 5px 10px;
    border-radius: 5px;
    z-index: 5;
    position: relative;
    overflow: hidden;
}

header ul li {
    @media screen and (max-width:767px) {
        display: none;
    }
}
// header ul li .btn {
//     @media screen and (max-width:467px) {
//         display: none;
//     }
// }
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
header ul li:hover .square {
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
    @media screen and (max-width:467px) {
        display: none;
    }
}
.hero {
    padding: 0.1px 0;
    position: relative;
    margin-bottom: 120px;
    background: #065A82;
}
.t1 {
    position: absolute;
    width: 40px;
    height: 30px;
    left: 40%;
    top: 5%;
    background: rgba(0, 0, 0, 0.1);
    clip-path: polygon(100% 45%, 0 0, 0 100%);
}
.t2 {
    position: absolute;
    width: 40px;
    height: 30px;
    left: 42%;
    top: 5%;
    background: rgba(0, 0, 0, 0.1);
    clip-path: polygon(100% 45%, 0 0, 0 100%);
}
.t3 {
    position: absolute;
    width: 40px;
    height: 30px;
    left: 59%;
    top: 5%;
    background: rgba(0, 0, 0, 0.1);
    clip-path: polygon(0 45%, 100% 100%, 100% 0);
}
.t4 {
    position: absolute;
    width: 40px;
    height: 30px;
    left: 57%;
    top: 5%;
    background: rgba(0, 0, 0, 0.1);
    clip-path: polygon(0 45%, 100% 100%, 100% 0);
}
.main-heading {
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
}
.search {
    position: absolute;
    background: #011936;
    top: 45%;
    bottom: 0;
    border-radius: 15px;
    left: 10%;
    max-width: 80%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.search-btn {
    display: flex;
    padding: 50px 10px;
    justify-content: center;
    align-items: center;
}
.nav-toggle-account-btn {
    margin-left: 5px;
    background: #011936;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media screen and (min-width: 767px){
        display: none;
    }
    
    
}
.nav-toggle-account-btn.active {
    background: #fff;
}
.nav-toggle-btn {
    background: #011936;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    cursor: pointer;
     @media screen and (min-width: 767px){
        display: none;
    }
}

.nav-toggle-btn span {
    background: #fff;
    width: 30px;
    height: 2px;
    transition: 0.25s;
}
.nav-toggle-btn.active .one {
    transform: rotate(45deg) translate(3px, 3px);
}
.nav-toggle-btn.active .two {
    display: none;
}
.nav-toggle-btn.active .three {
    transform: rotate(-45deg) translate(2px, -2px);
}



/* media queries */

@media screen and (min-width:767px) {
    .drawer {
        display: none;
        visibility: hidden;
        height: 0;
        width: 0;
        overflow: hidden;

    }
    .drawer2 {
        display: none;
        visibility: hidden;
        height: 0;
        width: 0;
        overflow: hidden;

    }
}

/* animation */
.drop-anim {
    padding-top: 60px;
    animation: drop 2.5s infinite;
}
@keyframes drop {
    0%,
    20%,
    50%,
    80%,
    100% {transform: translateX(0);}
    40% {transform: translateX(-30px);}
    60% {transform: translateX(-15px);}
}


/**Mobal aside */

aside {
    display: none;
    @media screen and (max-width:768) {
        display: block;
    }
}
aside .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.4rem;
}
aside .logo {
    display: flex;
    gap: 1rem;
}
aside .logo img {
    width: 2rem;
    height: 2rem;
}
aside .close {
    display: none;
}
aside  .sidebar {
    display: flex;
    flex-direction: column;
    height: 86vh;
    position: relative;
    top: 2rem;
}
aside h3 {
    font-weight: 500;
}
aside .sidebar a {
    display: flex;
    color: #011936;
    margin: 2rem;
    gap: 1rem;
    align-items: center;
    position: relative;
    height: 0.5rem;
    transition: all 300ms ease;
}
aside .sidebar a span {
    font-size: 1.6rem;
    transition: all 300ms ease;
}

// aside .sidebar a.active {
//     border-radius: 10px;
//     background: #011936;
//     padding: 20px 0px;
//     margin-left: 0;
// }

aside .sidebar a:hover span {
    margin-left: 1rem;

}





/**media queries */
@media screen and (max-width:1200px) {
    
    
    aside .logo h2 {
        display: none;
    }
    aside .sidebar h3 {
        display: none;
    }
    aside .sidebar a {
        width: 5.6rem;
    }

    
    
}
/**mobal queries */
@media screen and (max-width:768px) {
   
    aside {
        position: fixed;
        top: 0;
        left: -100%;
        background: #fff;
        width: 18rem;
        z-index: 3;
        height: 100vh;
        padding-right: 1.4rem;
        display: none;
        animation: showMenu 400ms ease forwards;
    }
    @keyframes showMenu {
        to {
            left: 0;
        }
        
    }
    aside .logo {
        margin-left: 1rem;
    }
    aside .logo h2 {
        display: inline;
    }
    aside .sidebar h3 {
        display: inline;
    }
    aside .sidebar a {
        width: 100%;
        height: 0.2rem;

    }
   
    
   aside .close {
       display: inline-block;
       cursor: pointer;
   }
}
</style>