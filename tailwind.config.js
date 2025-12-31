/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
                prata: ['Prata', 'serif'],
                quintessential: ['Quintessential', 'cursive'],
                roboto: ['Roboto', 'sans-serif'],
            },
            colors: {
                primary: '#0a1a3f',
                accentPurple: '#9b59b6',
                accentIndigo: '#5a67d8',
            },
        },
    },
    plugins: [],
}
