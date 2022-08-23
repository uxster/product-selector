<template>
  <label class="checkbox">
    <input type="checkbox" :checked="checked" @change="handleClick" />

    <span
      class="checkbox__check"
      :class="checked ? 'checkbox__check--checked' : ''"
    ></span>

    <span class="checkbox__label">
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  name: "CheckBox",
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    handleClick() {
      this.checked = !this.checked;
    },
  },
};
</script>

<style lang="scss">
.checkbox {
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
    border: 1px solid #eee;
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
        border: solid var(--red);
        border-width: 0 3px 3px 0;
        width: 4px;
        height: 10px;
        left: 50%;
        top: 50%;
        transform: rotate(45deg) translate(-50%, -50%);
        transform-origin: left top;
        transition: opacity 0.08s;
      }
    }
  }

  &__label {
    margin-left: 5px;
  }
}
</style>
