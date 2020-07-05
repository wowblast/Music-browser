<template>
  <div id="app" class="container ">

    <MusicBrowser></MusicBrowser>

  </div>
</template>

<script>
import MusicBrowser from './views/MusicBrowser.vue'

export default {
  name: 'App',
  components: {
    MusicBrowser
  }
}
</script>
