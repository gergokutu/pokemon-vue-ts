import Vue from 'vue'
import Vuex from 'vuex'
import pokesModule from '@/store/modules/pokesModule.ts'
import detailsModule from '@/store/modules/detailsModule.ts'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    pokesModule,
    detailsModule
  }
})
