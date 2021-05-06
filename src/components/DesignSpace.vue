<template>
  <b-container fluid>
    <b-row>
      <b-col cols="3" id="ds-sidebar">
        <DesignSpaceSideBar  :NRCollection="NRCollection" :DOCollection="DOCollection" :ELCollection="ELCollection"/>
      </b-col>
      <b-col id="gallery">
          <DesignSpaceGallery :NRCollection="NRCollection"/>
    </b-col>
    </b-row>
  </b-container>
</template>

<script>
import DesignSpaceSideBar from "./DesignSpaceSideBar.vue";
import DesignSpaceGallery from "./DesignSpaceGallery.vue"
import { fetchDSDataOperations, fetchDSEditorialLayers, fetchDSNarrativeRelationships, fetchTransitionCards } from "../api";

export default {
  name: "DesignSpace",
  components: {
    DesignSpaceSideBar,
    DesignSpaceGallery
  },
  data: () => {
    return {
      NRCollection: [],
      DOCollection: [],
      ELCollection: [],
      TransitionCards: []
    };
  },
  beforeMount: async function() {
    this.NRCollection = await fetchDSNarrativeRelationships();
    this.DOCollection = await fetchDSDataOperations(); 
    this.ELCollection = await fetchDSEditorialLayers();
    this.TransitionCards = await fetchTransitionCards();
    this.$store.dispatch("fetchDesignSpace")
  },
};
</script>

<style scoped>
#gallery {
  height: 97vh;
  background-color: aliceblue;
  padding-right: 0px;
  padding-left: 0px;
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
    border-right: 1px solid #DEDEDE;
}
</style>