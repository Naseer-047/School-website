/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        foreground: "#f3f4f6",
        primary: {
          DEFAULT: "#6d28d9", // Vivid Purple
          light: "#8b5cf6",
          dark: "#4c1d95",
        },
        secondary: {
          DEFAULT: "#10b981", // Emerald
          light: "#34d399",
          dark: "#059669",
        },
        accent: {
          DEFAULT: "#f472b6", // Pink
        },
        surface: {
            DEFAULT: "#111827",
            light: "#1f2937",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
