// Comment below line to configure Vuex on APK / IOS device
import Vue from 'vue'

import Vuex from 'vuex'
// import * as actions from './actions'
import * as mutations from './mutation'

Vue.use(Vuex)
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('vue_state');
        if (serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('vue_state', serializedState);
    } catch (err) {
        console.error(`Something went wrong: ${err}`);
    }
}

//Add this in state after { loadState() ||

const store = new Vuex.Store({
    // actions,
    mutations,
    state: loadState() || {
        agentDetails: [],
        proposalFmlyDetails: [],
        imagelink: 'https://www.materialui.co/materialIcons/av/not_interested_white_192x192.png',
        notificationTextColor: '#98874b',
    },




    getters: {
        getAgentDetails(state) {
            return state.agentDetails
        },
    }
})

store.watch(
    (state) => {
        console.log(state);
        saveState(state);
    }
)

export default store