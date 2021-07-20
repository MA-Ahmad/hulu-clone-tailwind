// tailwind.config.js
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "header-img": "url('/header.jpg')"
      }),
      colors: {
        "hulu-green": "#00ed82"
      }
    },
    gradientColorStops: theme => ({
      ...theme("colors"),
      cstart: "#0f495c",
      cvia: "#0d3640",
      cend: "#08141f"
    })
  },
  variants: {
    extend: {}
  },
  plugins: []
};
