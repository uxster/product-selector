<template>
  <div class="product-header">
    <img class="product-header__logo" :src="iconUrl">
    <h4 class="heading-4">{{ title }}</h4>
  </div>
</template>

<script>
export default {
  name: 'ProductHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    iconUrl: {
      type: String,
      required: true
    },
  }
}
</script>

<style lang="scss">
  .product-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    background:#ff0048;
    color: #fff;
    padding: 10px;

    &__logo {

    }
  }
</style>
