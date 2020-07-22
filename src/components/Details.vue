<template>
  <div>
    DETAILS COMPONENT... {{ details.data.name }}
    <div>
      <b-button @click="toggle" variant="info">Back</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import { namespace } from 'vuex-class'
const pokesModule = namespace('pokesModule')
const detailsModule = namespace('detailsModule')

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

  @detailsModule.State
  public details!: object
}
</script>

<style lang="scss" scoped>
</style>