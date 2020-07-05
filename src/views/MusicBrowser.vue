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
            <input class="form-control" id="inputMusic" />
          </div>
          <button type="button" class="btn btn-primary" v-on:click="search()">Search</button>
        </form>
      </div>
    </div>
    <div>

        <div v-for="(music, index) in this.musicList" :key="index" class="d-flex justify-content-center align-items-center container ">
 <MusicCard v-bind:musicData="music"></MusicCard>        </div>

    </div>

  </div>
</template>

<script>
import MusicCard from '../components/MusicCard.vue'
import axios from 'axios'

export default {
  data () {
    return {
      title: 'Music  Browser',
      musicList: [{ data: 'd' }]
    }
  },
  components: {
    MusicCard
  },
  methods: {
    search (inputMusic) {
      axios
        .get('https://itunes.apple.com/search?term=jack+johnson')
        .then(result => {
          console.log(result.data.results)
          this.musicList = result.data.results
        })
    }
  }
}
</script>
