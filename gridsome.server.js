// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async store => {
    const { data } = await axios.get('https://www.reddit.com/r/aww.json?raw_json=1');
/*
    const contentType = store.addContentType({
      typeName: 'RedditPost',
      route: '/reddit/:id' 
    });*/

    const collection = store.addCollection({
      typeName: 'RedditPost',
      route: '/reddit/:id' 
    })    

    for (const post of data.data.children) {
      collection.addNode({
        id: post.data.id,
        title: post.data.title,
        path: '/reddit/' + post.data.id,
        // img: post.data,
        content: post.data.selftext,
        upvote_ratio: post.data.upvote_ratio,
        fields: {
          thumbnail: post.data.thumbnail,
          img: post.data
        }
      })
    }
/*
    for (const post of data.data.children) {
      contentType.addNode({
        id: post.data.id,
        title: post.data.title,
        path: '/reddit/' + post.data.id,
        // img: post.data,
        content: post.data.selftext,
        upvote_ratio: post.data.upvote_ratio,
        fields: {
          thumbnail: post.data.thumbnail,
          img: post.data
        }
      })
    }*/
  })


  /*
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
  */
}
