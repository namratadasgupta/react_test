const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
   devServer: {
      inline: true,
      port: 3000
   },
};


// const HtmlWebPackPlugin = require("html-webpack-plugin");

// module.exports = {
//   entry: './app.jsx',
//   watch: true,
//   output: {
//     path: path.resolve(__dirname, 'js'),
//     filename: 'transpiled.js'
//   },
//   devServer: {
//       inline: true,
//       port: 3000
//    },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//          exclude: [/node_modules/],
//          use: {
//           loader: "babel-loader"
//         },
       
       
//       }
//     ]
    
//   },
//   mode: 'development'
//   plugins: [
//     new HtmlWebPackPlugin({
//       template: "/index.html",
//       filename: "/index.html"
//     })
//   ]
  
  
//   devtool: 'source-map'
// };