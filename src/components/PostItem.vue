<template>
  <div class="post">
    <div class="post-info">
        <div>
        <strong>Name: </strong>{{ post.title }}
    <div>
        <strong>Text: </strong> {{ post.body }}
    </div>
    </div>
    </div>
    <div>
       <my-button @click="$emit('remove')">X</my-button>
    </div>

  </div>
</template>

<script lang="ts">
import type { Post } from '@/types/types';

    export default {
        props: {
            post: {
                type: Object  as () => Post,
                required: true,
            }
        },

        methods: {
            deletePost(id: number) {
                this.$emit('deletePost', id)
            }
        }
    }
</script>

<style scoped>
.post{
  padding: 10px;
  margin-top: 20px;
  border: 3px solid darkolivegreen;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
}

</style>