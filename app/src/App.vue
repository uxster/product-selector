<template>
  <div id="app">
    <div class="header">
      <img class="header__logo" src="./assets/logo.svg">

      <div class="header__nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#producten">Producten</a></li>
          <li><a href="#">Winkelwagen</a></li>
        </ul>
        <!-- <div>
          <router-link to="/">Home</router-link> |
          <router-link to="/products">Products</router-link> |
          <router-link to="/cart">Cart</router-link>
        </div> -->
      </div>
    </div>

    <Home />
  </div>
</template>

<script>
import Home from './views/Home.vue';

export default {
  name: 'App',
  components: { Home },
}
</script>

<style lang="scss">
  @import './styles/Typography';

  #app {
    font-family: 'Barlow', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 20px 20px 0 20px;
  } 

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 0 50px 0;

    &__logo {
      width: 50px;
      margin: 0 50px 0 0;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }
</style>
