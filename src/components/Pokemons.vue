<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Pokemons extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">

</style>