<template>
  <div class="footer">
    <b-navbar type="dark" variant="info" fixed="bottom">
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/categories">Categories</b-nav-item>
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