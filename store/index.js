export default {
  state: ()=>({
    name:"mohamed gamal",
    posts:[],
    selectedPost:{}
  }),
  mutations: {
    updatePosts(state,posts){
      state.posts = posts
    },
    updateSelectedPost(state,post){
      state.selectedPost = post
    }
  }
}

// updatePosts() بتاخد البويستس اللي انا ببعتها وتحطها في البوست
