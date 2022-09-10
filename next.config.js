const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withImages = require("next-images");

module.exports = withPlugins([optimizedImages], { target: "serverless" });

module.exports = {
  ...withImages(),
    future: {
        webpack5: true,
    },
  trailingSlash: true,
};
