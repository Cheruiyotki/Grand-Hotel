/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        platinum: "#E5E4E2",
        deepblue: "#1B263B",
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        luxe: "0 25px 80px -35px rgba(27, 38, 59, 0.45)",
      },
      backgroundImage: {
        velvet:
          "radial-gradient(circle at 15% 20%, rgba(255, 255, 255, 0.55) 0%, rgba(229, 228, 226, 0) 55%)",
      },
    },
  },
  plugins: [],
};
