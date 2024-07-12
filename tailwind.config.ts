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
        content: '1280px',
      },
      width: {
        content: '1280px',
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
        firstInner: '#2A5781',
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
      desktopLarge: { min: '1580px' },
      desktop: { min: '1280px' },
      tablet: { min: '834px', max: '1279px' },
      mobile: { max: '833px' },
      notMobile: { min: '834px' },
      notDesktop: { max: '1279px' },
      desktopOnly: { min: '1280px', max: '1579px' },
    },
    animation: {
      'fade-in': 'fadeIn 0.1s ease-in-out',
      'fade-in-opacity': 'fadeIn30 0.1s ease-in-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      fadeIn30: {
        '0%': { opacity: '0' },
        '100%': { opacity: '0.3' },
      },
    },
    fontFamily: {
      main: ['Cera', 'sans-serif'],
      second: ['Manrope', 'sans-serif'],
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
    'text-',
    'bg-',
    'before:bg-',
  ],
  plugins: [require('@tailwindcss/typography')],
}
export default config
