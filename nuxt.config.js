import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#dd2700' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    './styles/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/globalComponents',
    '@/plugins/VeeValidate',
    { src: '@/plugins/vueMaps', ssr: false },
    { src: '@/plugins/vueCarousel', ssr: false },
    { src: '@/plugins/vueGallery', ssr: false }
  ],
  env: {
    API: 'https://hubertkuzdak.com'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
  ],
  styleResources: {
    scss: [
      './styles/variables.scss' // use underscore "_" & also file extension ".scss"
    ]
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: [
      /^element-ui/
    ],
    
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
