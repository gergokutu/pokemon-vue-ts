<template>
  <div class="home">
    <Pokemons msg="Choose a Pokemon"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Pokemons from '@/components/Pokemons.vue'

@Component({
  components: {
    Pokemons
  }
})
export default class Home extends Vue {
  
}
</script>
