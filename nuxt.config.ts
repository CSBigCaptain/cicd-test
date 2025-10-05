// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/scripts', '@compodium/nuxt'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      siteUrl: '404',
      platiform: '404',
      private_test_a: '404',
      vars_test_a: '404',
    },
    app: {
      baseURL: '/'
    }
  }
})