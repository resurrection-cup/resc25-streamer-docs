import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RESC25 Streamer Guide",
  description: "Documentation & Guide for streaming Resurrection Cup 2025",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],

    sidebar: [
        {text: 'Getting Started', link: '/'},
        {text: 'osu! Client Setup', link: '/osu_setup'},
        {text: 'OBS Setup', link: '/obs_setup'},
        {text: 'Stream Procedure', link: '/stream_procedure'}
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/resurrection-cup/streamer-docs' }
    ]
  }
})
