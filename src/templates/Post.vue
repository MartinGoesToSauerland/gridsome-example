<template>
    <BlogLayout>
        <div class="markdown-body" v-html="$page.post.content" />
    </BlogLayout>
</template>

<page-query>
query Post($path: String!){
  post: post(path: $path) {
    id
    title
    content
  }
}
</page-query>

<script>
import BlogLayout from '~/layouts/Blog'

export default {
    components: {
        BlogLayout
    },
    metaInfo() {
        return {
            title: this.$page.post.title,
            meta: [
                {
                name: 'author',
                content: 'Daballer'
                },
                {
                name: 'color-scheme',
                content: 'light only'
                },        
            ]
        }
    }
}
</script>
