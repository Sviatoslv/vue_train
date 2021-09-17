import { getPosts } from "../../utils/index";

const state = {
  posts: [],
};

const getters = {
  posts: (state) => state.posts,
};

const mutations = {
  setPosts: (state, posts) => {
    state.posts = posts;
  },
};

const actions = {
  async fetchPosts({ commit }) {
    try {
      const respPostsJson = await getPosts();
      commit("setPosts", respPostsJson);
    } catch (err) {
      console.log("%c⧭", "color: #00e600", err);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
