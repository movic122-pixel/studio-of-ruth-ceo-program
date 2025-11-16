/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          amber: "#b45309" // Tailwind amber-700 vibe for Studio of Ruth accent
        }
      }
    },
  },
  plugins: [],
}
