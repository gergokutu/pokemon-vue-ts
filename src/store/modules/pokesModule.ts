import axios from 'axios'
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { IPokeCard } from './model'

@Module({ namespaced: true, name: 'pokesModule' })
class PokesModule extends VuexModule {
  public pokemons: Array<IPokeCard> = [
    {
      name: "unown1",
      url: "https://pokeapi.co/api/v2/pokemon/201/"
    },
    {
      name: "wobbuffet",
      url: "https://pokeapi.co/api/v2/pokemon/202/"
    },
    {
      name: "unown2",
      url: "https://pokeapi.co/api/v2/pokemon/201/"
    },
    {
      name: "unown3",
      url: "https://pokeapi.co/api/v2/pokemon/201/"
    },
    {
      name: "unown4",
      url: "https://pokeapi.co/api/v2/pokemon/201/"
    },
    {
      name: "unown5",
      url: "https://pokeapi.co/api/v2/pokemon/201/"
    },
    {
      name: "unown6",
      url: "https://pokeapi.co/api/v2/pokemon/201/"
    },
    {
      name: "unown7",
      url: "https://pokeapi.co/api/v2/pokemon/201/"
    },
    {
      name: "unown8",
      url: "https://pokeapi.co/api/v2/pokemon/201/"
    },
    {
      name: "unown9",
      url: "https://pokeapi.co/api/v2/pokemon/201/"
    }
  ]
}

export default PokesModule