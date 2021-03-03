const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

const copyWebpackPlugin = new CopyWebpackPlugin({
    patterns: [
        { 
            from: './src/assets/', 
            to: './assets/'
        }
    ],
});

module.exports = {
	output: { 
        path: __dirname + '/build' 
    },
	optimization: { 
        splitChunks: { 
            chunks: "initial"
        }
    },
	module: {
		rules: [
			{ test: /\.tsx?$/, use: { 
				options: {
				useTranspileModule: true,
				forceIsolatedModules: true,
				useCache: true,
				useBabel: true,
				babelOptions: {
					babelrc: true
				},
				reportFiles: ['src/**/*.{ts,tsx}'],
				babelCore: '@babel/core'
			},
			loader: 'awesome-typescript-loader'
				} },
			{ test: /\.m?js/, resolve: { fullySpecified: false } },
			{ test: /\.mjs$/, exclude: /node_modules/, use: { loader: "babel-loader" } },
			{ test: /\.js$/, exclude: /node_modules/, use: { loader: "babel-loader" } },
			{ test: /\.css$/, use: ["style-loader", "css-loader"] },
			{ test: /\.(gif|png|apng|jpe?g|svg|)$/i, use: [ 'file-loader', { loader: 'image-webpack-loader' } ] },
			{ test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/, exclude: /node_modules/, use: { loader: 'url-loader?importLoaders=1&limit=100000' } }
		]		
	},
	resolve: {
        fallback:{
            "crypto": false,
            "crypto-browserify": false
        },
        extensions: ['.js', '.jsx', '.react.js', '.ts', '.tsx']
    },
	plugins: [htmlWebpackPlugin, copyWebpackPlugin, /*new BundleAnalyzerPlugin({analyzerMode: 'static'}) */],
	devServer: { 
        open: 'Google Chrome',
        historyApiFallback: true
    }
};