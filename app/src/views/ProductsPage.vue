<template>
  <div class="products-page">
    <div class="products-page__title">
      <h2 class="heading-2">Producten</h2>
    </div>

    <div class="products">
      <RouterLink to="/products/flyers">
        <div class="products__button">Flyers</div>
      </RouterLink>

      <RouterLink to="/products/businesscards">
        <div class="products__button">Visitekaartjes</div>
      </RouterLink>

      <RouterLink to="/products/posters">
        <div class="products__button">Posters</div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsPage",
};
</script>

<style lang="scss">
.products-page {
  &__title {
    margin: 0 0 20px 0;
  }
}

.products {
  width: 100%;
  display: flex;

  > * {
    margin: 0 20px 0 0;
  }

  &__button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    border: 1px solid var(--white);
    border-radius: 10px;
    height: 50px;

    svg {
      margin: 0 10px 0 0;
    }
  }
}
</style>
