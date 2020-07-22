import { VuexModule, Module, MutationAction } from 'vuex-module-decorators'
import { fetchDetails } from '../api'
import { Detail } from '../model'

@Module({
  namespaced: true,
  name: 'pokesModule'
})

class DetailsModule extends VuexModule {
  public details: Detail = { data: {} }

  @MutationAction({ mutate: ['details'] })
  public async loadDetails(url: string) {
    const actualURL = url
    const details = await fetchDetails(actualURL)
    return { details }
  }
}

export default DetailsModule