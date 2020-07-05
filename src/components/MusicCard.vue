<template>
  <div>
    <b-card
      v-bind:title="musicData.trackName"
      v-bind:img-src="this.musicData.artworkUrl100"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>Artist Name: {{this.musicData.artistName}}</b-card-text>
      <b-card-text>Album Name: {{this.musicData.collectionName}}</b-card-text>
      <b-card-text>trackPrice: {{this.musicData.trackPrice}}</b-card-text>
      <b-card-text>Duration: {{ this.getDuration(this.musicData.trackTimeMillis)}}</b-card-text>

      <b-button class="mx-1" href="#" variant="primary" v-on:click="playSong()">Play preview</b-button>
      <b-button class="mx-1" href="#" variant="primary" v-on:click="stopSong()">Stop preview</b-button>
    </b-card>
    <div></div>
  </div>
</template>
<script>
export default {
  name: 'MusicCard',
  props: ['musicData'],
  data () {
    return {
      audio: undefined
    }
  },
  methods: {
    playSong () {
      this.audio.play()
    },
    stopSong () {
      this.audio.pause()
    },
    getDuration (miliseconds) {
      var minutes = Math.floor(miliseconds / 60000)
      var seconds = ((miliseconds % 60000) / 1000).toFixed(0)
      return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
    }
  },
  mounted () {
    this.audio = new Audio(this.musicData.previewUrl)
  }
}
</script>
