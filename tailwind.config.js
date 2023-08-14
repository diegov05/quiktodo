/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-color": "#FAFFFC",
        "text-color": "#000F06",
        "accent-color": "#30FD7B",
        "button-primary-color": "#49FD8B",
        "button-secondary-color": "#E1FFEC"
      }
    },
    screens: {
      'xs': '300px',
      's': '450px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '3000px'
    }
  },
  plugins: [],
}
