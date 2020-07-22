<template>
  <div>
    DETAILS COMPONENT...
    <b-button @click="toggle" variant="info">Back</b-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import { namespace } from 'vuex-class'
const pokesModule = namespace('pokesModule')

@Component
export default class Details extends Vue {
  @pokesModule.State
  public showDetails!: boolean
  
  @pokesModule.Mutation
  public toggleShowDetails!: () => void

  private toggle(): void {
    console.log('TOGGLE 2')
    this.toggleShowDetails()
  }
}
</script>

<style lang="scss" scoped>
</style>