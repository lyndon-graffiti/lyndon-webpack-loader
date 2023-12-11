module.exports = {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["./loaders/style-loader"],
      },
      {
        test: /\.(png)|(jpg)|(jpeg)|(gif)$/,
        use: [
          {
            loader: "./loaders/img-loader.js",
            options: {
              limit: 3000,
              filename: "[name].[contenthash:5].[ext]",
            },
          },
        ],
      },
    ],
  },
};
