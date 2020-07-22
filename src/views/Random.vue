<template>
  <div class="random">
    <RandomPokemon />
  </div>  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RandomPokemon from '@/components/RandomPokemon.vue'

@Component({
  components: {
    RandomPokemon
  }
})
export default class Random extends Vue {
  
}
</script>

<style lang="scss" scoped>

</style>