const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "rgba(0, 0, 0, 0.5)" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};