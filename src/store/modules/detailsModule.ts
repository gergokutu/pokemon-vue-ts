import { VuexModule, Module, MutationAction } from 'vuex-module-decorators'
import { fetchDetails, fetchName } from '../api'
import { Detail } from '../model'

@Module({
  namespaced: true,
  name: 'pokesModule'
})

class DetailsModule extends VuexModule {
  public details: Detail = { data: { sprites: {  }}}

  @MutationAction({ mutate: ['details'] })
  public async loadDetails(url: string) {
    const actualURL = url
    const details = await fetchDetails(actualURL)
    return { details }
  }

  @MutationAction({ mutate: ['details'] })
  public async loadName(url: string) {
    const actualURL = url
    const details = await fetchName(actualURL)
    return { details }
  }
}

export default DetailsModule