<template>
  <div>
    <NewsPage msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import NewsPage from "@/components/NewsPage.vue";

export default {
  name: "Home",
  components: {
    NewsPage,
  },
};
</script>
