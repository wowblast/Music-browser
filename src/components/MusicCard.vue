<template>
  <div>
    <b-card
      v-bind:title="this.musicData.trackName"
      v-bind:img-src="this.musicData.artworkUrl100"
      img-top
      tag="article"
      style="max-width: 15rem;"
      class="mb-1"
    >
      <b-card-text>Artist Name: {{this.musicData.artistName}}</b-card-text>
      <b-card-text>Album Name: {{this.musicData.collectionName}}</b-card-text>
      <b-card-text>trackPrice: {{this.musicData.trackPrice}}</b-card-text>
      <b-card-text>Duration: {{ this.getDuration(this.musicData.trackTimeMillis)}}</b-card-text>
      <div class="row">
        <button
          type="button"
          class="mx-auto p-2 btn btn-success"
          v-on:click="playSong()"
        >Play preview</button>
        <button
          type="button"
          class="btn btn-danger mx-auto p-2"
          v-on:click="stopSong()"
        >Stop preview</button>
      </div>
    </b-card>
    <div></div>
  </div>
</template>
<script>
export default {
  name: 'MusicCard',
  props: {
    musicData: {
      default: { trackName: '', artworkUrl100: '', artistName: '', collectionName: '', trackPrice: '', trackTimeMillis: '' }
    }
  },
  data () {
    return {
      audio: ''
    }
  },
  methods: {
    playSong () {
      this.audio = new Audio(this.musicData.previewUrl)
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
  }
}

</script>
