<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <PokeCard />
    <PokeCard />
    <PokeCard />
    <PokeCard />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PokeCard from '@/components/PokeCard.vue'

@Component({
  components: {
    PokeCard
  }
})
export default class Pokemons extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">

</style>
