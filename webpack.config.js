module.exports = {
  entry: [
    "./src/app.js"
  ],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devServer: {
    port:8025,
    inline: true
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: "babel",
      query: {
        presets: ["es2015", "react"]
      }
    }]
  }
};
