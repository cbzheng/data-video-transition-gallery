<template>
  <div id="app">
    <GalleryNavBar />
    <keep-alive>
      <component :is="pageComponent" id="main-body"></component>
    </keep-alive>
  </div>
</template>

<script>
import GalleryNavBar from "./components/GalleryNavBar.vue";
import DesignSpace from "./components/DesignSpace.vue";
import WorkshopDataset from './components/workshop/WorkshopDataset.vue'
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    GalleryNavBar,
    DesignSpace,
    WorkshopDataset
  },
  data: function () {
    return {
      pageComponent: String,
    };
  },
  computed: {
    ...mapState({
      currentPage: (state) => state.pageManager.currentPage,
    }),
  },
  watch: {
    currentPage(val) {
      switch (val) {
        case "home":
          this.pageComponent = "DesignSpace";
          break;
        case "workshop-dataset":
          this.pageComponent = "WorkshopDataset"
      }
    },
  },
  beforeMount: function () {
    this.pageComponent = "DesignSpace";
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#main-body {
  position: fixed;
}
</style>
