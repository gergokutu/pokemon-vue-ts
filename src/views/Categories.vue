<template>
  <div class="categories">
    <h1 v-show="!showTypeDetails">Existing Pokemon types ({{ categories.data.results.length }})</h1>
    <PokeTypes
      v-for="type in categories.data.results"
      :name="type.name"
      :url="type.url"
      :key="type.name"
      v-show="!showTypeDetails"
      :toggleDetails="toggleDetails"
    />
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
  public showTypeDetails = false
  public toggleDetails() {
    this.showTypeDetails = !this.showTypeDetails
  }

  @categoriesModule.State
  public categories!: { data: { results: Array<PokeType> }}

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