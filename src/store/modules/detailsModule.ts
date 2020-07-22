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
  public async loadDetails() {
    const details = await fetchDetails()
    // should return the same name... public pokemons
    return { details }
  }
}

export default DetailsModule