<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="header">
    <img class="header__logo" alt="Print.com logo" src="./assets/logo.svg" />

    <nav class="header__nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/products">Producten</RouterLink>
      <RouterLink to="/cart">Winkelwagen</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style lang="scss" global>
@import "./assets/main.css";
@import "./assets/styles/typography.scss";

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 50px 0;

  &__logo {
    width: 50px;
    margin: 0 50px 0 0;
  }

  &__nav {
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;

    a {
      display: inline-block;
      padding: 0 1rem;
      border-left: 1px solid var(--divider-light);
    }
  }
}

// @media (min-width: 1024px) {
//   header {
//     display: flex;
//     place-items: center;
//     padding-right: calc(var(--section-gap) / 2);
//   }

//   .logo {
//     margin: 0 2rem 0 0;
//   }

//   header .wrapper {
//     display: flex;
//     place-items: flex-start;
//     flex-wrap: wrap;
//   }

//   nav {
//     text-align: left;
//     margin-left: -1rem;
//     font-size: 1rem;

//     padding: 1rem 0;
//     margin-top: 1rem;
//   }
// }
</style>
