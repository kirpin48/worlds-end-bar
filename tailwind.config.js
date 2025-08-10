module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { brand: { green: "#0f6d4a", yellow: "#ffd34d", dark: "#0a3a29" } },
      borderRadius: { '2xl': '1rem' },
      boxShadow: { card: "0 8px 24px rgba(0,0,0,0.15)" }
    }
  },
  plugins: []
};
