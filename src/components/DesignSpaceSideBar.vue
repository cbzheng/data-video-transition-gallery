<template>
  <div id="ds-sidebar">
    <div class="dimention search-bar-div">
      <b-nav-form>
        <b-form-input class="mr-sm-2 search-bar" placeholder="Search">
        </b-form-input>
      </b-nav-form>
    </div>
    <div id="n-relationship" class="dimention">
      <div
        class="dimension-header"
        :class="nrVisible ? null : 'collapsed'"
        :aria-expanded="nrVisible ? 'true' : 'false'"
        aria-controls="collapse-nr"
        @click="onClickNR()"
      >
        <span> Narrative Relationship </span>
        <span
          class="dimension-head-stop"
          :class="!nrVisible ? null : 'focused-stop'"
        ></span>
      </div>
      <b-collapse id="collapse-nr" v-model="nrVisible" class="mt-2">
        <div class="sidebar-panel-group">
          <a
            :href="'#' + NR.NR_tag"
            v-for="NR in NarrativeRelationships"
            :key="NR.NR_tag"
            class="sidebar-btn scrollSpy-btn default"
          >
            <span
              class="scrollSpy-btn-symbol"
              :style="{ backgroundColor: NR.NR_color }"
            ></span>
            <span
              class="scrollSpy-btn-text"
              v-b-toggle="'collapse' + NR.NR_tag"
              >{{ NR.NR_tag }}</span
            >
            <span class="scrollSpy-btn-stop"></span>
          </a>
        </div>
      </b-collapse>
    </div>
    <div id="data-operation" class="dimention">
      <div
        class="dimension-header"
        :class="doVisible ? null : 'collapsed'"
        :aria-expanded="doVisible ? 'true' : 'false'"
        aria-controls="collapse-nr"
        @click="onClickDO()"
      >
        <span>Data Operation</span>
        <span
          class="dimension-head-stop"
          :class="!doVisible ? null : 'focused-stop'"
        ></span>
      </div>
      <b-collapse id="collapse-nr" v-model="doVisible" class="mt-2">
        <div class="sidebar-panel-group">
          <div
            href="#"
            class="sidebar-btn scrollSpy-btn default"
            v-for="DO in DataOperations"
            :key="DO.DO_tag"
          >
            <img
              :src="'./assets/designspace/DO_icons/' + DO.DO_tag + '.svg'"
              class="data-operation-symbol"
              :style="{ backgroundColor: '#9ecae1' }"
            />
            <span class="scrollSpy-btn-text">{{ DO.DO_tag }}</span>
          </div>
        </div>
      </b-collapse>
    </div>
    <div id="transition-effect" class="dimention">
      <div class="dimension-header">
        <span>Transition Effects</span
        ><span
          class="dimension-head-stop"
          :class="!teVisible ? null : 'focused-stop'"
        ></span>
      </div>
    </div>
    <div id="editorial-layer" class="dimention">
      <div class="dimension-header">Editorial Layers</div>
      <div v-for="EL in EditorialLayers" :key="EL.EL_tag">
        <div class="editorial-layer-line">
          <span class="editorial-layer-key">{{ EL.EL_tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DesignSpaceSideBar",
  props: {
    onGalleryChange: Function,
  },
  data: function () {
    return {
      NRSelect: {},
      DOSelect: {},
      nrVisible: true,
      doVisible: false,
      teVisible: false,
    };
  },
  computed: {
    ...mapState({
      NarrativeRelationships: (state) =>
        state.designSpace.narrativeRelationships,
      DataOperations: (state) => state.designSpace.dataOperations,
      EditorialLayers: (state) => state.designSpace.editorialLayers,
    }),
  },
  methods: {
    NRSelectChange: function (NRTag) {
      this.$store.commit("UPDATE_NR_FILTER", NRTag);
    },
    DOSelectChange: function (DOTag) {
      this.$store.commit("UPDATE_DO_FILTER", DOTag);
    },
    onClickNR: function () {
      if (!this.nrVisible) {
        this.nrVisible = true;
        this.doVisible = false;
        this.teVisible = false;
        this.onGalleryChange("NarrativeRelationship")
      }
    },
    onClickDO: function () {
      if (!this.doVisible) {
        this.nrVisible = false;
        this.doVisible = true;
        this.teVisible = false;
        this.onGalleryChange("DataOperation")
      }
    },
    onClickTE: function () {
      if (!this.teVisible) {
        this.nrVisible = false;
        this.doVisible = false;
        this.teVisible = true;
      }
    },
  },
  watch: {
    NarrativeRelationships(value) {
      this.NRSelect = {};
      value.forEach((relation) => {
        this.NRSelect[relation.NR_tag] = true;
      });
    },
    DataOperations(value) {
      this.DOSelect = {};
      value.forEach((operation) => {
        this.DOSelect[operation.DO_tag] = true;
      });
    },
  },
};
</script>

<style scoped>
.search-bar-div {
  width: 80%;
}

.search-bar {
  font-size: 10px;
}

.editorial-layer-line {
  margin-bottom: 5px;
}

.editorial-layer-key {
  background-color: rgb(121, 190, 209);
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 0.5em;
  padding-right: 0.5em;
  font-size: 14px;
  margin-left: 1em;
}

#editorial-layer {
  position: absolute;
  bottom: 6em;
  border: transparent;
  box-shadow: 3px 4px 5px 4px rgba(92, 92, 92, 0.08);
  border-radius: 0.375rem;
  width: 80%;
  padding-top: 5%;
  padding-bottom: 5%;
}

#ds-sidebar {
  padding-top: 2em;
  padding-bottom: 2em;
  padding-left: 1em;
  padding-right: 3em;
  font-size: 14px;
  position: sticky;
  position: -webkit-sticky;
}

.dimension-header {
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  padding-left: 1em;
  padding-bottom: 0.25em;
  padding-top: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 0.25em;
  background-color: #f7f7f7;
}

.dimension-header:hover {
  background-color: #e7e7e7;
}

.dimention {
  margin-top: 0.5em;
  text-align: left;
  width: 90%;
}

.dimension-header {
  display: flex;
  flex-direction: row;
  position: relative;
  transition: 0.2s;
}

.card-text {
  text-align: left;
}

@media (min-width: 576px) {
  .sidebar-panel-group .sidebar-btn + .sidebar-btn {
    margin-top: 0.5rem;
  }
}

.sidebar-panel-group .sidebar-btn {
  text-decoration: none;
  border-color: transparent;
  height: 1.875rem;
  padding: 0.375rem 0.5rem 0.375rem 0.75rem;
  vertical-align: middle;
  display: flex;
  position: relative;
  font-size: 0;
  cursor: pointer;
  background-color: transparent;
  opacity: 1;
  transition: background-color 0.3s cubic-bezier(0.28, 0.11, 0.32, 1);
  transition: opacity 0.2s cubic-bezier(0.28, 0.11, 0.32, 1);
  transition-property: background-color, opacity;
}

@media (max-width: 576px) {
  .sidebar-panel-group .sidebar-btn {
    height: 2rem;
    padding: 0.375rem 1rem;
    border: 1px solid transparent;
    border-radius: 0.375rem;
  }
}

.sidebar-panel-group .sidebar-btn:hover {
  border-color: transparent;
  background-color: #f1f1f180;
}

@media (max-width: 576px) {
  .sidebar-panel-group .sidebar-btn:hover {
    border: 1px solid #f1f1f180;
  }
  .sidebar-panel-group .sidebar-btn:hover.filter-btn:not(.active) {
    background-color: transparent;
  }
}

.sidebar-panel-group .sidebar-btn:active,
.sidebar-panel-group .sidebar-btn:focus,
.sidebar-panel-group .sidebar-btn.focus,
.sidebar-panel-group .sidebar-btn.active {
  border-color: transparent;
  background-color: #fff6e6;
}

@media (max-width: 576px) {
  .sidebar-panel-group .sidebar-btn:active,
  .sidebar-panel-group .sidebar-btn:focus,
  .sidebar-panel-group .sidebar-btn.focus,
  .sidebar-panel-group .sidebar-btn.active {
    border: 1px solid #fff6e6;
  }
}

.data-operation-symbol {
  content: "";
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.1rem;
  border-radius: 50vh;
  display: inline-block;
  flex-shrink: 0;
  align-self: center;
  margin-left: 1px;
  margin-right: 7px;
}

.scrollSpy-btn-symbol {
  content: "";
  width: 1rem;
  height: 1rem;
  border-radius: 50vh;
  display: inline-block;
  flex-shrink: 0;
  align-self: center;
  margin-left: 1px;
  margin-right: 7px;
}

.scrollSpy-btn {
  transition-duration: 0.2s;
  margin-left: 0.2em;
  padding-left: 0.8em;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  margin-bottom: 0.3em;
  color: black;
}

.scrollSpy-btn-text {
  font-size: 1rem;
  font-weight: 400;
  color: #000000;
  overflow: visible;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.dimension-head-stop {
  position: absolute;
  width: 0.5rem;
  height: 100%;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  background-color: #c6dbef;
  border-top-right-radius: 0.1rem;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0.1rem;
  border-bottom-left-radius: 0;
  transition: 0.2s;
}

.focused-stop {
  background-color: #3182bd;
}
</style>>