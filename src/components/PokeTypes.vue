<template>
  <div class="poke-types">
    {{ name }} {{ url }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class PokeTypes extends Vue {
  @Prop() readonly name!: string
  @Prop() readonly url!: string
}
</script>

<style lang="scss" scoped>
.poke-types {
  font-weight: bold;
  margin: 10px;
}
</style>