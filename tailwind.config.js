/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      dropShadow: {
        icy: "0 0 5px #80eaff",
      },

      animation: {
        'glow-logo': 'glowLogo 2s ease-in-out infinite',
      },
      keyframes: {
        glowLogo: {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 5px #915EFF)',
          },
          '50%': {
            filter: 'drop-shadow(0 0 15px #915EFF)',
          },
        },
      },
    },
  },
  plugins: [],
};
