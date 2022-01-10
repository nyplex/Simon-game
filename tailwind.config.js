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
        simonRed: "#C30000",
        simonBlue: "#0097AC",
        simonYellow: "#FFD600",
        simonGreen: "#3dd53d",
        simonPink: "#D8008E"
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
