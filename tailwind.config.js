/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {

      backgroundImage: {
        cloud: "url('/public/img/mainbg.png')",
      },
      screens: {
        xxl: { max: '1500px' },
        xl: { max: '1300px' },
        lg: { max: '1024px' },
        md: { max: '768px' },
        sm: { max: '640px' },
        xs: { max: '500px' },
        xxs: { max: '400px' },
        xxxs: { max: '376px' },
      }
    },
  },
  plugins: [],
}