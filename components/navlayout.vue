<template>
  <div @click.stop="drawer = false">
      <header>
          <div class="nav-toggle-btn " @click.stop="drawer = !drawer">
                      <span class="one"></span>
                      <span class="two"></span>
                      <span class="three"></span>
                  </div>
          <a href="" class="logo text--white">Hafi Yawe</a>
          <nav>
              <ul>
                  <li>
                      <v-btn class="btn" text dark><p class="btn-text">Register</p><span class="square"></span></v-btn>
                  </li>
                  <li>
                      <v-btn class="btn" text dark><p class="btn-text">Sing in</p><span class="square"></span></v-btn>
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
      <div class="drawer">
          <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      class="d-md-none drawer2"
      app
    >
      <v-list>
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="link.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
      </div>
  </div>
</template>

<script>
export default {
    data: () => ({
      items: [
        { title: 'Register' },
        { title: 'Sign in' },
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
    },
    methods: {
        mobal() {
            if(window.innerWidth > 767) {
                this.drawer = false
            }
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
    padding: 2px 0;
    position: relative;
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
    margin-bottom: 100px;
}
.search {
    position: absolute;
    background: #011936;
    top: 45%;
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
</style>