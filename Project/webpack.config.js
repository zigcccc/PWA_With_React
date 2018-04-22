var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: ['babel-polyfill', __dirname + '/src/index.js'],
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
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development')
			}
		}),
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
