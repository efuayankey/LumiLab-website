import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // LumiLab brand colors
        primary: {
          50: '#f8f7ff',
          100: '#f0effe', 
          200: '#e4e0fd',
          300: '#d1c4fb',
          400: '#b59cf6',
          500: '#9b7af0', // main lavender
          600: '#8b5cf6',
          700: '#7c3aed',
          800: '#6d28d9',
          900: '#5b21b6',
        },
        neutral: {
          50: '#fdfcfc',
          100: '#faf9f9', 
          200: '#f5f3f3',
          300: '#ede8e8', // warm beige
          400: '#ddd5d5',
          500: '#c4b5b5',
          600: '#a89898',
          700: '#8a7575',
          800: '#6b5555',
          900: '#4a3a3a',
        },
        accent: {
          50: '#fef7f7',
          100: '#feeaea',
          200: '#fdd8d8',
          300: '#fab8b8', // soft blush
          400: '#f58989',
          500: '#ec5555',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
};
export default config;