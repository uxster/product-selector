<template>
  <div class="home-page">
    <div id="producten">
      <products-business-cards />
      <products-flyers />
      <products-posters />
    </div>
  </div>
</template>

<script>
import ProductsBusinessCards from '../views/ProductsBusinessCards.vue'
import ProductsFlyers from '../views/ProductsFlyers.vue'
import ProductsPosters from '../views/ProductsPosters.vue'

export default {
  components: { ProductsBusinessCards, ProductsPosters, ProductsFlyers },
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  .home-page {
    
  }
</style>
