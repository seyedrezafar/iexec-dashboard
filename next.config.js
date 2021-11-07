const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
  images: {
    domains: ['miro.medium.com'],
  },
});
