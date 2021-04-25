<template>
  <b-container fluid>
    <b-row>
      <b-col cols="3">
        <DesignSpaceSideBar />
      </b-col>
      <b-col id="gallery"> </b-col>
    </b-row>
  </b-container>
</template>

<script>
import DesignSpaceSideBar from "./DesignSpaceSideBar.vue";

export default {
  name: "DesignSpace",
  components: {
    DesignSpaceSideBar,
  },
};
</script>

<style scoped>
#gallery {
    height: 97vh;
    border-left: 1px solid #aaaaaa;
    background-color:aliceblue;
}
</style>