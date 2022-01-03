module.exports = {
    plugins: {
      'postcss-preset-env': {
        browsers: 'last 5 versions',
        stage: 0,
      },
      'cssnano': {},
      tailwindcss: {},
      autoprefixer: {},
    },
};