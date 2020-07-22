import { VuexModule, Module, MutationAction, Mutation } from 'vuex-module-decorators'
import { IPokeCard } from '../model'
import { fetchPokemons, fetchDetails } from '../api'

@Module({
  namespaced: true,
  name: 'pokesModule'
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
  public details = {}
  public showDetails = false

  @Mutation
  public toggleShowDetails(): void {
    console.log('TOGGLED')
    this.showDetails = !this.showDetails
  }

  // should return the same name... public pokemons
  @MutationAction({ mutate: ['pokemons', 'details'] })
  public async loadPokemons() {
    const pokemons = await fetchPokemons()
    const details = await fetchDetails()
    // should return the same name... public pokemons
    return { pokemons, details }
  }
}

export default PokesModule