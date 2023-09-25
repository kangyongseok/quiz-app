import type { Config } from 'tailwindcss';

import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.flex_screen_center': {
          '@apply flex items-center justify-center w-screen h-screen': ''
        },
        '.common_radio_box': {
          '@apply w-4 h-4 text-blue-600 bg-gray-100 border-gray-300': ''
        },
        '.default_button': {
          '@apply bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 disabled:opacity-25':
            ''
        }
      });
    })
  ]
};
export default config;
