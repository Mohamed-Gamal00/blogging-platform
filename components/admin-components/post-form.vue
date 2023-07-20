<template>
  <div>
    <h1 class="text-center">Add post</h1>
    <v-form ref="form" v-model="valid" @submit.prevent="submit">
      <v-text-field
        class="mb-10"
        v-model="form.title"
        :rules="rules.title"
        label="title"
        required
      ></v-text-field>
      <v-textarea
        v-model="form.body"
        :rules="rules.body"
        outlined
        name="input-7-4"
        label="body"
        required
      ></v-textarea>

      <VBtn
        type="submit"
        color="success"
        outlined
        :dark="valid"
        :disabled="!valid"
        :loading="addPostLoading"
        >{{ SubmitButtontext }}</VBtn
      >
    </v-form>
  </div>
</template>

<script>
export default {
  name: "post-form",
  data() {
    return {
      valid: false,
      addPostLoading: false,
      form: {
        title: "",
        body: "",
      },
      rules: {
        title: [
          (v) => !!v || "title is required",
          // (v) => v.length <= 10 || "title must be less than 10 characters",
        ],
        body: [
          (v) => !!v || "Body is required",
          // (v) => v.length <= 10 || "Body must be less than 10 characters",
        ],
      },
    };
  },
  mounted() {
    this.postId && this.getPost();
  },
  computed: {
    postId() {
      return +this.$route.params.id;
    },
    SubmitButtontext() {
      return this.postId ? "Save" : "Submit";
    },
  },
  methods: {
    submit() {
      this.addPostLoading = true;
      const action = this.postId
        ? { name: "editPost", payload: { ...this.form, id: this.postId } }
        : { name: "AddPost", payload: this.form };
      this.$store
        .dispatch(action.name, action.payload)
        .then(() => {
          this.$router.push("/admin");
        })
        .finally(() => {
          this.addPostLoading = false;
        });
    },
    getPost() {
      this.$store.dispatch("getPost", this.postId).then((post) => {
        this.form.title = post.title;
        this.form.body = post.body;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
