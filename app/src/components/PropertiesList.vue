<template>
  <div>
    <ul class="properties-list">
      <li
        class="properties-list__item"
        v-for="(property, index) in properties"
        :key="index"
      >
        <div class="properties-list__text">
          <h4 class="heading-4">{{ property.title }}</h4>
        </div>

        <ul class="properties-list__options">
          <li
            class="properties-list__option"
            v-for="(option, index) in property.options"
            :key="`option-${index}`"
          >
            <Checkbox>
              {{ option.name }}
            </Checkbox>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import Checkbox from "./Checkbox.vue";

export default {
  name: "PropertiesList",
  components: { Checkbox },
  props: {
    properties: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      listOpen: false,
    };
  },
};
</script>

<style lang="scss">
.properties-list {
  display: flex;
  flex-direction: column;

  &__item {
    display: flex;
    flex-direction: row;
    margin: 0 10px 20px 0;
    padding: 0 0 20px 0;
    border-bottom: 1px solid var(--white);
  }

  &__text {
    width: 30%;
  }

  &__options {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &__option {
    margin: 0 10px;
  }
}
</style>
