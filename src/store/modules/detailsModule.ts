import { VuexModule, Module } from 'vuex-module-decorators'

@Module({
  namespaced: true,
  name: 'pokesModule'
})

class DetailsModule extends VuexModule {
  public details = {}
}

export default DetailsModule