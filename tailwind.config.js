/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f97316", // Custom primary color
        primaryDark: "#e86f00", // Darker primary color
        lightOrange: "#f1dabf", // Light orange color
        darkGray: "#1a1f25", // Dark gray color
        lightgray: "#272c35", // Light gray color
      },
    },
    container: {
      center: true, // Centers the container
      padding: '1rem', // Adds default padding
      screens: {
        sm: '2rem', // Custom padding for small screens and above
      },
    },
  },
  plugins: [],
}
