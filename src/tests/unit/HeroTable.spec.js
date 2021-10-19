import { shallowMount } from '@vue/test-utils'
import HerosTable from '@/components/HerosTable.vue'
import axios from 'axios'


describe('HerosTable.vue Test', () => {
  it('heros loaded when component is rendered', () => {
    const wrapper = shallowMount(HerosTable)

    // check the name of the component
    expect(wrapper.vm.$options.name).toMatch('HerosTable')

    // check if search input loaded
    expect(wrapper.find('.search-container').exists()).toBeTruthy()

    // check if heros are loaded
    expect(wrapper.find('.hero-row').exists()).toBeTruthy()

    // Set the mock call to GET to return a successful GET response
    axios.get.mockResolvedValue('https://api.opendota.com/api/heroStats')
  })
})