import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    // app: {
    //     head: {
    //         charset: "utf-8",
    //         viewport: "width=device-width, initial-scale=1"
    //     }
    // },
    build: {
      quiet: false
    },
    buildModules: [
      '@pinia/nuxt'
    ],
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        config:  {
            content: ['./pages/**/*.{vue,js}'],
            plugins: [require('daisyui')],
            daisyui: {
                themes: ["cupcake", "dark"]
            }
        }
    }
})
