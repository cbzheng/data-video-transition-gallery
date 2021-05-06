import { fetchDSDataOperations, fetchDSEditorialLayers, fetchDSNarrativeRelationships, fetchTransitionCards } from "../../api"
import { SET_NARRATIVE_RELATIONSHIP, SET_DATA_OPERATION, SET_TRANSITION_CARDS, SET_EDITORIAL_LAYERS } from "../mutations"

const state = () => ({
    narrativeRelationships: [],
    dataOperations: [],
    editorialLayers: [],
    transitionCards: []
})

const getters = {
    
}

const actions = {
    async fetchDesignSpace ({commit}) {
        const narrativeRelationships = await fetchDSNarrativeRelationships()
        const dataOperations = await fetchDSDataOperations()
        const editorialLayers = await await fetchDSEditorialLayers()
        commit("SET_NARRATIVE_RELATIONSHIP", narrativeRelationships)
        commit("SET_DATA_OPERATION", dataOperations)
        commit("SET_EDITORIAL_LAYERS", editorialLayers)
        commit("SET_TRANSITION_CARDS", await fetchTransitionCards())

        narrativeRelationships.forEach(nr => {
            commit("ADD_NARRATIVE_RELATIONSHIP_TO_FILTER", nr.NR_tag, {root: true})
        });

        dataOperations.forEach(operation => {
            commit('ADD_DATA_OPERATION_TO_FILTER', operation.DO_tag, {root: true})
        })
    }
}

const mutations = {
    [SET_NARRATIVE_RELATIONSHIP] (state, nr) {
        state.narrativeRelationships = nr
    },
    [SET_DATA_OPERATION] (state, dataOperations) {
        state.dataOperations = dataOperations
    },
    [SET_EDITORIAL_LAYERS] (state, editorialLayers) {
        state.editorialLayers = editorialLayers
    },
    [SET_TRANSITION_CARDS] (state, cards) {
        state.transitionCards = cards
    }
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}