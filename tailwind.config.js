// Import the Material Tailwind utility function
const withMT = require("@material-tailwind/react/utils/withMT");

// Wrap your configuration with `withMT`
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [],
});
