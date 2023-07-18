<template>
  <div>
    <h1 class="text-center my-5">blog page</h1>

    <v-row justify="center" align="center">
      <v-col v-for="post in $store.state.posts" :key="post.id" cols="12" sm="4">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">
                <span> <v-icon dark left> mdi-post </v-icon></span>OVERLINE
              </div>
              <v-list-item-title class="text mb-1">
                <p class="mt-0 fw-bold">{{ post.title }}</p>
              </v-list-item-title>
              <v-list-item-subtitle
                >Greyhound divisely hello coldly
                fonwderfully</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="white"
            ></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <nuxt-link :to="`/blog/${post.id}`">
              <span @click="updateSelectedPost(post)">
                <v-btn outlined rounded text> read more </v-btn>
              </span>
            </nuxt-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, store }) {
    return $axios.$get("/posts").then((res) => {
      store.commit("updatePosts", res);
    });
  },
  methods: {
    updatePosts() {
      this.$store.commit("updatePosts", posts);
    },
  },
};
</script>

<style lang="scss" scoped></style>
