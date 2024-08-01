/** @type {import('tailwindcss').Config} */

export default {
    content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                dark: '#1E1E1E',
                highlight: '#AF0C1E',
                gray: {
                    light: '#E5E5E5',
                    base: '#525252'
                }
            },
            maxWidth: {
                container: '1440px',
                '354px': '354px'
            },
            minHeight: {
                '420px': '420px'
            }
        }
    },
    plugins: []
}
