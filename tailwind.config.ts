import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import lineClamp from '@tailwindcss/line-clamp';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui, lineClamp],
};

export default config;
