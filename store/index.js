import axios from 'axios';

// create store
export const state = () => ({
    apps : []
});

//  getters
export const getters = {
    apps(state) {
        return state.apps;
    }
};

// mutations
export const mutations = {
    SET_APPS(state, apps) {
        state.apps = apps;
    }
};

// actions
export const actions = {
    async nuxtServerInit({ commit }) {
        const { data } = await axios.get(
            'http://api-solite.test/v1/app'
        );
        commit('SET_APPS', data);
    }
    // setApps({ commit }, apps) {
    //     commit('SET_APPS', apps);
    // }
};
