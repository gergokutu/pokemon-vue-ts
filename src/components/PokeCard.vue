<template>
  <div class="card">
    <!-- <h1>Inside Pokemon component > Card...</h1> -->
    <b-col>
      <b-card
        title="Card Title"
        img-src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        img-alt="Image"
        img-top
        tag="article"
        style="min-width: 12rem;"
        class="mb-2"
      >
        <b-card-text>{{ name }}</b-card-text>

        <b-button
          class="detail-button"
          href="#"
          variant="info"
          @click="showDetails"
        >
          Details
        </b-button>
      </b-card>
    </b-col>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PokeCard extends Vue {
  @Prop({default: 'John doe'}) readonly name!: string
  private showDetails(): void {
    console.log('Show details')
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