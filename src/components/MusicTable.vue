<template>
  <div class="container" fluid id="tableContainer" name="tableContainer">
    <div class="row" id="tableRow">
      <div class="col my-1" sm="7" md="6">
        <b-pagination
          v-model="currentPage"
          v-bind:total-rows="getTotalRows"
          :per-page="5"
          align="fill"
          size="sm"
          class="my-0"
          id="pagination"
        ></b-pagination>
      </div>
    </div>

    <b-table
      small
      :items="this.musicData"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
    >
      <template v-slot:cell(trackTimeMillis)="row">{{getDuration(row.value) }}</template>
      <template v-slot:cell(artworkUrl100)="row">
        <img v-bind:src="row.value" class="img-fluid img-thumbnail" />
      </template>

      <template v-slot:cell(previewUrl)="row">
        <button
          type="button"
          class="mx-auto p-2 btn btn-success"
          v-on:click="playSong(row.value)"
          size="sm"
        >Play preview</button>
        <button
          type="button"
          class="btn btn-danger mx-auto p-2"
          v-on:click="stopSong()"
          size="sm"
        >Stop preview</button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'MusicTable',
  props: ['musicData'],
  data () {
    return {
      audio: undefined,
      items: [],
      fields: [
        {
          key: 'trackName',
          label: 'Song Name',
          sortable: true,
          sortDirection: 'desc'
        },
        {
          key: 'artistName',
          label: 'Artist Name',
          sortable: true,
          sortDirection: 'desc'
        },
        {
          key: 'trackPrice',
          label: 'Track Price USD',
          sortable: true,
          class: 'text-center'
        },
        {
          key: 'trackTimeMillis',
          label: 'Duration',
          class: 'text-center',
          sortable: true
        },

        { key: 'previewUrl', label: 'Actions' },
        {
          key: 'artworkUrl100',
          label: 'Image'
        }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],

      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: []
    }
  },
  computed: {
    getTotalRows () {
      return this.musicData !== undefined ? this.musicData.length : 0
    }
  },
  methods: {
    onFiltered (filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    playSong (url) {
      try {
        this.audio = new Audio(url)
        this.audio.play()
      } catch (error) {
        console.log(error)
      }
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
