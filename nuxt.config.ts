// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'My Test Project',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css'
        }
      ]
    }
  }
})
