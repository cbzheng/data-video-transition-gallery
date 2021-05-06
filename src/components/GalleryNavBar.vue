<template>
<div>
  <b-navbar type="dark" variant="info" id="navbar">
      <b-navbar-brand href="#">Transitions in Data Videos</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item href="#">Home</b-nav-item>
      <b-nav-item href="#">Dataset</b-nav-item>
      <b-nav-item href="#">Download</b-nav-item>
      <b-nav-item href="#">About</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</div>    
</template>

<script>
export default {
    name: "GalleryNavBar"
}
</script>

<style scoped>
#navbar {
    box-shadow: 3px 3px 10px #aaaaaa;
    z-index: 500
}
</style>
