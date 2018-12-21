const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base.conf.js');

const clientConfig = {
	mode: 'development',
	entry: './src/entry-client.js',
	output: {
		//publicPath:'/clientbuild/',
		filename: 'index.js',
		path: path.resolve(__dirname, 'clientbuild')
	},
	module: {
		// rules: [{
		// 	test: /\.css?$/,
		// 	use: ['style-loader', {
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
		// 		publicPath: '/'
		// 	}
		// }]
	}
};

module.exports = merge(config, clientConfig);