<template>
  <div id="app">
    <GalleryNavBar />
    <DesignSpace id="design-space-gallery" />
  </div>
</template>

<script>
import GalleryNavBar from './components/GalleryNavBar.vue'
import DesignSpace from './components/DesignSpace.vue'

export default {
  name: 'App',
  components: {
    GalleryNavBar,
    DesignSpace
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#design-space-gallery {
  position: fixed
}
</style>
