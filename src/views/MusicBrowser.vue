<template>
  <div class="container">
    <div>
      <h1 class="text-center">{{title}}</h1>
    </div>
    <div class="d-flex justify-content-center align-items-center container">
      <div class="row">
        <form action>
          <div class="form-group">
            <label for="inputMusic" class="control-label">Enter music name</label>
            <input class="form-control" id="inputMusic" v-model="searchInput" />
          </div>
          <button type="button" class="btn btn-primary" v-on:click="search()">Search</button>
        </form>
      </div>
    </div>
    <MusicTable v-bind:musicData="this.musicList"></MusicTable>
    <div class="row">
      <div v-for="(music, index) in this.musicList" :key="index">
        <div class="col">
          <MusicCard v-bind:musicData="music"></MusicCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MusicCard from '../components/MusicCard.vue'
import MusicTable from '../components/MusicTable.vue'

import axios from 'axios'
import config from '../config.json'

export default {
  data () {
    return {
      title: 'Music  Browser',
      musicList: [],
      searchInput: ''
    }
  },
  components: {
    MusicTable,
    MusicCard
  },
  methods: {
    search () {
      var searchData = this.searchInput.replace(' ', '+')
      this.searchInput = ''
      axios.get(config.iTuneHttpLink + searchData).then(result => {
        this.musicList = result.data.results
      })
    }
  }
}
</script>
