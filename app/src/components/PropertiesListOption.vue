<template>
  <div>
    <li class="properties-list-option">
      <Checkbox>
        {{ option.name }}
      </Checkbox>
    </li>
  </div>
</template>

<script>
import Checkbox from "./Checkbox.vue"

export default {
  name: 'PropertiesListOption',
  components: { Checkbox },
  props: {
    option: {
      type: Object,
      required: true
    },
  }
}
</script>

<style lang="scss">
  .properties-list-option {
    display: inline-block;
    margin: 0 10px;

    &__text {

    }
  }
</style>
