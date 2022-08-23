<template>
  <div class="products-posters-page">
    <product-header :title="data.titlePlural" icon-url="./assets/posters.svg" />

    <properties-list :properties="data.properties"/>
  </div>
</template>

<script>
import data from '../data/posters.json';
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
