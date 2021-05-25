<template>
  <b-container fluid>
    <b-row>
      <b-col cols="2" id="ds-sidebar">
        <DesignSpaceSideBar />
      </b-col>
      <b-col id="gallery">
        <DesignSpaceGallery />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import DesignSpaceSideBar from "./DesignSpaceSideBar.vue";
import DesignSpaceGallery from "./DesignSpaceGallery.vue";

export default {
  name: "DesignSpace",
  components: {
    DesignSpaceSideBar,
    DesignSpaceGallery,
  },
  computed: {},

  beforeMount: async function () {
    this.$store.dispatch("fetchDesignSpace");
    console.log(this.$store);
  },
};
</script>

<style scoped>
#gallery {
  height: 97vh;
  background-color: aliceblue;
  padding-right: 0px;
  padding-left: 0px;
  overflow-y: scroll;
}

#ds-sidebar {
  display: block !important;
  padding-bottom: 0;
  padding-right: 0px;
  position: sticky;
  top: 3.75rem;
  height: calc(100vh - 3.75rem);
  overflow-y: auto;
  box-shadow: none;
  border-right: 1px solid #dedede;
}
</style>