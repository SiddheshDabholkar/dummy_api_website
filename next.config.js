const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer();

module.exports = {
  future: {
    webpack5: true,
  },
};

// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     if (!isServer) {
//       config.node = {
//         fs: "empty",
//       };
//     }

//     return config;
//   },
// };
