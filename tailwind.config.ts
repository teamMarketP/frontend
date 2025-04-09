import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#aa4700",
        orange: "#cf5600",
        graylight: "#2f2f2f",
        light: "#f9f9f9",
        concrete: "#f5f5f5",
        blackish: "#191919",
        blacker: "#272727",
      },
    },
  },
  plugins: [daisyui],
};

export default config;
