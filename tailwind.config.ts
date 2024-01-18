import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        gray: 'var(--gray)',
        accent: 'var(--accent)'
      },
      textColor: {
        primary: 'var(--font-primary)',
        muted: 'var(--font-muted)',
        inverted: 'var(--font-inverted)'
      },
      fontFamily: {
        main: 'var(--font-family)'
      },
      backgroundImage: {
        'gradient-conic':
            'conic-gradient(var(--conic-position), var(--tw-gradient-stops))'
      },
      gradientColorStops: {
        primary: 'var(--primary)',
        accent: 'var(--accent)'
      },
    },
  },
  plugins: [
  ],
} satisfies Config;
