import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    date: null,
    trip: {
        start: "1999-01-02",
        end: "2000-01-02"
    }
  },
  getters: {
    trip(state) {
      return state.trip;  
    }
  },
  mutations: {
    setTrip(state, payload) {
      state.trip = payload.trip;
    }
  },
  actions: {
    doUpdateTrip({commit}, trip) {
      commit('setTrip', {trip});
    }
  },
  modules: {
  }
})
