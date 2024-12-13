export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
  ],

  i18n: {
    locales: [
      { code: 'en', file: 'en.json', name: 'English' }
    ],
    defaultLocale: 'en',
    langDir: 'locales/',
  },

  compatibilityDate: '2024-12-13'
})