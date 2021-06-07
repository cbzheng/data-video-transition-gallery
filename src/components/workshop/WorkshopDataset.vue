<template>
  <div>
    <div id="workshop-dataset-page">
      <div id="dataset-block">
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
      </div>

      <div id="dataset-showcase">
        <div v-for="dataFact in curretnDataset" :key="dataFact['id']">
          <b-card :title="dataFact['id']" class="dataset-card">
            <b-table striped hover :items="dataFact.items"></b-table>
            <b-card-text class="data-card-text">
              事实（{{ dataFact["fact type"] }}） : {{ dataFact["fact"] }}
            </b-card-text>
          </b-card>
        </div>
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
  padding: 3vw;
}

#dataset-showcase {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.dataset-card {
  margin: 1em;
  width: 400px;
}

.data-card-text {
  text-align: left;
}

#dataset-block {
    text-align: left;
    margin-left: 1em;
    line-height: 1.5em;
}
</style>