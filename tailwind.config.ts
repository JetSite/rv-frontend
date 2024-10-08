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
        h: 'rgb(var(--color-h), <alpha-value>)',
        first: 'rgb(var(--color-first), <alpha-value>)',
        'first-inner': 'rgb(var(--color-first-inner), <alpha-value>)',
        second: 'rgb(var(--color-second), <alpha-value>)',
        warning: 'rgb(var(--color-warning), <alpha-value>)',
        text: 'rgb(var(--color-text), <alpha-value>)',
        gray: {
          '200': 'rgb(var(--color-grey-200), <alpha-value>)',
          '300': 'rgb(var(--color-grey-300), <alpha-value>)',
          '350': 'rgb(var(--color-grey-350), <alpha-value>)',
          '400': 'rgb(var(--color-grey-400), <alpha-value>)',
          '700': 'rgb(var(--color-grey-700), <alpha-value>)',
        },
      },
      gap: { '15': '60px' },
      margin: {
        '18': '4.5rem',
      },
      fontSize: {
        base: ['var(--font-size-base)', '1.5'],
        xxs: ['var(--font-size-xxs)', '1.5'],
        '1.5xl': ['var(--font-size-1-5xl)', '1.875'],
        '2.5xl': ['var(--font-size-2-5xl)', '2.25'],
        '3.5xl': ['var(--font-size-3-5xl)', '1.1'],
        xs: ['var(--font-size-xs)', '1'],
        sm: ['var(--font-size-sm)', '1.25'],
        md: ['var(--font-size-md)', '1.5'],
        lg: ['var(--font-size-lg)', '1.75'],
        xl: ['var(--font-size-xl)', '1.75'],
        '2xl': ['var(--font-size-2xl)', '2'],
        '3xl': ['var(--font-size-3xl)', '2.25'],
        '4xl': ['var(--font-size-4xl)', '2.5'],
        '5xl': ['var(--font-size-5xl)', '1'],
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
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}

export default config
