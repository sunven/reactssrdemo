const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const config = require('./webpack.base.conf.js');

const serverConfig = {
    target: 'node',
    node: {
        __filename: true,
        __dirname: true
    },
    mode: 'development',
    entry: './src/entry-server.js',
    output: {
        //publicPath:'/serverbuild/',
        filename: 'index.js',
        path: path.resolve(__dirname, 'serverbuild')
    },
    externals: [nodeExternals()],
    module: {
        // rules: [{
        // 	test: /\.css?$/,
        // 	use: ['isomorphic-style-loader', {
        // 		loader: 'css-loader',
        // 		options: {
        // 			importLoaders: 1,
        // 			modules: true,
        // 			localIdentName: '[name]_[local]_[hash:base64:5]'
        // 		}
        // 	}]
        // },{
        // 	test: /\.(png|jpeg|jpg|gif|svg)?$/,
        // 	loader: 'url-loader',
        // 	options: {
        // 		limit: 8000,
        // 		outputPath: '../public/',
        // 		publicPath: '/'
        // 	}
        // }]
    }
};

module.exports = merge(config, serverConfig);