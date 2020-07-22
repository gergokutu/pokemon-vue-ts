<template>
  <div>
    <b-card
      :img-src="details.data.sprites.front_default"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        <p>Name: {{ details.data.name }}</p>
        <p>Base experience: {{ details.data.base_experience }}</p>
        <p>Weight: {{ details.data.weight }}</p>
        <p>Height: {{ details.data.height }}</p>
      </b-card-text>
    </b-card>

    <div>
      <b-button @click="toggle" variant="info">Back</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Detail } from '@/store/model'

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
  // public details!: object
  public details!: Detail
}
</script>

<style lang="scss" scoped>
</style>