var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
	mode: 'production',
	entry: ['babel-polyfill', __dirname + '/src/index.js'],
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js',
		publicPath: './'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react'],
					plugins: [
						'react-hot-loader/babel',
						'transform-class-properties',
						'transform-object-rest-spread'
					]
				}
			},
			{
				test: /\.css$/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
			},
			{
				exclude: [/\.html$/, /\.css$/, /\.(js|jsx)$/, /\.json$/],
				loader: 'file-loader',
				options: {
					name: 'static/media/[name].[ext]'
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new HtmlWebpackPlugin({
			inject: true,
			template: __dirname + '/public/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeRedundantAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			}
		}),
		new UglifyJsPlugin({
			test: /\.js($|\?)/i,
			//sourceMap: true,
			uglifyOptions: {
				compress: {
					warnings: false,
					reduce_vars: false
				},
				output: {
					comments: false
				}
			}
		}),
		new ManifestPlugin({
			fileName: 'asset-manifest.json'
		})
	]
};
