<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="card-container">
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PokeCard from "@/components/PokeCard.vue";

@Component({
  components: {
    PokeCard
  }
})
export default class Pokemons extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
.card-container {
  display: flex;
  flex-wrap: wrap;
  margin-right: 0px !important;
  margin-left: 15% !important;
  margin-top: 5% !important;
  justify-content: center !important;
  width: 70%;
}
</style>
