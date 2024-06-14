// vue.config.js
module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://api.adviceslip.com',
          changeOrigin: true,
          pathRewrite: { '^/api': '' },
        },
      },
    },
  };
  