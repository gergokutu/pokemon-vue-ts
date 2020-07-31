<template>
  <div class="poke-types" @click="showNames(url)">
    {{ name }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import { namespace } from 'vuex-class'
const categoriesModule = namespace('categoriesModule')
const pokesModule = namespace('pokesModule')

@Component
export default class PokeTypes extends Vue {
  @Prop() readonly name!: string
  @Prop() readonly url!: string

  @categoriesModule.Mutation
  public toggleShowNames!: () => void

  @categoriesModule.Action
  public loadNames!: (url: string) => void

  @pokesModule.Mutation
  public toggleShowDetails!: () => void

  private showNames(url: string): void {
    this.toggleShowNames()
    this.toggleShowDetails()
    this.loadNames(url)
  }
}
</script>

<style lang="scss" scoped>
.poke-types {
  margin: 0.5rem;
}

.poke-types:hover {
  font-weight: bold;
  color: green;
  cursor: pointer;
}
</style>