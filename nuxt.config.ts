// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components: true,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
    'vue-clerk/nuxt',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
  ],

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },

  googleFonts: {
    families: {
      // List the fonts you want here
      Archivo: true, // All weights of Inter
      Manrope: true, // All weights for Lora
    },

    prefetch: true, // Preload fonts during the build
    preconnect: true, // Preconnect to Google's font servers
    display: 'swap', // Ensure text remains visible during font loading
  },

  clerk: {
    appearance: {
      variables: { colorPrimary: '#000000' },
      elements: {
        formButtonPrimary:
          'bg-black border border-black border-solid hover:bg-white hover:text-black',
        socialButtonsBlockButton:
          'bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black',
        socialButtonsBlockButtonText: 'font-semibold',
        formButtonReset:
          'bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black',
        membersPageInviteButton:
          'bg-black border border-black border-solid hover:bg-white hover:text-black',
        card: 'bg-[#fafafa]',
      },
    },
  },

  icon: {
    serverBundle: {
      collections: ['uil', 'mdi'], // <!--- this
    },
  },

  app: {
    head: {
      title: 'Home - Lacoste Ecommerce',
      meta: [
        {
          name: 'description',
          content: 'Lacoste Ecommerce home page.',
        },
      ],

      htmlAttrs: {
        lang: 'en',
      },
    },
  },
})
