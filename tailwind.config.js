/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    /* Center containers automatically */
    theme: {
        container: {
          center: true,
        },
    },
  plugins: [],
}

