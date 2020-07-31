import { VuexModule, Module, MutationAction, Mutation } from 'vuex-module-decorators'
import { fetchCategories, fetchNames } from '../api'
import { PokeType } from '../model'

@Module({
  namespaced: true,
  name: 'categoiesModule'
})

export default class CategoriesModule extends VuexModule {
  public categories: { data: { results: Array<PokeType> }} = { data: { results: [] }}
  public showNames = false
  public namesInType: object = {}

  @Mutation
  public toggleShowNames(): void {
    this.showNames = !this.showNames
  }

  @MutationAction({ mutate: ['categories'] })
  public async loadCategories() {
    const categories = await fetchCategories()
    return { categories }
  }

  @MutationAction({ mutate: ['namesInType'] })
  public async loadNames(url: string) {
    const namesInType = await fetchNames(url)
    return { namesInType }
  }
}