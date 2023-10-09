import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
 
    },
  },
  plugins: [ require("daisyui")],
  daisyui: {
    themes: ["winter","forest", "emerald", "dark", {
      aesdLight: {
      "primary": "#1e40af",
      "secondary": "#2563EB",    
      "accent": "#22c55e",      
      "neutral": "#333c4d",      
      "base-100": "#F1F5F9",      
      "info": "#3abff8",    
      "success": "#16a34a",      
      "warning": "#fbbd23",
      "error": "#e11d48",
      },
      aesdDark: {
        "primary": "#1e40af",
        "secondary": "#2563EB",
        "accent": "#22c55e",
        "neutral": "#333c4d",
        "base-100": "#334155",
        "info": "#3abff8",
        "success": "#16a34a",
        "warning": "#fbbd23",
        "error": "#e11d48",
    },
    },],
  },
}
export default config
