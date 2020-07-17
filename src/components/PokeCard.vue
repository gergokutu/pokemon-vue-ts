<template>
  <div>
    <!-- <h1>Inside Pokemon component > Card...</h1> -->
    <!-- <div class="card"> -->
    <b-col>
      <b-card
        title="Card Title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>Picachu</b-card-text>

        <b-button href="#" variant="primary">Details</b-button>
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