/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#093a7b',
                    light: '#ffedd7',
                    dark: '#1E3F2B'
                },
                secondary: '#3e75af',
                accent: '#f9793a',
                main: '#f9793a',
                success: '#04863f',
                info: '#767676',
                warning: '#f0c775',
                danger: '#dd0025',
                light: '#f9fbff',
                dark: '#333333',
                default: '#333333',
                blue: '#1769d2'
            },
            dropShadow: {
                DEFAULT: '0 0 4px rgba(0, 0, 0, 0.25)'
            },
            borderRadius: { DEFAULT: '8px' },
            screens: {
                xl: '1200px',
                '2xl': '1400px',
                xxl: '1600px'
            },
            rotate: { 1: '20deg' }
        }
    }
}
