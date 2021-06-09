import Vue from 'vue'
import Vuetify from 'vuetify'
import Index from '@/pages/index.vue'

Vue.use(Vuetify)

describe('Index Page', () => {
  test('is a Vue instance', () => {
    const cmp = new Vue(Index).$mount()
    expect(cmp._isVue).toBeTruthy()
  })
})
