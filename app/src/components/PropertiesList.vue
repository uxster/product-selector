<template>
  <div>
    <h4 class="heading-4 heading-4--uppercase">Productopties:</h4>

    <ul class="properties-list">
      <li class="properties-list__item" v-for="(property, index) in properties" :key="index">
        <div class="properties-list__text">
          <h4 class="heading-4">{{ property.title }}</h4>
        </div>

        <ul class="properties-list__options">
          <properties-list-option
            v-for="(option, index) in property.options"
            :key="index"
            :option="option"
          />
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import PropertiesListOption from './PropertiesListOption.vue'

export default {
  name: 'PropertiesList',
  components: { PropertiesListOption },
  props: {
    properties: {
      type: Array,
      required: true
    },
  },
  data () {
    return {
      listOpen: false,
    }
  },
  // methods: {
  //   toggleList() {
  //     this.listOpen = !this.listOpen;
  //   },
  // },
}
</script>

<style lang="scss">
  .properties-list {
    display: flex;
    flex-direction: column;

    &__item {
      display: flex;
      flex-direction: row;
      margin: 0 10px 20px 0;
    }

    &__text {
      width: 30%;
    }

    &__options {
      width: 100%;
    }
  }
</style>
