// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      viewport: "width=device-width, initial-scale=1",
      charset: "utf-8",
      meta: [
        {
          name: "author",
          content: "Hugo Richard",
        },
      ],
    },
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  },

  modules: ['blanked', '@nuxt/content', '@nuxthq/studio'],

  css: ['~/main.css', '~/light-theme.css', '~/dark-theme.css'],

  colorMode: {
    storageKey: 'nuxtlog-color-mode',
    preference: "dark",
    fallback: "dark",
  },

  routeRules: {
    "/": { isr: true, prerender: true },
  },

  content: {
    markdown: {
      anchorLinks: false,
    },
    highlight: {
      theme: 'nord',
      preload: ['js', 'css', 'html', 'md', 'ts', 'tsx', 'vue'],
    }
  },

  devtools: { enabled: true }
})
