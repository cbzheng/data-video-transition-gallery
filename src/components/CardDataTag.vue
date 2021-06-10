<template>
  <span class="card-data-tag">
    <img
      :src="'./assets/designspace/DO_icons/' + dataOperationName + '.svg'"
      class="data-operation-symbol"
      :style="{ backgroundColor: '#9ecae1' }"
    />
    {{ dataOperationName }}
  </span>
</template>

<script>
export default {
  name: "CardDataTag",
  props: {
    dataOperationName: String,
    appearTimes: String,
    color: String,
  },
};
</script>

<style scoped>
.card-data-tag {
  background-color: #9ecae1;
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 0.5em;
  padding-right: 0.5em;
  font-size: 18px;
  margin-left: 0.5em;
}

.data-operation-symbol {
    width: 1rem;
    height: 1rem;
}
</style>