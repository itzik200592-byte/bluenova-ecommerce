import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'bg': '#0B0F1A',
          'card': '#111827',
          'primary': '#1E90FF',
          'text': '#E5E7EB',
          'text-secondary': '#9CA3AF',
          'border': '#1F2937',
        },
      },
      backgroundColor: {
        'dark': '#0B0F1A',
        'dark-card': '#111827',
      },
      textColor: {
        'light': '#E5E7EB',
        'light-secondary': '#9CA3AF',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(30, 144, 255, 0.35)',
        'glow-lg': '0 0 40px rgba(30, 144, 255, 0.25)',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-in-out',
        'slideUp': 'slideUp 0.6s ease-out',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(30, 144, 255, 0.35)' },
          '50%': { boxShadow: '0 0 40px rgba(30, 144, 255, 0.5)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
