module.exports = {
  content: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.{vue,ts}'],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
