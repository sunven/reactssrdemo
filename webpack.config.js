const path = require('path');

module.exports = {
    entry: {
        client: './src/client.js',
        bundle: './src/bundle.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    }

}