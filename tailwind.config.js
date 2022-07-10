module.exports = {
  content: ['./views/**/*.ejs'],
  theme: {
    colors: {
      'dark-blue': '#000A2A',
      'purple': '#618EFF',
      'white': '#FFFFFF',
    },
    fontFamily: {
      mont: ['Monserat', 'sans-serif'],
      roboto: ['Roboto', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
