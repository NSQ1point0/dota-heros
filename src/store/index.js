import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    herosData:{},
  },
  mutations: {
    herosDataLoader(state, dotaData) {
      state.herosData = dotaData;
    }
  },
  actions: {
    herosDataLoader({commit}){
      axios("https://api.opendota.com/api/heroStats")
      .then(response => {
        commit("herosDataLoader", response.data)
      });
    }
  },
  modules: {
  },
  getters: {
    getHeros: state => state.herosData
  }
})