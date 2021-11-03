module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV)

  return {
    presets: ['@babel/preset-env',
      ['@babel/preset-react', {
        runtime: 'automatic'
      }],
      '@babel/preset-typescript',
      [
        'babel-preset-vite',
        {
          env: true,
          glob: false
        }
      ]
    ],
    plugins: [
      '@babel/plugin-transform-runtime'
    ],
  }
}
