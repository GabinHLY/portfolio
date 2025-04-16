import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Montserrat: [400, 500, 600, 700, 800],
    },
      display: 'swap'
  }
});