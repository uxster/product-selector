<template>
  <div class="product-header">
    <h2 class="heading-2 heading-4--bold">{{ title }} - Productopties</h2>
  </div>
</template>

<script>
export default {
  name: "ProductHeader",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.product-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--red);
  color: var(--white);
  padding: 10px;
  margin: 20px 0;
}
</style>
