/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/*.{html}", "./src/js/*.js"],
    theme: {
        extend: {
            screens: {
                'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
                'tallscreen': { 'raw': '(min-aspect-ratio: 13/20)' }
            },
            keyframes: {
                'show-menu': {
                    '0%': { transform: 'scaleY(0)' },
                    '80%': { transform: 'scaleY(1.1)' },
                    '100%': { transform: 'scaleY(1)' },
                },
            },
            animation: {
                'show-menu': 'show-menu 0.5s ease-in-out forwards',
            }

        },
    },
    plugins: [],
}