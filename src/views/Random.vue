<template>
  <div class="about">
    <h1>This page shows a random pokemon...</h1>
    <PokeCard />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PokeCard from '@/components/PokeCard.vue'

import { namespace } from 'vuex-class'
const pokesModule = namespace('pokesModule')
const detailsModule = namespace('detailsModule')

@Component({
  components: {
    PokeCard
  }
})
export default class Random extends Vue {

}
</script>

<style lang="scss" scoped>

</style>