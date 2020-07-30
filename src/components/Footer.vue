<template>
  <div class="footer">
    <b-navbar type="dark" variant="info" fixed="bottom">
      <b-navbar-nav>
        <b-nav-item to="/">Pokemons</b-nav-item>
        <b-nav-item to="/categories">PokeTypes</b-nav-item>
        <b-nav-item to="/random">Random</b-nav-item>
      </b-navbar-nav>

      <div class="copyright">
        &copy; Copyright gergokutu, 2020
      </div>
    </b-navbar>
  </div>
</template>

<style lang="scss" scoped>
  .navbar {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 576px) {
    .navbar {
      justify-content: center;
    }
  } 

  a.nav-link {
    text-decoration: underline;
  }

  a.nav-link:hover {
    opacity: 0.7;
  }

  a.nav-link.router-link-exact-active.router-link-active {
    color: #ffffff;
    opacity: 0.5;
  }

  .copyright {
    color: #ffffff;
    opacity: 0.5;
  }
</style>