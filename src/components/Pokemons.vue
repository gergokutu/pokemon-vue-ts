<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="card-container">
      <PokeCard
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        :name="pokemon.name"
        :url="pokemon.url"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PokeCard from '@/components/PokeCard.vue';
import { namespace } from 'vuex-class'

const pokemons = namespace('pokemons')

interface Card {
  name: string;
  url: string;
}

@Component({
  components: {
    PokeCard
  }
})

export default class Pokemons extends Vue {
  @Prop() private msg!: string;

  @pokemons.State
  public pokemons!: Array<Card>
}
</script>

<style scoped lang="scss">
.card-container {
  display: flex;
  flex-wrap: wrap;
  margin-right: 0px;
  margin-left: 15%;
  margin-top: 5%;
  justify-content: center;
  width: 70%;
}
</style>
