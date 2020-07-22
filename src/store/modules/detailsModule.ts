import { VuexModule, Module, MutationAction } from 'vuex-module-decorators'
import { fetchDetails } from '../api'

@Module({
  namespaced: true,
  name: 'pokesModule'
})

class DetailsModule extends VuexModule {
  public details = {}

  // should return the same name... public pokemons
  @MutationAction({ mutate: ['details'] })
  public async loadDetails(url: string) {
    const actualURL = url
    const details = await fetchDetails(actualURL)
    // should return the same name... public pokemons
    return { details }
  }
}

export default DetailsModule