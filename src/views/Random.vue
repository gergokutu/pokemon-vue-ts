<template>
<div class="about">
  <h1>Random Pokemon</h1>
  <div class="random-container">
    <b-card
      :img-src="details.data.sprites.front_default"
      img-alt="Image"
      img-top
      tag="article"
      style="min-width: 15rem;"
      class="mb-2"
    >
      <b-card-text>
        <p class="name">Name: {{ details.data.name }}</p>
        <p>Base experience: {{ details.data.base_experience }}</p>
        <p>Weight: {{ details.data.weight }}</p>
        <p>Height: {{ details.data.height }}</p>
      </b-card-text>
    </b-card>
  </div>
  <div class="back-button">
      <b-button @click="refresh" variant="info">Back</b-button>
    </div>
</div>
  
  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Details from '@/components/Details.vue'
import { Detail } from '@/store/model'

import { namespace } from 'vuex-class'
const pokesModule = namespace('pokesModule')
const detailsModule = namespace('detailsModule')
const randomModule = namespace('randomModule')

@Component({
  components: {
    Details
  }
})
export default class Random extends Vue {
  @randomModule.State
  public details!: Detail

  @randomModule.Action
  public loadRandom!: () => void

  created() {
    this.loadRandom()
  }
}
</script>

<style lang="scss" scoped>
.random-container {
  display: flex;
  flex-wrap: wrap;
  margin-right: 0px;
  margin-left: 15%;
  margin-top: 5%;
  justify-content: center;
  width: 70%;
}

.back-button {
  margin-top: 10px;
}
</style>