<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="card-container" v-if="!showDetails">
      <PokeCard
        v-for="pokemon in pokemons.data.results"
        :key="pokemon.name"
        :name="pokemon.name"
        :url="pokemon.url"
      />
    </div>

    <div class="details-container" v-else>
      <Details />
      <b-button @click="toggleShowDetails" variant="info">Back</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PokeCard from '@/components/PokeCard.vue'
import { IPokeCard } from '@/store/model'
import Details from '@/components/Details.vue'

import { namespace } from 'vuex-class'
const pokesModule = namespace('pokesModule')

@Component({
  components: {
    PokeCard,
    Details
  }
})

export default class Pokemons extends Vue {
  @Prop() private msg!: string

  @pokesModule.State
  public pokemons!: Array<IPokeCard>

  @pokesModule.State
  public showDetails!: boolean

  @pokesModule.Action
  public loadPokemons!: () => void

  @pokesModule.Mutation
  public toggleShowDetails!: () => void

  created() {
    this.loadPokemons()
  }
}
</script>

<style scoped lang="scss">
.card-container {
  display: flex;
  flex-wrap: wrap;
  margin-right: 0px;
  margin-left: 15%;
  margin-top: 0;
  justify-content: center;
  width: 70%;
}

.hello > h1 {
  margin-top: 20px;
}
</style>
