import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Cara Pembayaran',
    social: {
      github: 'https://github.com/farizdotid/cara-pembayaran'
    },
    sidebar: [{
      label: 'Documentation',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'All Bank List',
        link: '/guides/banks/'
      }, {
        label: 'Bank BCA',
        link: '/guides/bca/'
      }, {
        label: 'Bank BNI',
        link: '/guides/bni/'
      }, {
        label: 'Bank BRI',
        link: '/guides/bri/'
      }, {
        label: 'Bank Mandiri',
        link: '/guides/mandiri/'
      }, {
        label: 'Bank CIMB',
        link: '/guides/cimb/'
      }]
    }]
  })],
  output: "server",
  adapter: vercel()
});