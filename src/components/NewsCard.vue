<template>
  <li class="news-card">
    <h3>{{ oneNews.title }}</h3>
    <span @click="$emit('editPost')" class="edit-icon">&#x270E;</span>
    <p>{{ oneNews.body }}</p>
    <p>{{ oneNews.author }}</p>
  </li>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    oneNews: Object,
  },
};
</script>

<style scoped>
.news-card {
  position: relative;
  max-width: 290px;
  min-width: 200px;
  width: 30%;
  border: 1px solid #000;
  margin: 20px 10px;
  padding: 10px;
}

.edit-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  color: rgb(153, 153, 153);
}

.edit-icon:hover {
  cursor: pointer;
  color: #000;
}
</style>
