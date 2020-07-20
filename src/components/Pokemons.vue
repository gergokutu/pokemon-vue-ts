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
import { Component, Prop, Vue } from 'vue-property-decorator'
import PokeCard from '@/components/PokeCard.vue'
import { IPokeCard } from '@/store/model'

import { namespace } from 'vuex-class'
const pokesModule = namespace('pokesModule')

@Component({
  components: {
    PokeCard
  }
})

export default class Pokemons extends Vue {
  @Prop() private msg!: string

  @pokesModule.State
  public pokemons!: Array<IPokeCard>
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
