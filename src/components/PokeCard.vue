<template>
  <div class="card">
    <b-col>
      <b-card
        img-src="@/assets/poke_card.png"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 10rem;"
        class="mb-2"
      >
        <b-card-text>{{ name }}</b-card-text>

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

@Component
export default class PokeCard extends Vue {
  @Prop({ default: 'Pokemon' }) readonly name!: string;
  @Prop({ default: 'No URL Ensured' }) readonly url!: string;

  @pokesModule.Mutation
  public toggleShowDetails!: () => void

  private showDetails(url: string): void {
    console.log('Show details:', url)
    this.toggleShowDetails()
  }
}
</script>

<style lang="scss" scoped>
.card {
  border: none;
  margin: 10px 0;
}
.detail-button {
  background: #0b90a5;
}
</style>