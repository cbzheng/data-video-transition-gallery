<template>
  <div id="ds-sidebar">
    <div id="n-relationship" class="dimention">
      <div class="dimension-header" v-b-toggle.collapse-nr>
        Narrative Relationship
      </div>
      <b-collapse id="collapse-nr" class="mt-2">
        <b-card>
          <p class="card-text"><b>Narrative Relationship</b> refers to</p>
        </b-card>
      </b-collapse>
      <div>
        <div v-for="NR in NRCollection" :key="NR.NR_tag">
          <a href="#" class="sidebar-btn scrollSpy-btn default">
            <b-container>
              <b-row>
                <b-col cols="8">
                  <span
                    class="scrollSpy-btn-symbol"
                    :style="{ backgroundColor: NR.NR_color }"
                  ></span>
                  <span class="scrollSpy-btn-text" v-b-toggle="'collapse' + NR.NR_tag">{{ NR.NR_tag }}</span>
                </b-col>
                <b-col>
                  <span class="scrollSpy-btn-checkbox">
                    <b-form-checkbox switch></b-form-checkbox>
                  </span>
                </b-col>
              </b-row>
            </b-container>
          </a>
          <b-collapse :id="'collapse' + NR.NR_tag" class="mt-2">
            <b-card>
              <p class="card-text">{{NR.NR_desc}}</p>
            </b-card>
          </b-collapse>
        </div>
      </div>
    </div>
    <div id="data-operation" class="dimention">
      <div class="dimension-header">Data Operation</div>
      <div>
        <div v-for="DO in DOCollection" :key="DO.DO_tag">
          <a href="#" class="sidebar-btn scrollSpy-btn default">
              <b-container>
              <b-row>
                <b-col cols="8">
            <span
              class="scrollSpy-btn-symbol"
              :style="{ backgroundColor: DO.DO_color }"
            ></span>
            <span class="scrollSpy-btn-text">{{ DO.DO_tag }}</span>
            </b-col>
                <b-col>
                  <span class="scrollSpy-btn-checkbox">
                    <b-form-checkbox switch></b-form-checkbox>
                  </span>
                </b-col>
              </b-row>
            </b-container>
          </a>
        </div>
      </div>
    </div>
    <div id="transition-effect" class="dimention">
      <div class="dimension-header">Transition Effects</div>
    </div>
    <div id="transition-effect" class="dimention">
      <div class="dimension-header">Editorial Layers</div>
      <div v-for="EL in ELCollection" :key="EL.EL_tag">
        <a class="sidebar-btn filter-btn active">
          <span class="filter-btn-symbol"></span>
          <span class="filter-btn-text">{{ EL.EL_tag }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "DesignSpaceSideBar",
  data: function () {
    return {
      NarrativeRelationships: this.NRCollection,
      DataOperations: this.DOCollection,
      EditorialLayers: this.ELCollection,
      NRSelect: {},
      DOSelect: {}
    };
  },
  computed: {
    ...mapGetters([
      "NRFilter",
      "DOFilter"
    ])
  },
  props: {
    NRCollection: Array,
    DOCollection: Array,
    ELCollection: Array,
  },
};
</script>

<style scoped>
#ds-sidebar {
  padding-top: 2em;
  padding-bottom: 2em;
  padding-left: 1em;
  padding-right: 3em;
  font-size: 14px;
}

.dimension-header {
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  padding-left: 1em;
  padding-bottom: 0.5em;
}

.dimention {
  margin-top: 0.5em;
  text-align: left;
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

.scrollSpy-btn-symbol {
  content: "";
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50vh;
  display: inline-block;
  flex-shrink: 0;
  align-self: center;
  margin-left: 1px;
  margin-right: 7px;
}
</style>>