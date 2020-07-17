<template>
  <div>
    <!-- <h1>Inside Pokemon component > Card...</h1> -->
    <!-- <div class="card"> -->
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
        <b-card-text>Picachu</b-card-text>

        <b-button class="detail-button" href="#" variant="info">Details</b-button>
      </b-card>
    </b-col>
  </div>
  <!-- </div> -->
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class PokeCard extends Vue {}
</script>

<style lang="scss" scoped>
  .detail-button {
    background: #0b90a5;
  }
</style>