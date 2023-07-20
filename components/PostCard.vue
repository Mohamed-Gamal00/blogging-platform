<template>
  <div>
    <v-card class="mx-auto" max-width="344" outlined>
      <!-- all blogs -->
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
          <v-list-item-subtitle>{{ post.body }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="white">
          <v-img
            :aspect-ratio="16 / 9"
            src="https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg?w=740&t=st=1689673415~exp=1689674015~hmac=d8f3d686b883989a7a7737ed3af6721eb5f2a3480c754e6f2dee99894473d42d"
          ></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <!-- actions -->
      <v-card-actions>
        <template v-if="isAdmin">
          <!-- edit -->
          <v-btn
            :to="`admin/post/${post.id}/edit`"
            outlined
            rounded
            text
            color="green"
          >
            Edit
          </v-btn>
          <!-- delete -->
          <appModalVue
            button-title="Delete"
            :Button-Text-Style="true"
            button-color="error"
          >
            <!-- delete modal -->
            <template slot-scope="{ close }">
              <v-card>
                <v-card-title class="text-h5"> Are you sure? </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="green darken-1"
                    :disabled="deletePostLoading"
                    text
                    @click="close"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    color="error"
                    :loading="deletePostLoading"
                    text
                    @click="deletePost(post.id, close)"
                  >
                    Delete
                  </v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </appModalVue>
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
import appModalVue from "./shared/app-modal.vue";
export default {
  components: {
    appModalVue,
  },
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
  data() {
    return {
      deletePostLoading: false,
    };
  },
  methods: {
    updateSelectedPost(post) {
      this.$store.commit("updateSelectedPost", post);
    },
    deletePost(postId, callback) {
      this.deletePostLoading = true;

      this.$store
        .dispatch("deletePost", postId)
        .then(callback)
        .finally(() => {
          this.deletePostLoading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
