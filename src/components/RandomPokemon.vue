<template>
  <div class="about" @click="loadRandom">
    <div class="random-container">
      <b-card
        :img-src="details.data.sprites.front_default"
        img-alt="Image"
        img-top
        tag="article"
        style="min-width: 10rem;"
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

    <div class="next-button">
      Click for the next one!!!
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Details from '@/components/Details.vue'
import { Detail } from '@/store/model'

import { namespace } from 'vuex-class'
const randomModule = namespace('randomModule')

@Component({
  components: {
    Details
  }
})

export default class RandomPokemon extends Vue {
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

.random-container:hover {
  color: green;
  cursor: pointer;
}

.next-button {
  margin-top: 10px;
  font-size: 1.5rem;
}

.next-button:hover {
  color: green;
  cursor: pointer;
}

.name {
  font-weight: bold;
  font-size: 1.5rem;
}
</style>