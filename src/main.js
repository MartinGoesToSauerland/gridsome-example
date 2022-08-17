// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}

if (process.env.NODE_ENV === 'production') {
  require('/src/app.css');
} else {
  //require('./tailwind.css');
  var cssNode = document.createElement("link");
  cssNode.setAttribute("rel", "stylesheet");
  cssNode.setAttribute("type", "text/css");
  cssNode.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css");
  document.getElementsByTagName("head")[0].appendChild(cssNode);
}
