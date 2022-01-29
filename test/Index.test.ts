/**
 * @jest-environment jsdom
 */
import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount } from '@vue/test-utils'
import Index from '../pages/history.vue'

Vue.use(Vuetify)

describe('Index Page', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Index)
    expect(wrapper.vm).toBeTruthy()
  })
})
