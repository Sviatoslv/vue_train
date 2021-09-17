<template>
  <div class="add-news">
    <p class="news-input">
      <label
        >Title
        <input
          v-model.trim="title"
          type="text"
          name="title"
          placeholder="title"
        />
      </label>
    </p>
    <p>
      <label
        >Body
        <input v-model.trim="body" type="text" name="body" placeholder="body" />
      </label>
    </p>

    <p>
      <label
        >Author
        <input
          v-model.trim="author"
          type="text"
          name="author"
          placeholder="author"
        />
      </label>
    </p>

    <button
      @click="clearNews"
      class="add-button"
      :disabled="!this.newPost"
      type="button"
    >
      Clear Fields
    </button>

    <button
      @click="addNews"
      class="add-button"
      :disabled="!this.newPost"
      type="button"
    >
      {{ btnText }}
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "AddNews",
  props: {
    editedPost: Object,
  },
  data() {
    return {
      title: "",
      body: "",
      author: "",
    };
  },
  methods: {
    ...mapMutations(["addPost", "editPost"]),
    addNews() {
      if (!this.editedPost && this.newPost) {
        this.addPost(this.newPost);
        this.clearNews();
      }

      if (this.editedPost && this.newPost) {
        const editedPost = { ...this.newPost, id: this.editedPost.id };
        this.editPost(editedPost);
        this.clearNews();
      }
    },

    clearNews() {
      this.title = "";
      this.body = "";
      this.author = "";
    },
  },
  watch: {
    editedPost() {
      if (this.editedPost) {
        this.title = this.editedPost.title;
        this.body = this.editedPost.body;
        this.author = this.editedPost.author;
      }
    },
  },
  computed: {
    newPost() {
      const { title, body, author } = this;

      if (title && body && author) {
        const { title, body, author } = this;

        const oneNews = {
          title,
          body,
          author,
        };

        return oneNews;
      }

      return null;
    },
    btnText() {
      if (this.editedPost) {
        return "Save News";
      }
      return "Add News";
    },
  },
};
</script>

<style scoped>
.add-news {
  border: 1px solid #000;
  margin: 20px auto;
  padding: 20px;
  max-width: 300px;
}

.add-button {
  border: 1px solid #000;
  padding: 10px;
  cursor: pointer;
  margin: 0 10px;
}

.add-button:disabled {
  cursor: not-allowed;
}
</style>
