<template>
  <v-card class="mx-auto">
    <v-card-text>
      <div>Word of the Day</div>
      <p class="text-h4 text--primary">
        {{ $store.state.selectedPost.title }} + {{ $route.params.id }}
      </p>
      <p>adjective</p>
      <div class="text--primary">{{ $store.state.selectedPost.body }}</div>
    </v-card-text>
    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">Origin</p>
          <p>
            late 16th century (as a noun denoting a place where alms were
            distributed): from medieval Latin eleemosynarius, from late Latin
            eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
          </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn text color="teal accent-4" @click="reveal = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    reveal: false,
  }),
  head(){
    return{
      title: this.$store.state.selectedPost.title,
      meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$store.state.selectedPost.body,
          }
        ]
    }
  },
  validate({ params }) {
    return !isNaN(params.id);
  },
  async asyncData({ $axios, store, params }) {
    if (store.state.selectedPost && store.state.selectedPost.id == params.id)
      return true;
    const response = await $axios.$get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    return store.commit("updateSelectedPost", response);
  },
};
</script>
<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
