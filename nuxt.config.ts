// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
  ],
  app: {
    head: {
      title: 'My Test Project',
      link: []
    }
  },
  runtimeConfig: {
    mongoUrl: process.env.MONGO_URL,
  }, 
  nitro: {
    plugins: ["~/server/index.ts"],
  },
})
