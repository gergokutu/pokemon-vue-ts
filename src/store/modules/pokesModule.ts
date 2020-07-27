import { VuexModule, Module, MutationAction, Mutation } from 'vuex-module-decorators'
import { IPokeCard } from '../model'
import { fetchPokemons } from '../api'

@Module({
  namespaced: true,
  name: 'pokesModule'
})

class PokesModule extends VuexModule {
  // public pokemons: Array<IPokeCard> = [
    
  // ]
  public pokemons: { data: { results: Array<IPokeCard> }} = { data: { results: [] }}
  
  public showDetails = false
  // public sorted = false

  @Mutation
  public toggleShowDetails(): void {
    this.showDetails = !this.showDetails
  }

  @MutationAction({ mutate: ['pokemons'] })
  public async loadPokemons() {
    const pokemons = await fetchPokemons()
    return { pokemons }
  }
}

export default PokesModule