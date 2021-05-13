<template>
  <div class="tag">
      <div v-if="error">{{error}}</div>
      <div v-if="postsWithTag.length" class="layout">
        <PostList :posts="postsWithTag"/>
        <TagCloud :posts="posts" />
      </div>
      <div v-else><Spinner /></div>
  </div>
</template>

<script>
import PostList from '../components/PostList'
import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
import { useRoute } from 'vue-router'
import getPosts from '../composables/getPosts'
import { computed } from 'vue'

export default {
    components: {PostList, Spinner, TagCloud},
    setup() {
        const route = useRoute()

        const { error, posts, load } = getPosts()

        load()

        const postsWithTag = computed(() => {
            return posts.value.filter((post) => post.tags.includes(route.params.tag))
        })

        return { posts, postsWithTag,error }
    }
}
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>