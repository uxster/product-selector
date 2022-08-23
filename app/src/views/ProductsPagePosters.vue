<template>
  <div class="products-posters-page">
    <RouterLink to="/products">&lt; Terug</RouterLink>

    <ProductHeader :title="data.titlePlural" />

    <PropertiesList :properties="data.properties" />
  </div>
</template>

<script>
import data from "../data/posters.json";
import PropertiesList from "../components/PropertiesList.vue";
import ProductHeader from "../components/ProductHeader.vue";
import { RouterLink } from "vue-router";

export default {
  name: "ProductsPosters",
  components: { PropertiesList, ProductHeader, RouterLink },
  data() {
    return {
      data,
    };
  },
};
</script>

<style lang="scss"></style>
