<template>
  <div class="heading">
      <div class="container">
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
                  <a href="">
                      <span class="icon-sharp">
                          <v-icon>mdi-grid</v-icon>
                      </span>
                      <h3 class="text-muted">Dasboard</h3>
                  </a>
                  <a href="" class="active">
                      <span class="icon-sharp">
                          <v-icon>mdi-grid</v-icon>
                      </span>
                      <h3 class="text-muted">Dasboard</h3>
                  </a>
                  <a href="">
                      <span class="icon-sharp">
                          <v-icon>mdi-grid</v-icon>
                      </span>
                      <h3 class="text-muted">Dasboard</h3>
                  </a>
                  <a href="">
                      <span class="icon-sharp">
                          <v-icon>mdi-grid</v-icon>
                      </span>
                      <h3 class="text-muted">Dasboard</h3>
                  </a>
                  <a href="">
                      <span class="icon-sharp">
                          <v-icon>mdi-grid</v-icon>
                      </span>
                      <h3 class="text-muted">Dasboard</h3>
                  </a>
                  <a href="">
                      <span class="icon-sharp">
                          <v-icon>mdi-grid</v-icon>
                      </span>
                      <h3 class="text-muted">Dasboard</h3>
                  </a>
                  <a href="">
                      <span class="icon-sharp">
                          <v-icon>mdi-grid</v-icon>
                      </span>
                      <h3 class="text-muted">Dasboard</h3>
                  </a>
                  <a href="">
                      <span class="icon-sharp">
                          <v-icon>mdi-grid</v-icon>
                      </span>
                      <h3 class="text-muted">Logout</h3>
                  </a>
              </div>

          </aside>

          <main>
              <h1>Dashboard</h1>
              <div class="date">
                  <input type="date">
              </div>
              <div class="insight">
                   <div class="box1">
                       <span class="icon-sharp"><v-icon>mdi-grid</v-icon></span>
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
                       <span class="icon-sharp"><v-icon>mdi-grid</v-icon></span>
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
                       <span class="icon-sharp"><v-icon>mdi-grid</v-icon></span>
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
              <!-- end insight -->
              <div class="recent-category">
                  <h2>Recent Category</h2>
                  <div class="table">
                      <category class="table-width" />
                      <a href="">show all</a>
                  </div>
              </div>
          </main>
          <!-- end main -->
          <div class="right">
              <div class="top">
                  <button id="menu-btn">
                      <span class="icon-sharp"><v-icon>mdi-menu</v-icon></span>
                  </button>
                  <!-- <div class="theme-toggler">
                      <span class="icon-sharp active"><v-icon>mdi-menu</v-icon></span>
                      <span class="icon-sharp"><v-icon>mdi-menu</v-icon></span>
                  </div> -->
                  <div class="profile">
                      <div class="info">
                          <p>Hey <b>k</b></p>
                          <small class="text-muted">Admin</small>
                      </div>
                      <div class="profile-photo">
                          <img src="" alt="">
                      </div>

                  </div>
              </div>
              <!--end top-->
              <div class="recent-updates">
                  <h2>updates</h2>
                  <div class="updates">
                      <div class="update">
                          <div class="profile-photo">

                      </div>
                      <div class="message">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, voluptates iste! Debitis, quod repellendus. At eius quod corrupti nesciunt atque.</p>
                      </div>
                      </div>
                      <div class="update">
                          <div class="profile-photo">

                      </div>
                      <div class="message">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, voluptates iste! Debitis, quod repellendus. At eius quod corrupti nesciunt atque.</p>
                      </div>
                      </div>
                  </div>
              </div>
              <div class="analytics">
                  <h2>Analyticts</h2>
                  <div class="item online">
                      <div class="icon">
                          <span class="icon-sharp"><v-icon>mdi-menu</v-icon></span>
                      </div>
                      <div class="right">
                          <div class="info">
                              <h3>Online</h3>
                              <small class="text-muted">24</small>
                          </div>
                          <h5 class="success">6</h5>
                      </div>
                  </div>
                  <div class="item online">
                      <div class="icon">
                          <span class="icon-sharp"><v-icon>mdi-menu</v-icon></span>
                      </div>
                      <div class="right">
                          <div class="info">
                              <h3>Online</h3>
                              <small class="text-muted">24</small>
                          </div>
                          <h5 class="success">6</h5>
                      </div>
                  </div>
                  <div class="item online">
                      <div class="icon">
                          <span class="icon-sharp"><v-icon>mdi-menu</v-icon></span>
                      </div>
                      <div class="right">
                          <div class="info">
                              <h3>Online</h3>
                              <small class="text-muted">24</small>
                          </div>
                          <h5 class="success">6</h5>
                      </div>
                  </div>
              </div>
          </div>


      </div>
  </div>
</template>

<script>
export default {

    mounted() {
        this.responsive();
        this.responsive();
    },
    methods: {
        responsive() {
            const sideMenu = document.querySelector("aside")
            const menuBtn = document.querySelector("#menu-btn")
            const closeBtn = document.querySelector("#close-btn")
            menuBtn.addEventListener("click", () => {
                sideMenu.style.display= "block"
            })
            closeBtn.addEventListener("click", () => {
                sideMenu.style.display= "none"
            })
        }
    },
    layout:"empty",
}
</script>

<style lang="scss" scoped>
/**dark theme variable */

.dark-theme-variables {
    --color-background:#181a1e;
    --color-white:#202528;
    --color-dark:#edeffd;
    --color-dark-variant:#a3bdcc;
    --color-light: rgba(0,0,0,0.4);
    --box-shadow:0 2rem 3rem  var(--color-light);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    appearance: none;
    border: 0;
    text-decoration: none;
    list-style: none;

}
.heading {
    width: 100vw;
    height: 100vh;
    font-family: poppins, sans-serif;
    font-size: 0.88rem;
    background: #E3F2FD;
    user-select: none;
    overflow-x: hidden;
    // background: #111;
}
.container {
    display: grid;
    width: 96%;
    margin: 0 10px;
    gap: 1.8rem;
    grid-template-columns: 14rem auto 23rem;

}
a {
    color: #333;
}
h1 {
    font-weight: 800;
    font-size: 1.8rem;
}
h2 {
    font-size: 1.4rem;
}
h3  {
    font-size: 0.87rem;
}
h4 {
    font-size: 0.8rem;
}
h5 {
    font-size: 0.77rem;
}
small {
    font-size: 0.76rem;
}
.profile-photo {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    overflow: hidden;
}
.text-muted {
    color: #7d8da1;
}
p {
    color: #677483;
}
b {
    color: #111;
}
.primary {
    color: #011936;
}
.success {
    color: #011936;
}
.danger {
    color: #011936;
}
.warning {
    color: #011936;
}
aside {
    height: 100vh;
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
    height: 1rem;
    transition: all 300ms ease;
}
aside .sidebar a span {
    font-size: 1.6rem;
    transition: all 300ms ease;
}
aside .sidebar a:last-child {
    position: absolute;
    bottom: 0rem;
    width: 100%;
}
aside .sidebar a.active {
    
    color: #011936;
    margin-left: 0;
}
aside .sidebar a.active::before {
    content: '';
    width: 6px;
    height: 100%;
    background: #1D4E89;
}
aside .sidebar a.active span {
    color: #1D4E89;
    margin-left: calc(1rem -3px);
}
aside .sidebar a:hover span {
    margin-left: 1rem;

}

/** main */

main {
    margin-top:  1.4rem;
}
main .date {
    display: inline-block;
    background: rgba(132, 139, 200, 0.18);
    border-radius: 2px;
    margin-top: 1rem;
    padding: 0.5rem 1.6rem;
}
main .date input[type='date'] {
    background: transparent;
    color: #011936;
}
main .insight {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}
main .insight > div {
    background: #fff;
    padding: 3rem;
    border-radius: 0.4rem;
    margin-top: 1rem;
    box-shadow: 0 2rem 3rem #fff;
    transition: all 300ms ease;
}
main .insight > div:hover {
    box-shadow: none;
}
main .insight > div span {
    background: #1D4E89;
    padding: 00.5rem;
    border-radius: 50%;
    color: #fff;
}
main .insight > div .middle {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
main .insight h3 {
    margin: 1rem 0 0.6rem;
    font-size: 1rem;
}
main .insight .progress {
    position: relative;
    width: 92px;
    height: 92px;
}
main .insight svg {
    width: 7rem;
    height: 7rem;
}
main .insight svg circle {
    fill: none;
    stroke: #1D4E89;
    stroke-width: 14;
    stroke-linecap: round;
    transform: translate(5px , 5px);
    stroke-dasharray: 110;
    stroke-dashoffset: 92;
}
main .insight .box1 svg circle {
    stroke-dashoffset: -30;
    stroke-dasharray: 200;
}
main .insight .box2 svg circle {
    stroke-dashoffset: 20;
    stroke-dasharray: 80;
}
main .insight .box3 svg circle {
    stroke-dashoffset: 35;
    stroke-dasharray: 110;
}
main .insight .progress .number {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
main .insight small {
    margin-top: 1.3rem;
    display: block;
}
/** main category */
main .recent-category {
    margin-top: 2rem;
}
main .recent-category h2 {
    margin-bottom: 0.8rem;
}
main .recent-category .table {
    background: #fff;
    width: 100%;
    border-radius: 1.4rem;
    padding: 1.4rem;
    text-align: center;
    box-shadow: rgba(132, 139, 200, 0.18);
    transition: all 300ms ease;
}
main .recent-category .table:hover {
    box-shadow: none;
}
main .recent-category a {
    text-align: center;
    display: block;
    margin: 1rem auto;

}
/**right */

.right {
    margin-top: 1.4rem;
}
.right .top {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
}
.right .top button {
    display: none;
}
.right .theme-toggler {
    background: #011936;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.6rem;
    width: 3srem;
    cursor: pointer;
    border-radius: 8px;
}
.right .theme-toggler span {
    font-size: 1.2rem;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}
.right .theme-toggler span.active {
    background: #1D4E89;
    color: #fff;
    border-radius: 8px;

}
.right .top ,profile {
    display: flex;
    gap: 2rem;
    text-align: right;
}
/**recent */
.right .recent-updates {
    margin-top: 1rem;
}
.right .recent-updates  h2 {
    margin-bottom: 00.8rem;
}
.right .recent-updates .updates {
    background: #fff;
    padding: 2rem;
    border-radius: 1.4rem;
    box-shadow: rgba(132, 139, 200, 0.18);
    transition: all 300ms ease;

}
.right .recent-updates .updates:hover {
    box-shadow: none;
}
.right .recent-updates .updates .update {
    display: grid;
    grid-template-columns: 2.6rem auto;
    gap: 1rem;
    margin-bottom: 1rem;
}

.right .analytics {
    margin-top: 2rem;
}
.right .analytics h2{
    margin-bottom: 0.8rem;
}
.right .analytics .item {
    background: #fff;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.7rem;
    padding: 1.8rem 2rem;
    border-radius: 8px;
    // box-shadow: 0 1rem 2rem #fff;
    transition: all 300ms ease;
}
.right .analytics .item .right {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0;
    width: 100%;
}
.right .analytics .item .icon {
    padding: 0.6rem;
    color: #fff;
    border-radius: 50%;
    background: #011936;
    display: flex;
}

/**media queries */
@media screen and (max-width:1200px) {
    
    .container {
        width: 94%;
        grid-template-columns: 7rem auto 23rem;
    }
    aside .logo h2 {
        display: none;
    }
    aside .sidebar h3 {
        display: none;
    }
    aside .sidebar a {
        width: 5.6rem;
    }
    aside .sidebar a:last-child {
        position: relative;
        margin-top: 1.8rem;
    }
    /** main */
    main .insight {
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
    .container {
        width: 100%;
        margin: 10px 10px;
        grid-template-columns: 1fr;
    }
    aside {
        position: fixed;
        left: -100%;
        background: #fff;
        width: 18rem;
        z-index: 3;
        box-shadow: 0 2rem 3rem #fff;
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
        height: 3.4rem;
    }
   aside .close {
       display: inline-block;
       cursor: pointer;
   }
   /**main */
   main {
       margin-top: 8rem;
       padding: 0 1rem;
   }
   main .recent-category {
       position: relative;
       margin: 3rem 0 0;
       width: 100%;
   }
   main .recent-category .table {
       margin: 0;
   }

   .right {
       width: 84%;
       margin: 0 auto 4rem;
   }
   .right .top {
       position: fixed;
       top: 0;
       left: 0;
       align-items: center;
       padding: 0 0.8rem;
       height: 4.6rem;
       background: #fff;
       width: 100%;
       margin: 0;
       z-index: 2;
       box-shadow:  0 1rem #fff;
   }
   .right .top .theme-toggler {
       width: 4.4rem;
       position: absolute;
       left: 76%;
   }
   .right .profile  .info {
       display: none;
   }
   .right .top button {
       display: inline-block;
       background: transparent;
       cursor: pointer;
       color: #011936;
       position: absolute;
       left: 2rem;
   }
   .right .top button span {
       font-size: 2rem;
   }
}
</style>