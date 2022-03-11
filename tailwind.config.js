module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e5e7eb",
          secondary: "#10b981",
          accent: "#e11d48",
          neutral: "#1c1917",
          "base-100": "#1f2937",
          info: "#38bdf8",
          success: "#4ade80",
          warning: "#f97316",
          error: "#dc2626",
        },
      },
    ],
  },
};
