<template>
  <div class="products-flyers-page">
    <product-header :title="data.titlePlural" icon-url="./assets/flyers.svg" />

    <properties-list :properties="data.properties"/>
  </div>
</template>

<script>
import data from '../data/flyers.json';
import PropertiesList from '../components/PropertiesList.vue'
import ProductHeader from '../components/ProductHeader.vue'

export default {
  name: 'ProductsBusinessCards',
  components: { PropertiesList, ProductHeader },
  data () {
    return {
      data
    }
  },
}
</script>

<style lang="scss">
</style>
