import Vue from "vue";
import Vuex from "vuex";
import newsModule from "./modules/news-module";
import postsModule from "./modules/posts-module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { newsModule, postsModule },
});
