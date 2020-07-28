<template>
  <div class="card">
    <b-col>
      <b-card
        img-height="175px"
        img-src="@/assets/poke_card.png"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 10rem;"
        class="mb-2 border border-info"
      >
        <b-card-text>{{ name.toUpperCase() }}</b-card-text>

        <b-button
          class="detail-button"
          href="#"
          variant="info"
          @click="showDetails(url)"
        >
          Details
        </b-button>
      </b-card>
    </b-col>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import { namespace } from 'vuex-class'
const pokesModule = namespace('pokesModule')
const detailsModule = namespace('detailsModule')

@Component
export default class PokeCard extends Vue {
  @Prop({ default: 'Pokemon' }) readonly name!: string;
  @Prop({ default: 'No URL Ensured' }) readonly url!: string;

  @pokesModule.Mutation
  public toggleShowDetails!: () => void

  private showDetails(url: string): void {
    console.log('Show details:', url)
    this.toggleShowDetails()
    this.loadDetails(url)
  }

  @detailsModule.State
  public details!: object

  @detailsModule.Action
  public loadDetails!: (url: string) => void
}
</script>

<style lang="scss" scoped>
.card {
  border: none;
  margin: 10px 0;
  font-weight: bold;
}
.detail-button {
  background: #0b90a5;
}
</style>