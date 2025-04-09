import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          "850": "#aa4700",
        },
      },
    },
  },
  plugins: [daisyui],
};

export default config;
