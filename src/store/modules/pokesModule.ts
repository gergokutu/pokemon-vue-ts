import { VuexModule, Module, getModule, MutationAction } from 'vuex-module-decorators'
import { IPokeCard } from '../model'
import { fetchPokemons } from '../api'
import store from '@/store'

@Module({
  namespaced: true,
  name: 'pokesModule',
  store
})

class PokesModule extends VuexModule {
  public pokemons: Array<IPokeCard> = [
    // {
    //   name: "unown1",
    //   url: "https://pokeapi.co/api/v2/pokemon/201/"
    // },
    // {
    //   name: "wobbuffet",
    //   url: "https://pokeapi.co/api/v2/pokemon/202/"
    // },
    // {
    //   name: "unown2",
    //   url: "https://pokeapi.co/api/v2/pokemon/201/"
    // },
    // {
    //   name: "unown3",
    //   url: "https://pokeapi.co/api/v2/pokemon/201/"
    // },
    // {
    //   name: "unown4",
    //   url: "https://pokeapi.co/api/v2/pokemon/201/"
    // },
    // {
    //   name: "unown5",
    //   url: "https://pokeapi.co/api/v2/pokemon/201/"
    // },
    // {
    //   name: "unown6",
    //   url: "https://pokeapi.co/api/v2/pokemon/201/"
    // },
    // {
    //   name: "unown7",
    //   url: "https://pokeapi.co/api/v2/pokemon/201/"
    // },
    // {
    //   name: "unown8",
    //   url: "https://pokeapi.co/api/v2/pokemon/201/"
    // },
    // {
    //   name: "unown9",
    //   url: "https://pokeapi.co/api/v2/pokemon/201/"
    // }
  ]

  @MutationAction({ mutate: ['pokemons'] })
  async loadPokemons() {
    const pokemons = await fetchPokemons()
    return { pokemons }
  }
}

export default getModule(PokesModule)