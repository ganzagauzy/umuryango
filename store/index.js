let token = window.localStorage.getItem('token')
const user = window.localStorage.getItem('user')

export const state = () => ({

  // auth
//   user: null,
  token: window.localStorage.getItem('token'),
//   orders: [],
  user: window.localStorage.getItem('user'),
  
})

export const getters = {
  
  //auth

  getUser(state) {
    return state.user
  },
  getToken(state) {
    return state.token
  },
  
//   orders(state) {
//     return state.Cart
//   },
//   ordersTotal(state, getters) {
//     let total = 0
//     getters.orders.forEach(order => {
//       total+= order.price * order.nproducts
//     });
//     return total
//   },

  
}

export const mutations = {

  //auth 

  setUser(state, user) {
    state.user = user
    this.commit('saveDataUser');
  },
  
  setToken(state, token) {
    state.token= token
    this.commit('saveDataToken');
    
  },
  saveDataToken (state) {
    window.localStorage.setItem('token', state.token)
  },
  saveDataUser (state) {
    window.localStorage.setItem('user', state.user)
  },
  removeData (state,token) {
    
    state.token = null;
    // state.user = null;
    this.commit('saveData');
  },

 
}

export const actions = {

  //auth

//   async onAuthStateChangedAction(state, { authUser, claims }) {
//     if (!authUser) {
//       claims = null
//       Perform logout operations
//       state.commit('SET_USER', null)

//       //redirect from here 
//       this.$router.push({
//         path: 'auth/signin',
//       })
//     } else {
//       Do something with the authUser and the claims object...
//       const { uid, email} = authUser
//       state.commit('SET_USER', {
//         uid,
//         email
//       })
//     }
//   },
  // fetchProduct(vuexContext, product) {
  //   vuexContext.commit('setProduct', product)
  // },

}
