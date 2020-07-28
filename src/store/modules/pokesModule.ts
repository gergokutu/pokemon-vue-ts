import { VuexModule, Module, MutationAction, Mutation } from 'vuex-module-decorators'
import { IPokeCard } from '../model'
import { fetchPokemons } from '../api'

@Module({
  namespaced: true,
  name: 'pokesModule'
})

class PokesModule extends VuexModule {
  public pokemons: { data: { results: Array<IPokeCard> }} = { data: { results: [] }}
  
  public showDetails = false

  @Mutation
  public toggleShowDetails(): void {
    this.showDetails = !this.showDetails
  }

  @MutationAction({ mutate: ['pokemons'] })
  public async loadPokemons(url: string) {
    const pokemons = await fetchPokemons(url)
    return { pokemons }
  }
}

export default PokesModule