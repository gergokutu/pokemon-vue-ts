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
      <h1>Pokemons of '{{ namesInType.data.name }}' type</h1>
      <div class="name-list" v-for="pokemon in namesInType.data.pokemon" :key="pokemon.name">
        {{ pokemon.pokemon.name }}
      </div>
      <b-button @click="toggleShowNames" variant="info">Back</b-button>
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
.categories > h1 {
  margin-top: 20px;
}
</style>