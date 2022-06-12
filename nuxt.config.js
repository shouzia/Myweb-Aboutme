export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ShouZi',
    htmlAttrs: {
      lang: 'cn'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'referrer', content: 'no-referrer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/shouzi.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt'
  ],
  bootstrapVue: {
    icons: true
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  // 自定义配置路由
router: {
  mode: 'hash', // 使用 'hash' 主要是为了适配以相对路径打开的静态站点， 必须使用 'hash' 否则路由跳转不生效
  // base: '/moli/',
  base: process.env.NODE_ENV === 'production' ? './' : '/', // 使用 './' 主要是为了适配以相对路径打开的静态站点
  extendRoutes(routes, resolve) {
   ({
    path: '/',
    redirect: {
     name: 'home'
    }
   })
  }
 },
}
