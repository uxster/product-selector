import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import Products from "../views/ProductsPage.vue";
import ProductsPageCategory from "../views/ProductsPageCategory.vue";
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
      path: "/products/:category",
      name: "product-category",
      component: ProductsPageCategory,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
  ],
});

export default router;
