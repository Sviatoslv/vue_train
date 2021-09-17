import { getNews } from "../../utils/index";

const state = {
  news: [],
};

const getters = {
  news: (state) => state.news,
};

const mutations = {
  setNews: (state, news) => {
    state.news = news;
  },
  addPost: (state, oneNews) => {
    const id = Math.floor(Math.random() * 100000000);

    state.news.push({ ...oneNews, id });
  },
  editPost: (state, oneNews) => {
    const newNews = state.news.map((oldPost) => {
      if (oldPost.id == oneNews.id) {
        return oneNews;
      }

      return oldPost;
    });

    state.news = newNews;
  },
};

const actions = {
  async fetchNews({ commit }) {
    const news = await getNews();
    commit("setNews", news);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
