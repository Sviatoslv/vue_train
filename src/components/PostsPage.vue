<template>
  <div>
    <ol class="post-list">
      <li class="post-item" v-for="post of posts" :key="post.id" @click="onClick(post.id)">
        {{ post.title }}
      </li>
    </ol>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PostsPage",
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchPosts"]),
  },
  created() {
    this.fetchPosts();
  },
  computed: {
    ...mapGetters(["posts"]),
  },
};
</script>

<style scoped>
  .post-list {
    text-align: left;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .post-item {
    padding: 20px;
    margin-bottom: 10px;
    border: 1px solid black;
  }
</style>
