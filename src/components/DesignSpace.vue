<template>
  <b-container fluid id="designspace-container">
    <b-row>
      <b-col cols="2" id="ds-sidebar">
        <DesignSpaceSideBar :onGalleryChange="changeGalleryOrganization"/>
      </b-col>
      <b-col id="gallery">
        <component :is="galleryComponent" id="gallery-component"></component>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import DesignSpaceSideBar from "./DesignSpaceSideBar.vue";
import DesignSpaceGallery from "./DesignSpaceGallery.vue";
import DesignSpaceDOGallery from "./DesignSpaceDOGallery.vue";

export default {
  name: "DesignSpace",
  components: {
    DesignSpaceSideBar,
    DesignSpaceGallery,
    DesignSpaceDOGallery,
  },
  data: function () {
    return {
      galleryComponent: String,
    };
  },
  computed: {},

  beforeMount: async function () {
    this.$store.dispatch("fetchDesignSpace");
    console.log(this.$store);
    this.galleryComponent = DesignSpaceGallery;
  },
  methods: {
    changeGalleryOrganization: function (indexDimension) {
      switch (indexDimension) {
        case "NarrativeRelationship":
          this.galleryComponent = DesignSpaceGallery
          break;
        case "DataOperation":
          this.galleryComponent = DesignSpaceDOGallery
          break;
        case "TransitionEffect":
          break;
        default:
          break;
      }
    },
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

#gallery-component {
  transition: 0.5s;
  margin-bottom: 7vh;
}
</style>