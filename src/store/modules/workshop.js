import { fetchWorkshopDataset } from '../../api'
import { ADD_DATASET } from '../mutations'

const state = () => ({
    datasets: {}
})

const getters = {
    getDataset: (state) => (datasetName) => {
        return state.datasets[datasetName]
    }
}

const actions = {
    async fetchAllDatasets({commit}, datasetNames) {
        await datasetNames.forEach(async name => {
            let data = await fetchWorkshopDataset(name)
            commit("ADD_DATASET", {datasetName: name, dataset: data})
        });
    }
}

const mutations = {
    [ADD_DATASET](state, {datasetName, dataset}) {
        state.datasets[datasetName] =  dataset
    }
}


export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}