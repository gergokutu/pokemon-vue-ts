<template>
  <div id="app">
    <div id="nav">
      <Menu />
    </div>

    <router-view/>

    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'

@Component({
  components: {
    Menu,
    Footer
  }
})
export default class App extends Vue {
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#footer {
  margin-top: 200px;
}
</style>
