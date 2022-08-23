// import { createRouter, createWebHistory } from "vue-router";

// const routes = 
  
// const router = createRouter({
//     history: createWebHistory(),
//     routes
// })

import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import Cart from '../views/Cart.vue';

export default [
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