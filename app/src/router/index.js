import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import Products from "../views/ProductsPage.vue";
import ProductsFlyers from "../views/ProductsPageFlyers.vue";
import ProductsBusinessCards from "../views/ProductsPageBusinessCards.vue";
import ProductsPosters from "../views/ProductsPagePosters.vue";
import Cart from "../views/CartPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
    {
      path: "/products/flyers",
      name: "flyers",
      component: ProductsFlyers,
    },
    {
      path: "/products/businesscards",
      name: "businesscards",
      component: ProductsBusinessCards,
    },
    {
      path: "/products/posters",
      name: "posters",
      component: ProductsPosters,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
  ],
});

export default router;
