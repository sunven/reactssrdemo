const path = require('path');

module.exports = {
    entry: {
        client: './src/entry-client.js',
        server: './src/entry-server.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
        chunkFilename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    resolve: {
      extensions: [
        '.js',
        '.jsx'
      ]
    }
}