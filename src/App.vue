<script lang="ts">
import PostList from './components/PostList.vue';
import AddPostForm from './components/AddPostForm.vue';
import type { Post, SelectOption } from './types/types';
import axios from 'axios'

export default {
  components: {
    PostList,
    AddPostForm,
  }, 
  data() {
    return {
      posts:  [] as Post[],
      title: '',
      body: '',
      showDialog: false,
      isPostsLoading: false,
      selectedOption: '' as 'body' | 'title',
      selectOptions: [
                      {id: Math.random(), name: 'Sort by title', value: 'title'},
                      {id: Math.random(), name: 'Sort by body', value: 'body'} 
                     ] as SelectOption[],
      isSearchActive: false,
      searchText: '',
      page: 1,
      limit: 10,
      totalPages: 0,
    }
  },

  methods: {

    addPost(newPost: Post) {
      this.posts.push(newPost);
      this.showDialog = false;
    },

    deletePostById(id: number) {
      this.posts = this.posts.filter(post => post.id !== id);
    },

    handleSearchClick(){
      this.isSearchActive = false
    },

    handlePaginationClick(value: number) {
      this.page = value;
    },

    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        setTimeout( async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _limit: this.limit,
              _page: this.page,
            }
          });
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
          this.posts = response.data;
          this.isPostsLoading = false;
        }, 1000)
      } catch (error) {
        console.error(error)
      }

    },

  },

  mounted() {
   this.fetchPosts()
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedOption]?.localeCompare(post2[this.selectedOption]))
    },

    searchedPosts() {
      return this.sortedPosts.filter(post => post.title.includes(this.searchText));
    }

  }

}

</script>

<template>
  <div class="app">
    <header class="header">
      <h1 class="title">Posts</h1>
      <my-button @click="showDialog = true">Add post</my-button>
      <div v-if="!isSearchActive" class="sort-search">
        <my-button  @click="isSearchActive = true">Search by title</my-button>
        <my-select :options="selectOptions" v-model="selectedOption"/>
      </div>
      <div v-else  class="sort-search">
        <my-input v-model="searchText" type="text" placeholder="Title"  />
        <my-button  @click="handleSearchClick">Search</my-button>
        <my-button  @click="isSearchActive = false">Close</my-button>
      </div>
    </header>
    <nav class="nav">
    <div class="pagination">
      <div v-for="page in totalPages" @click="handlePaginationClick(page)" class="pagination-button">{{ page }}</div>
    </div>
    </nav>
    <body class="body">
  <my-dialog :show="showDialog" @close="showDialog = false">
    <add-post-form @create="addPost" />
  </my-dialog>
    <post-list v-if="!isPostsLoading" @remove="deletePostById" :posts="searchedPosts" />
    <div class="loader" v-else>
      <my-loader />
    </div>
  </body>

</div>
</template>

<style >
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;;
}

.body{
  margin: 30px;
}

.header{
  background-color: #f5ffe4;
  padding: 30px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.loader{
  display: flex;
  justify-content: center;
}

.sort-search{
  display: flex;
  align-items: center;
}

.nav{
  height: 50px;
  background-color: #f5ffe4;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.pagination-button{
  width: 30px;
  height: fit-content;
  padding: 5px;
  background-color: #C6C9B9;
  display: flex;
  justify-content: center;
  border-radius: 12px;
  cursor: pointer;
}


</style>
