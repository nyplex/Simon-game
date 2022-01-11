module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        IBM: ["IBM Plex Sans", "sans-serif"],
        OPS: ["Black Ops One", "cursive"]
      },
      colors: {
        transparent: "transparent",
        errors: "#E63946",
        light: "#F1FAEE",
        secondary: "#A8DADC",
        primary: "#1D3557",
        text: "#323232",
        secondaryVariant: "#457B9D",
        simonRed: "#870000",
        simonBlue: "#005763",
        simonYellow: "#998000",
        simonGreen: "#007800",
        simonPink: "#6e0048"
      }
    },
    screens: {
      "mobile": "445px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    }
  },
  plugins: [],
}
