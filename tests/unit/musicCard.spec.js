import { expect } from 'chai'
import { shallowMount, config } from '@vue/test-utils'
import MusicCard from '@/components/MusicCard.vue'

config.silent = true
let wrapper

describe('MusicCard.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(MusicCard)
  })
  it('card exists', () => {
    return expect(wrapper.find('b-card').exists()).to.be.true
  })
  it('button play dont exist', () => {
    return expect(wrapper.find('#playButton').exists()).to.be.false
  })
  it('audio is empty', () => {
    return expect(wrapper.vm.audio).to.equal('')
  })
})
