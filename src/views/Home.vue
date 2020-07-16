<template>
  <div class="home">
    <Pokemons msg="10 Pokemons come here..."/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Pokemons from '@/components/Pokemons.vue';

@Component({
  components: {
    Pokemons
  }
})
export default class Home extends Vue {
  
}
</script>
