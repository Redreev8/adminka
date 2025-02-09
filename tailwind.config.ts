import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "var(--white)",
        label: "var(--label)",
        black: "var(--black)",
        yellow: "var(--yellow)",
        red: "var(--red)",
        green: "var(--green)",
      },
      fontFamily: {
        body: ['var(--font-body)']
      }
    },
  },
  plugins: [],
} satisfies Config;
