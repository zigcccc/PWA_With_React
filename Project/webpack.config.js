var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		// 'react-hot-loader/patch',
		// 'webpack-dev-server/client?http://localhost:8080',
		// 'webpack/hot/only-dev-server',
		__dirname + '/src/index.js'
	],
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react'],
					plugins: ['react-hot-loader/babel', 'transform-class-properties']
				}
			},
			{
				test: /\.css$/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			inject: true,
			template: __dirname + '/public/index.html'
		})
	],
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		historyApiFallback: true,
		inline: true,
		hot: true
	}
};
