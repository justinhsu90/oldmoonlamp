const path = require("path");

function resolve(dir = "") {
  return path.join(__dirname, "./src", dir);
}

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    devtool: "source-map",
    resolve: {
      alias: {
        won: resolve("won-service"),
        assets: resolve("assets")
      }
    },
    optimization: {
      runtimeChunk: {
        name: entrypoint => `runtime~${entrypoint.name}`
      },
      splitChunks: {
        minChunks: 2,
        minSize: 20000,
        maxAsyncRequests: 20,
        maxInitialRequests: 30,
        name: false
      }
    }
  }
};
