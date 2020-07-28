<template>
  <div class="hello">
    <h1 v-if="!showDetails">{{ msg }}</h1>
    <div v-show="!showDetails">
      <b-form-checkbox
        id="checkbox-1"
        name="checkbox-1"
        value="sorted"
        unchecked-value="not_sorted"
        @change="toggleSort"
      >
        Sort Pokemons (A-Z)
      </b-form-checkbox>

      <div class="pagination">
        <b-button-group>
          <b-button>Button 1</b-button>
          <b-button>Button 2</b-button>
          <b-button>Button 3</b-button>
        </b-button-group>
    </div>
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
  public toggleSort() {
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
  margin-right: 0px;
  margin-left: 15%;
  margin-top: 5%;
  justify-content: center;
  width: 70%;
}

.hello > h1 {
  margin-top: 20px;
}
</style>
