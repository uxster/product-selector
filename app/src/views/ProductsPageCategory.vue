<template>
  <div class="products-businesscards-page">
    <RouterLink to="/products">&lt; Terug</RouterLink>

    <ProductHeader :title="data.titlePlural" v-if="data" />

    <PropertiesList :properties="data.properties" v-if="data" />
  </div>
</template>

<script>
import businessCardsData from "../data/businesscards.json";
import flyersData from "../data/flyers.json";
import postersData from "../data/posters.json";
import PropertiesList from "../components/PropertiesList.vue";
import ProductHeader from "../components/ProductHeader.vue";
import { RouterLink } from "vue-router";

export default {
  name: "ProductsPageCategory",
  components: { PropertiesList, ProductHeader, RouterLink },
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.data = {
      flyers: flyersData,
      posters: postersData,
      businesscards: businessCardsData,
    }[this.$route.params.category];
  },
};
</script>

<style lang="scss"></style>
