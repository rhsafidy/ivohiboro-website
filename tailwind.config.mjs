// Tailwind CSS configuration
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Earthy color palette
        sand: {
          light: "#e8e3d7",
          DEFAULT: "#d8d4c5",
          dark: "#c4a76c",
        },
        sage: {
          light: "#6b705c",
          DEFAULT: "#5d6152",
          dark: "#262b22",
        },
      },
    },
  },
  plugins: ['tailwindcss-postcss-preset'],
};

