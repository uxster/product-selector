<template>
  <div class="products-flyers-page">
    <RouterLink to="/products">&lt; Terug</RouterLink>

    <ProductHeader :title="data.titlePlural" />

    <PropertiesList :properties="data.properties" />
  </div>
</template>

<script>
import data from "../data/flyers.json";
import PropertiesList from "../components/PropertiesList.vue";
import ProductHeader from "../components/ProductHeader.vue";
import { RouterLink } from "vue-router";

export default {
  name: "ProductsFlyers",
  components: { PropertiesList, ProductHeader, RouterLink },
  data() {
    return {
      data,
    };
  },
};
</script>

<style lang="scss"></style>
