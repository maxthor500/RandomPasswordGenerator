const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name][contenthash].js",
        // prevent to generate multiple bundle every rebuild
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    // help to debug
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 3000,
        // open and reload automatically
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(jpg|png|svg|jpeg|gif)$/,
                type: 'assets/images/resource',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    // add babel to be compatible with old browsers
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Random Password Generator",
            filename: "index.html",
            template: 'src/template.html',
        }),
        // new BundleAnalyzerPlugin(),
    ]
}