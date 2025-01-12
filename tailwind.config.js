/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.{js,ts,jsx,tsx}", // Укажите пути к вашим файлам
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Настройка шрифта
      },
    },
  },
  plugins: [],
};
