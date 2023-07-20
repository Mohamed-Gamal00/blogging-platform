<template>
  <div>
    <h1 class="text-center my-5">admin page</h1>

    <v-btn to="/admin/post/add" class="mb-5" color="green" outlined>Add post</v-btn>
    <v-row class="d-flex justify-start" align="center">
      <v-col v-for="post in $store.state.posts" :key="post.id" cols="12" sm="4">
        <post-card :post="post" :is-admin="true"></post-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PostCard from "../../components/PostCard.vue";
export default {
  components: {
    PostCard,
  },
  fetch({ $axios, store }) {
    return $axios.$get(`/posts`).then((res) => {
      store.commit("updatePosts", res);
    });
  },
};
</script>

<style lang="scss" scoped></style>
