<template>
  <div>
    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            <span> <v-icon dark left> mdi-post </v-icon></span>OVERLINE
          </div>
          <v-list-item-title class="text mb-1">
            <p class="mt-0 fw-bold">
              {{ post.title }}
            </p>
          </v-list-item-title>
          <v-list-item-subtitle
            >Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle
          >
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="white">
          <v-img
            :aspect-ratio="16 / 9"
            src="https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg?w=740&t=st=1689673415~exp=1689674015~hmac=d8f3d686b883989a7a7737ed3af6721eb5f2a3480c754e6f2dee99894473d42d"
          ></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <template v-if="isAdmin">
          <div>
            <nuxt-link :to="`admin/blog/${post.id}/edit`">
              <v-btn outlined rounded text color="green"> Edit </v-btn>
            </nuxt-link>
            <v-btn outlined rounded text color="error"> Delete </v-btn>
           </div>
        </template>
        <template v-else>
          <div>
            <nuxt-link :to="`/blog/${post.id}`">
              <v-btn outlined rounded text>
                <span @click="updateSelectedPost(post)"> read more </span>
              </v-btn>
            </nuxt-link>
          </div>
        </template>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: false,
    },
  },

  methods: {
    updateSelectedPost(post) {
      this.$store.commit("updateSelectedPost", post);
    },
  },
};
</script>

<style lang="scss" scoped></style>
