<template>
  <label class="checkbox">
    <input type="checkbox" :checked="checked" @change="handleClick" />

    <span class="checkbox__check"></span>

    <span class="checkbox__label">
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  data() {
    return {
      checked: false,
    }
  },
   methods: {
    handleClick() {
      this.checked = !this.checked
    }
  }
}
</script>

<style lang="scss">
  .checkbox {
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    flex-direction: row;
    position: relative;
    user-select: none;
    vertical-align: top;

    input {
      cursor: pointer;
      height: 0;
      opacity: 0;
      position: absolute;
      width: 0;

      &:checked ~ .vue-chk__check::after {
        opacity: 1;
      }
    }

    &__check {
      border: 1px solid var(--border-color);
      box-sizing: border-box;
      height: var(--chk-size);
      order: 1;
      position: relative;
      width: var(--chk-size);
      &::after {
        border: solid var(--input-checked-color);
        border-width: 0 3px 3px 0;
        content: '';
        height: 10px;
        left: 50%;
        opacity: 0;
        position: absolute;
        top: 50%;
        transform: rotate(45deg) translate(-50%, -50%);
        transform-origin: left top;
        transition: opacity 0.08s;
        width: 4px;
      }
    }

    &__label {
      margin-left: 5px;
      order: 2;
    }
  }
</style>
