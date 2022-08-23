<template>
  <div>
    <ul class="properties-list">
      <li
        class="properties-list__item"
        v-for="property in properties"
        :key="property.slug"
      >
        <div class="properties-list__text">
          <h4 class="heading-4">{{ property.title }}</h4>
        </div>

        <ul class="properties-list__options">
          <li
            class="properties-list__option"
            v-for="option in property.options.filter((o) => o.name)"
            :key="option.slug"
          >
            <RadioBox
              :value="option.slug"
              :group-value="selectedProps[property.slug]"
              @click="selectedProps[property.slug] = option.slug"
            >
              {{ option.name }}
            </RadioBox>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import RadioBox from "./RadioBox.vue";

export default {
  name: "PropertiesList",
  components: { RadioBox },
  props: {
    properties: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedProps: {},
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
