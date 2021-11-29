// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")

const srcDir = path.join(__dirname, "./src")

module.exports = {
  mode: process.env.NODE_ENV ? "productions" : "development",
  entry: {
    background: "./src/background.ts"
    // content_script: "./src/content_script.ts"
    // options: path.join(srcDir, 'options.tsx')
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"]
      }
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: ".", to: ".", context: "public" }]
    })
  ],
  devtool: "inline-source-map",
  watchOptions: {
    ignored: /node_modules/
  }
}
