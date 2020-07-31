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
      <h1>Pokemons of '{{ namesInType.data.name }}' type ({{ namesInType.data.pokemon.length }})</h1>
     
      <div class="names-list" v-for="pokemon in namesInType.data.pokemon" :key="pokemon.name">
        {{ pokemon.pokemon.name }}
      </div>
      
      <div class="back-button">
        <b-button @click="toggleShowNames" variant="info" size="lg">Back</b-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PokeTypes from '@/components/PokeTypes.vue'

import { namespace } from 'vuex-class'
const categoriesModule = namespace('categoriesModule')

import { PokeType } from '@/store/model'

@Component({
  components: {
    PokeTypes
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
</style>