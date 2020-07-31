import { VuexModule, Module, MutationAction } from 'vuex-module-decorators'
import { randomPokemon } from '../api'
import { Detail } from '../model'

@Module({
  namespaced: true,
  name: 'randomModule'
})

class RandomModule extends VuexModule {
  public details: Detail = { data: { sprites: {  } }}

  @MutationAction({ mutate: ['details'] })
  public async loadRandom() {
    const details = await randomPokemon()
    return { details }
  }
}

export default RandomModule