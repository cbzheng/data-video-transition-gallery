import Vue from "vue"
import {
    ADD_DATA_OPERATION_TO_FILTER, ADD_NARRATIVE_RELATIONSHIP_TO_FILTER, UPDATE_DO_FILTER, UPDATE_NR_FILTER
} from "../mutations"

const state = () => ({
    NRFilter: {},
    DOFilter: {}
})

const getters = {

}

const actions = {

}

const mutations = {
    [ADD_NARRATIVE_RELATIONSHIP_TO_FILTER] (state, nr_name) {
        if (!(nr_name in state.NRFilter)) {
            state.NRFilter[nr_name] = false
        }
    },
    [ADD_DATA_OPERATION_TO_FILTER] (state, do_name) {
        if (!(do_name in state.DOFilter)) {
            state.DOFilter[do_name] = false
        }
    },
    [UPDATE_NR_FILTER] (state, nr_name) {
        if (nr_name in state.NRFilter) {
            Vue.set(state.NRFilter, nr_name, !state.NRFilter[nr_name])
        }
    },
    [UPDATE_DO_FILTER] (state, do_name) {
        if (do_name in state.DOFilter) {
            Vue.set(state.DOFilter, do_name, !state.DOFilter[do_name])
        }
    }
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}