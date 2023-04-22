/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: "#0095f6",
        facebook: "#385185",
      },
      backgroundImage: {
        "logo-pattern":
          "url(https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones-2x.png?__makehaste_cache_breaker=73SVAexZgBW)",
      },
    },
  },
  plugins: [],
};
