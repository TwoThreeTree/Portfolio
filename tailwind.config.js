module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins ",
      body: "Poppins",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    },
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#ffffff",
        tertiary: "#000000",
      },
    },
  },
  plugins: [],
};
