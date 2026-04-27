// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-04-27',
  devtools: { enabled: true },
  ssr: true,
  nitro: { preset: 'static' },

  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-gtag'],

  gtag: {
    // Script wird erst nach expliziter Zustimmung geladen (DSGVO)
    initMode: 'manual',
    id: process.env.GOOGLE_ANALYTICS_MEAS_ID || 'G-0342PTNQ08',
  },

  tailwindcss: {
    // Verhindert HMR-Loop durch Tailwind-eigene Output-Beobachtung
    viewer: false,
  },

  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      meta: [
        { name: 'author', content: 'BizzMark UG (haftungsbeschränkt)' },
        { property: 'og:locale', content: 'de_DE' },
        { property: 'og:site_name', content: 'BizzMark' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap',
        },
      ],
    },
  },

  css: ['~/assets/css/main.scss'],

  content: {
    highlight: false,
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://bizzmarkug.github.io',
      staticFormsKey: process.env.STATIC_FORMS_KEY || '',
    },
  },
})
