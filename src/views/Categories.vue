<template>
  <div class="categories">
    <div class="type-list" v-if="!showNames">
      <h1>Existing Pokemon types ({{ categories.data.results.length }})</h1>
      <PokeTypes
        v-for="type in categories.data.results"
        :name="type.name"
        :url="type.url"
        :key="type.name"
      />
    </div>
    
    <div class="names-container" v-else>
      <h1 v-show="!showDetails">Pokemons of '{{ namesInType.data.name }}' type ({{ namesInType.data.pokemon.length }})</h1>
     
      <div class="card-container">
        <PokeCard
          class="names-list"
          v-for="pokemon in namesInType.data.pokemon"
          :key="pokemon.name"
          :name="pokemon.pokemon.name"
          :url="pokemon.pokemon.url"
          v-show="!showDetails"
        />
      </div>

      <div class="details-container" v-show="showDetails">
        <Details />
      </div>

      <div class="back-button">
        <b-button
          @click="toggleShowNames"
          variant="info"
          size="lg"
          v-show="!showDetails"
        >
          Back to Types
        </b-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PokeTypes from '@/components/PokeTypes.vue'
import PokeCard from '@/components/PokeCard.vue'
import Details from '@/components/Details.vue'

import { namespace } from 'vuex-class'
const categoriesModule = namespace('categoriesModule')
const pokesModule = namespace('pokesModule')

import { PokeType } from '@/store/model'

@Component({
  components: {
    PokeTypes,
    PokeCard,
    Details
  }
})
export default class Categories extends Vue {
  @categoriesModule.State
  public categories!: { data: { results: Array<PokeType> }}

  @categoriesModule.State
  public namesInType!: object

  @categoriesModule.State
  public showNames!: boolean

  @categoriesModule.Mutation
  public toggleShowNames!: () => void

  @pokesModule.State
  public showDetails!: boolean

  @categoriesModule.Action
  public loadCategories!: () => void

  created() {
    this.loadCategories()
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 20px;
}

.back-button {
  margin-top: 20px;
}

.names-list {
  margin: 0.5rem;
}

// .names-list:hover {
//   font-weight: bold;
//   color: green;
//   cursor: pointer;
// }

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
</style>