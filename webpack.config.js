const path = require("path")

module.exports = function(env) {
  return {
    entry: "./src/index.js",  //could be an object if needed
    output: {
      path: path.resolve(__dirname),
      filename: "min-jquery.js"
    },
    watch: env.mode === "development",
    module: {
      rules: [
        {
          test: /\.js/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        }
      ]
    }
  }
}