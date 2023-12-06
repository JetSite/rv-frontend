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
        content: '1480px',
      },
      width: {
        content: '1480px',
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
        warning: '#D2051B',
        text: '#061018',
        grey: {
          '200': '#C9E2F9',
          '300': '#D9D9D9',
          '350': '#B4B4B4',
          '400': '#C8C8C8',
          '700': '#666666',
        },
      },
      gap: { '15': '60px' },
      margin: {
        '18': '4.5rem',
      },
      fontSize: {
        mobile: '14px',
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 0.5fr))',
        '9': 'repeat(9, minmax(0, 0.5fr));',
      },
    },
    screens: {
      desktop: { min: '1580px' },
      tablet: { min: '834px', max: '1579px' },
      mobile: { max: '833px' },
      notMobile: { min: '834px' },
      notDesktop: { max: '1579px' },
    },
  },
  safelist: [
    'col-start-1',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
  ],
  plugins: [],
}
export default config
