import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import MusicTable from '@/components/MusicTable.vue'

let wrapper

describe('MusicTable.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(MusicTable, { props: { musicData: [] } })
  })
  it('pagination with id exists', () => {
    return expect(wrapper.find('#pagination').exists()).to.be.true
  })
  it('fields from table  must be 6', () => {
    return expect(wrapper.vm.fields.length).to.equal(6)
  })
  it('perpage must be 5', () => {
    expect(wrapper.vm.perPage).to.equal(5)
  })
})
