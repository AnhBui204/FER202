/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': 'url(/public/images/banner.jpg)'
      },
    },
  },
  plugins: [],
}
