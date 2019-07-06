const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	target: "node",
	node: {
		__filename: false,
		__dirname: false
	},
	externals: [nodeExternals()],
	entry: path.resolve(__dirname, 'src/index.ts'),
	devtool: 'source-map',
	mode: process.env.NODE_ENV,
	output: {
		filename: "[name]-bundle.js",
		chunkFilename: "[name].chunk.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		libraryTarget: "commonjs2"
	},
	devServer: {
		contentBase: "dist",
		overlay: true,
		stats: {
			warning: false,
			colors: true
		}
	},
	optimization: {
		splitChunks: {
			automaticNameDelimiter: "_",
			cacheGroups: {
				vendor: {
					name: "vendor",
					test: /[\\/]node_modules[\\/]/,
					chunks: "initial",
					minChunks: 2
				}
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.ts?$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, 'src'),
				loader: 'babel-loader'
			},
			{
				test: /\.js$/,
				use: ["source-map-loader"],
				enforce: "pre"
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: "file-loader"
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.js', '.tsx', '.jsx']
	}
}
