<template>
  <div class="wrapper">
    <AddNews :editedPost="editedPost" />

    <div class="sorting-panel">
      <input
        v-model="serchQuery"
        type="text"
        name="search"
        placeholder="Serch by Title"
      />

      <div class="sorting-panel_selects">
        <select v-model="sortNewsBy">
          <option value="">Default</option>
          <option value="title">Title</option>
          <option value="body">Body</option>
          <option value="author">Author</option>
        </select>

        <select v-model="sortNewsOrderDesc">
          <option :value="true">DESC</option>
          <option :value="false">ASC</option>
        </select>
      </div>
    </div>

    <div v-if="!sorterdNews.length && !serchQuery">Loading...</div>
    <ol v-else class="news-list">
      <NewsCard
        v-for="oneNews of sorterdNews"
        :key="oneNews.id"
        :oneNews="oneNews"
        @editPost="editPost(oneNews)"
      />
    </ol>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import AddNews from "./AddNews.vue";
import NewsCard from "./NewsCard.vue";

export default {
  name: "NewsPage",
  components: {
    NewsCard,
    AddNews,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      editedPost: null,
      serchQuery: "",
      sortNewsBy: "",
      sortNewsOrderDesc: true,
    };
  },
  methods: {
    ...mapActions(["fetchNews"]),
    editPost(oneNews) {
      this.editedPost = oneNews;
    },
  },
  created() {
    this.fetchNews();
  },
  computed: {
    ...mapState(["title"]),
    ...mapGetters(["news"]),
    serchedNews() {
      return this.news.filter((oneNews) => {
        return oneNews.title.toLocaleLowerCase().includes(this.serchQuery);
      });
    },
    sorterdNews() {
      if (this.sortNewsBy) {
        return [...this.serchedNews].sort((aPost, bPost) => {
          if (this.sortNewsOrderDesc) {
            return aPost[this.sortNewsBy].localeCompare(bPost[this.sortNewsBy]);
          }

          return bPost[this.sortNewsBy].localeCompare(aPost[this.sortNewsBy]);
        });
      }

      return this.serchedNews;
    },
  },
};
</script>

<style scoped>
.wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

.news-list {
  list-style: none;
  display: flex;
  flex-flow: wrap;
  padding: 0;
  justify-content: space-evenly;
}

.sorting-panel {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 10px;
  padding: 20px;
  border: 1px solid #000;
}
</style>
