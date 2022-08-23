<template>
  <label class="radiobox">
    <input type="radiobutton" :checked="isChecked" @change="handleClick" />

    <span
      class="radiobox__check"
      :class="isChecked ? 'radiobox__check--checked' : ''"
    ></span>

    <span class="radiobox__label">
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  name: "RadioBox",
  props: {
    value: {
      required: true,
    },
    groupValue: {
      required: true,
    },
  },
  computed: {
    isChecked() {
      return this.value === this.groupValue;
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss">
.radiobox {
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  user-select: none;

  input {
    cursor: pointer;
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }

  &__check {
    border: 1px solid var(--white);
    box-sizing: border-box;
    height: 18px;
    width: 18px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
    }

    &--checked {
      &::after {
        background: red;
        width: 10px;
        height: 10px;
        left: 18%;
        top: 18%;
      }
    }
  }

  &__label {
    margin-left: 5px;
  }
}
</style>
