module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#005CA9',
        brand: '#51AF3D',
        secondary: '#252B42',
      },
      screens: {
        '2xl': '1620px',
      },
      borderRadius: {
        xl: '0.625rem',
        '2xl': '1.25rem',
        '3xl': '1.875rem',
      },
      gridTemplateColumns: {
        footer: '400px repeat(2, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
