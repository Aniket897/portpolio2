/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#282C33",
                heading : "#C778DD",
                gray : "#ABB2BF"
            }
        },
    },
    plugins: [],
}