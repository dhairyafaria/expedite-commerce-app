const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin');

// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new GoogleFontsPlugin({
        fonts: [
          { family: 'Montserrat', variants: ['500', '700'] },
          { family: 'Roboto', variants: ['400', '500'] }],
      }),
    ],
  },
};
