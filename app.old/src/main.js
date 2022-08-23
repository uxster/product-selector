import Vue from 'vue'
// import { createRouter, createWebHistory } from "vue-router";
// import VueRouter from "vue-router";
// import Routes from './router/routes.js'
import App from './App.vue'

// Vue.use(VueRouter)
    
import Home from './views/Home.vue';
import Products from './views/Products.vue';
import Cart from './views/Cart.vue';

const routes = [
  {
      path: '/',
      name: 'Home',
      component: Home
  },
  {
      path: '/products',
      name: 'Products',
      component: Products
  },
  {
      path: '/cart',
      name: 'Cart', 
      component: Cart
  }
]

// const router = createRouter({
//     history: createWebHistory(),
//     routes
// })

// new Vue({
//   el: '#app',
//   render: h => h(App),
//   router
// });

// const router = new VueRouter({
//   routes // short for `routes: routes`
// })

const app = new Vue({
  render: h => h(App),
}).$mount('#app')