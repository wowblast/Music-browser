import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import MusicBrowser from '@/views/MusicBrowser.vue'

let wrapper

describe('MusicBrowser.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(MusicBrowser)
  })
  it('title has a title id', () => {
    return expect(wrapper.find('#title').exists()).to.be.true
  })
  it('title has correct string', () => {
    return expect(wrapper.vm.title).to.equal('Music Browser')
  })
  it('has a button id', () => {
    return expect(wrapper.find('#searchButton').exists()).to.be.true
  })
  it('textboxt is clear', () => {
    expect(wrapper.find('#inputMusic').text()).to.equal('')
  })
  it('music list is clear', () => {
    expect(wrapper.vm.musicList.length).to.equal(0)
  })
  it('music list is empty when click button with empty search', () => {
    const button = wrapper.find('#searchButton')
    button.trigger('click')

    expect(wrapper.vm.musicList.length).to.equal(0)
  })
})
