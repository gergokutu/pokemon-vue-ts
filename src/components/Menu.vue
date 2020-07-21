<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="info" fixed="top">
      <b-navbar-brand href="#" class="brand">
        Pokedex
        <img src="@/assets/poke_icon.png" alt="Picachu" class="logo">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/categories">Categories</b-nav-item>
          <b-nav-item to="/random">Random</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class Menu extends Vue {
  
}
</script>

<style lang="scss" scoped>
#nav a.router-link-exact-active {
    color: #ffffff;
}

.brand {
  cursor: default;
}

.logo {
  height: 30px;
  width: auto;
}

@media (min-width: 576px) { 
  #nav-collapse {
    position: absolute;
    right: 70px;
  }
}

.nav-link {
  text-align: start;
}
</style>