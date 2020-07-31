<template>
  <div class="poke-types" @click="toggleShowNames">
    {{ name }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import { namespace } from 'vuex-class'
const categoriesModule = namespace('categoriesModule')

@Component
export default class PokeTypes extends Vue {
  @Prop() readonly name!: string
  @Prop() readonly url!: string

  @categoriesModule.Mutation
  public toggleShowNames!: () => void
}
</script>

<style lang="scss" scoped>
.poke-types {
  font-weight: bold;
  margin: 10px;
}
</style>