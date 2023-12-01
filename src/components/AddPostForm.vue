<template>
     <form class="form" @submit.prevent="addNewPost" >
      <my-input v-model="post.title" class="input" type="text" placeholder="Title" />
      <my-input v-model="post.body" class="input" type="text" placeholder="Text" />
      <my-button type="submit">Add post</my-button>
  </form>
</template>

<script lang="ts">
    export default {

        data() {
        return  {
            post: {
               title: '',
               body: '' 
            }
        }
    },

    methods: {
    addNewPost () {
        const newPost = {
        id: Math.random(),
        title: this.post.title,
        body: this.post.body,
      }
      this.$emit('create', newPost);
      this.post.title = '';
      this.post.body = '';
    }
    }
    
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}

</style>