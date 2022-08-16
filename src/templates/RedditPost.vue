<template>
    <BlogLayout>
        <h1>{{ $page.redditPost.title }}</h1>
        <img :src="$page.redditPost.fields.thumbnail" alt="img">
        <!--div>{{ $page.redditPost.content }}</div-->
        <div>{{ $page.redditPost.path }}</div>
    </BlogLayout>
</template>

<page-query>
query RedditPost($path: String!){
  redditPost: redditPost(path: $path) {
    title,
    path
    fields {
        thumbnail,
        img {
            title
            url
        }
    }
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
            title: this.$page.redditPost.title,
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
