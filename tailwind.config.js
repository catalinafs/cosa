/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screen: {
      sm: '360px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      'White': '#ffffff',
      'WhiteDashed': '#F6F8FB',
      'LightBlue': '#97BEF4',
      'Blue': '#2F80ED',
      'LightGreen': '#2387426b',
      'Shadow': '#0000001a',
      gray: {
        100: '#EAEAEA',
        200: '#C7C7C7',
        300: '#9D9D9D',
        400: '#5C5C5C',
        450: '#515751',
        500: '#444444',
        600: '#373737',
        700: '#2E2E2E',
        800: '#232323'
      },
      'BgColor': '#fafafb',
      'MainColor': '#238742',
      'MainText': '#4F4F4F',
      'NormalText': '#828282',
      'SmallText': '#BDBDBD'
    },
    fontFamily: {
      primary: ['sans-serif'],
      sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"',
        'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"',
        '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"',],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"',
        '"Courier New"', 'monospace',],
    },
    borderRadius: {
      'RadiusRounded': '50%',
      R15: '15px',
      R12: '12px',
      DEFAULT: '15px',
      none: '0'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        '4shadow12': '0 4px 12px 0 #0000001a',
      },
    },
  },
  plugins: [],
}