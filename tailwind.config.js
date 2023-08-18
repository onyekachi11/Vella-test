/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#707364",
        secondaryColor: "#4E4E4E",
        lightColor: '#f4f5f8'
      },
      borderRadius:{
        
      }
    },
  },
  plugins: [],
};
