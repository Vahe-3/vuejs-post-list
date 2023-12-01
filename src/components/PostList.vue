<template>
    <div v-if="posts.length" class="posts">
        <transition-group name="user-list">
            <post-item @remove="$emit('remove', post.id)" v-for="post in posts" :key="post.id" class="post" :post="post"  />
        </transition-group>

    </div>
    <h2 v-else>Posts is empty...</h2>
</template>

<script lang="ts">
import type { Post } from '@/types/types';
import PostItem from './PostItem.vue'

    export default {
        components: {
            PostItem
        },
        props: {
            posts: {
                type: Array as () => Post[],
                required: true,
            },
        },
    }

</script>

<style scoped>


.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease-out;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.user-list-move {
  transition: transform 0.4s ease;
}
</style>