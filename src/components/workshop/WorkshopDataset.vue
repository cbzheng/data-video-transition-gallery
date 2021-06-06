<template>
  <div id="workshop-dataset-page">
    <h3>数据集</h3>

    <div>
      <div>当前数据集： {{ curretnDatasetName }}</div>
      <b-dropdown
        text="选择数据集"
        v-for="dataset in datasetNames"
        :key="dataset"
      >
        <b-dropdown-item @click="changeDataset(dataset)">{{
          dataset
        }}</b-dropdown-item>
      </b-dropdown>
    </div>

    <div>
      <div
        id="dataset-showcase"
        v-for="dataFact in curretnDataset"
        :key="dataFact['id']"
      >
        <b-table striped hover :items="dataFact.items"></b-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "WorkshopDataset",
  data: function () {
    return {
      datasetNames: Array,
      curretnDatasetName: String,
      curretnDataset: Array,
    };
  },
  computed: {
    ...mapState({
      datasets: (state) => state.workshop.datasets,
    }),
  },
  beforeMount: async function () {
    this.datasetNames = ["practice1"];

    await this.$store.dispatch("fetchAllDatasets", this.datasetNames);

    this.curretnDatasetName = "尚未选择数据集";
  },
  watch: {
    datasets: {
      handler(val) {
        this.curretnDataset = val[this.curretnDatasetName];
        console.log(this.curretnDataset);
      },
      deep: true,
    },
  },
  methods: {
    changeDataset: function (datasetName) {
      this.curretnDatasetName = datasetName;
      this.curretnDataset = this.datasets[this.curretnDatasetName];
    },
  },
};
</script>

<style scoped>
#workshop-dataset-page {
    padding-top: 2em;
  padding-bottom: 2em;
  padding-left: 1em;
  padding-right: 3em;
}
</style>