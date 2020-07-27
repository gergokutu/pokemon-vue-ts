import { VuexModule, Module, MutationAction } from 'vuex-module-decorators'
import { fetchCategories } from '../api'
import { PokeType } from '../model'

@Module({
  namespaced: true,
  name: 'categoiesModule'
})

export default class CategoriesModule extends VuexModule {
  public categories: { data: { results: Array<PokeType> }} = { data: { results: [] }}

  @MutationAction({ mutate: ['categories'] })
  public async loadCategories() {
    const categories = await fetchCategories()
    return { categories }
  }
}