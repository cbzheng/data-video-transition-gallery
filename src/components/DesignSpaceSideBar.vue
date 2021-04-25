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
        <a href="#" class="sidebar-btn scrollSpy-btn default">
          <span class="scrollSpy-btn-symbol"></span>
          <span class="scrollSpy-btn-text">Similarity</span>
          <span class="scrollSpy-btn-stop"></span>
        </a>
      </div>
    </div>
    <div id="data-operation" class="dimention">
      <div class="dimension-header">Data operation</div>
    </div>
    <div id="transition-effect" class="dimention">
      <div class="dimension-header">Transition Effects</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DesignSpaceSideBar",
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
</style>>