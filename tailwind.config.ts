import type { Config } from 'tailwindcss';

const tailwindConfig: Config = {
  content: ['./src/**/*.{astro,html,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'stone-white': '#f4f2ef',
        'mountain-pine': '#2d3a35',
        'valley-green': '#4d7a65',
        'old-brass': '#c9a85c',
        'worn-stone': '#8f8377',
        'light-stone': '#e8e4df',
        'clay-red': '#8f4b3f',
        'sky-wash': '#d7e2df',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.75rem, 6vw, 4.5rem)', { lineHeight: '1.1' }],
        '4xl': ['clamp(2.25rem, 5vw, 3rem)', { lineHeight: '1.15' }],
        '3xl': ['clamp(1.75rem, 4vw, 2.5rem)', { lineHeight: '1.2' }],
      },
      spacing: {
        section: 'clamp(4rem, 10vw, 8rem)',
      },
      maxWidth: {
        content: '1200px',
        wide: '1440px',
      },
      boxShadow: {
        soft: '0 18px 45px rgb(45 58 53 / 0.12)',
        lift: '0 22px 60px rgb(45 58 53 / 0.16)',
        line: '0 1px 0 rgb(45 58 53 / 0.08)',
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
