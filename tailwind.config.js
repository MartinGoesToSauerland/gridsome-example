/** @type {import('tailwindcss').Config} */
if (process.env.NODE_ENV === 'production') {
  module.exports = {
    safelist: [
      {
        pattern: process.env.NODE_ENV !== 'production' ?  /./ : /src/, 
      },
    ],  
    content: [
      "./src/**/*.{html,js,vue}",        
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }  
} else {
  module.exports = {
    content: [
      "./src/**/*.{html,js,vue}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }  
}
