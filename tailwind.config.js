/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.js'],
    theme: {
        padding: {},
        margin: {},
        width: {},
        height: {},
        colors: {
            black: 'black',
            white: 'white',
            transparent: 'transparent',
            inherit: 'inherit',
            primary: '#2C5A3E',
            secondary: '#82be66',
            success: '#04863f',
            info: '#767676',
            warning: '#f0c775',
            danger: '#dd0025',
            light: '#f5f5f5',
            dark: '#333',
            default: '#333',
            main: '#f9793a'
        },
        extend: {
            borderRadius: { DEFAULT: '8px' },
            screens: {
                xl: '1200px',
                xxl: '1600px'
            },
            rotate: { 1: '20deg' }
        }
    }
}
