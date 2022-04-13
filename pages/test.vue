<template>
  <div>
     <div>
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
     </div>
  </div>
</template>

<script>

import axios from "axios";
export default  {
  
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
    background: #fff;
    padding: 3rem;
    border-radius: 0.4rem;
    margin-top: 1rem;
    box-shadow: 0 2rem 3rem #fff;
    transition: all 300ms ease;
}
 .insight > div:hover {
    box-shadow: none;
}
 .insight > div span {
    background: #1D4E89;
    padding: 00.5rem;
    border-radius: 50%;
    color: #fff;
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
    stroke: #1D4E89;
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
</style>