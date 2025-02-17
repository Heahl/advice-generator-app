import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'light-cyan' : 'hsl(193, 38%, 86%)',
        'neon-green' : 'hsl(150, 100%, 66%)',
        'hover-neon-green' : 'hsl(150, 100%, 76%)',
        'grayish-blue' : 'hsl(217, 19%, 38%)',
        'dark-grayish-blue' : 'hsl(217, 19%, 24%)',
        'dark-blue' : 'hsl(218, 23%, 16%)'
      },
      boxShadow: {
        glow: '0 0 25px 5px hsl(150, 100%, 67%)', 
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        'manrope': ['Manrope', 'sans-serif'], 
      },
    },
  },
  plugins: [],
} satisfies Config;