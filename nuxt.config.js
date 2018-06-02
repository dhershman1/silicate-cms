module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Silicate CMS',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'simple cms system built on nuxt & node'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/imgs/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway'
      }
    ]
  },
  css: ['@/static/css/font-face.css', '@/static/css/main.css'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' }
}
