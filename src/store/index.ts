import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activities: localStorage.getItem("activities") ? JSON.parse(localStorage.getItem("activities") as string) : []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
});
