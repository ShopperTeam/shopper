/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{html,ts}', './node_modules/flowbite/**/*.js'],
    theme: {
        colors: {
            'purple': {
                '50': '#faf8fc',
                '100': '#f3eef9',
                '101': '#e3d8f1', // pale
                '300': '#d8c8ea',
                '400': '#bea4dc',
                '500': '#a480cc',
                '600': '#8e63ba',
                '700': '#784fa1',
                '800': '#664584',
                '900': '#53386b',
                '950': '#36204b',
            },
            'gun': {
                '50': '#eaffff',
                '100': '#cbffff',
                '200': '#9dfbff',
                '300': '#5af5ff',
                '400': '#0fe5ff',
                '500': '#00c7e7',
                '600': '#009dc1',
                '700': '#027d9c',
                '800': '#0c657e',
                '900': '#0f526a',
                '959': '#022b3a', // gunmetal
            },
            'teal': {
                '50': '#eefdfd',
                '100': '#d4f8f9',
                '200': '#afeef2',
                '300': '#77e1e9',
                '400': '#39cad7',
                '500': '#1daebd',
                '600': '#1b8c9f',
                '606': '#1f7a8c', // teal
                '800': '#205c6a',
                '900': '#1f4d5a',
                '950': '#0f323d',
            },
            'yg': {
                '50': '#fcffe4',
                '100': '#f6ffc5',
                '200': '#ebff92',
                '300': '#daff53',
                '400': '#c5fb20',
                '505': '#98ce00', // yellow-green
                '600': '#80b500',
                '700': '#618902',
                '800': '#4d6c08',
                '900': '#425b0c',
                '950': '#213300',
            },
        },
        fontFamily: {
            'sans': ['AR One Sans', 'sans-serif']
        },
        extend: {},
    },
    plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')],
}
