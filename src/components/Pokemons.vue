<template>
  <div class="hello">
    <h2 v-if="!showDetails">{{ msg }}</h2>
    <div v-show="!showDetails">
      <b-button @click="sortPokes" variant="warning">
        Sort Pokemons (A-Z)
      </b-button>
    </div>

    <div class="card-container" v-if="!showDetails && !sorted">
      <PokeCard
        v-for="pokemon in pokemons.data.results"
        :key="pokemon.name"
        :name="pokemon.name"
        :url="pokemon.url"
      />
    </div>

    <div class="card-container" v-else-if="!showDetails && sorted">
      <PokeCard
        v-for="pokemon in sortedPokemons"
        :key="pokemon.name"
        :name="pokemon.name"
        :url="pokemon.url"
      />
    </div>

    <div class="details-container" v-else>
      <Details />
    </div>

    <div class="nav-buttons-container" v-show="!showDetails">
      <div class="nav-button">
        <b-button size="lg">Prev</b-button>
      </div>
      <div class="nav-button">
        <b-button size="lg" @click="sortFalse(); loadPokemons(pokemons.data.next)">Next</b-button>
      </div>
      
      
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

  public sortedPokemons: Array<IPokeCard> = []
  public sorted = false
  public sortFalse() {
    this.sorted = false
    // const array = [...this.pokemons.data.results]
    // this.sortedPokemons = array.sort((a: IPokeCard, b: IPokeCard) => a.name.localeCompare(b.name))
  }

  public sortPokes() {
    this.sorted = !this.sorted
    const array = [...this.pokemons.data.results]
    this.sortedPokemons = array.sort((a: IPokeCard, b: IPokeCard) => a.name.localeCompare(b.name))
  }

  @pokesModule.State
  public pokemons!: { data: { results: Array<IPokeCard> }}

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

.details-container {
  display: flex;
  flex-wrap: wrap;
  margin-right: 0;
  margin-left: 15%;
  margin-top: 5%;
  justify-content: center;
  width: 70%;
}

.hello > h1 {
  margin-top: 20px;
}

.nav-buttons-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
</style>
