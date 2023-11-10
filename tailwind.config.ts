import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        content: '1580px',
      },
      width: {
        content: '1580px',
      },
      maxHeight: {
        carousel: '560px',
      },
      height: {
        carousel: '560px',
      },
      colors: {
        h: '#144574',
        first: '#194C81',
        second: '#EE882B',
        grey: {
          '200': '#C9E2F9',
          '300': '#D9D9D9',
          '400': '#C8C8C8',
        },
      },
      gap: { '15': '60px' },
      margin: {
        '18': '4.5rem',
      },
      fontSize: {
        mobile: '14px',
      },
    },
    screens: {
      desktop: { min: '1580px' }, // 1215px 1024px
      tablet: { min: '800px', max: '1579px' },
      mobile: { max: '799px' },
      notMobile: { min: '800px' },
      notDesktop: { max: '1579px' },
    },
  },
  plugins: [],
}
export default config
