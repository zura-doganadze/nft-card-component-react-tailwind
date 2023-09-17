/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "card-bg": "hsl(216, 50%, 16%)",
        "hover-bg": "hsl(178, 100%, 50%, 60%)",
        "line-color": "hsl(215, 32%, 27%)"

      },
      textColor: {
        "text-hover": "hsl(178, 100%, 50%)",
        "price-color": "hsl(178, 100%, 50%)",
        "span-color": "hsl(215, 51%, 70%)",
        
      }
    },
  },
  plugins: [],
};
