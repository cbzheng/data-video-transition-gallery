import { SET_CURRENT_PAGE } from '../mutations'

const state = () => ({
    currentPage: ""
})

const getters = {

}

const actions = {

}

const mutations = {
    [SET_CURRENT_PAGE](state, pageName) {
        state.currentPage = pageName
    }
}


export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}