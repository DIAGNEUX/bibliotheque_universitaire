/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#070C20',
        secondary: '#5FC2BA',
        linear: '#0000FF',
        background:'#080B17',
        border_card: "#343434" 
      },
      borderWidth: {
        '1': '1px', // Ajoute une valeur pour 1px
      },
      backgroundImage: {
       'gradient-primary': 'radial-gradient(ellipse at center, rgba(5, 62, 154, 0.8) 8%, rgba(5, 62, 154, 0.6) 25%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.1) 80%, rgba(0, 0, 0, 0) 100%)',
      //  'gradient-light': 'radial-gradientcircle at left, rgba(255, 255, 255, 10) 8% , rgba(95, 194, 186, 0.4) 45%, rgba(0, 0, 0, 0.1) 70%, rgba(0, 0, 0, 0.1) 80%, rgba(0, 0, 0, 0) 100%)',
       'buttonlight':'radial-gradient(ellipse at top left, rgba(255, 255, 255, 10) 5% , rgba(95, 194, 186, 240) 30%, rgba(28, 93, 88, 255) 70%)',
       'border-gradient': 'radial-gradient(ellipse at top left, rgba(28, 93, 88, 255) 5%, rgba(95, 194, 186, 240) 40%, rgba(255, 255, 255, 0.2) 80%)', // Inverser les couleurs ici
       'gradient-footer': 'linear-gradient(to top, rgba(5, 62, 154, 0.9) 10%, rgba(5, 62, 154, 0.7) 30%, rgba(5, 62, 154, 0.2) 60%, rgba(0, 0, 0, 0.1) 95%, rgba(0, 0, 0, 0) 100%)',

      },
      backgroundColor: {
        'gradient-btn-light': 'rgba(28, 93, 88, 255)', 
      },
    },
  },
  plugins: [],
}

