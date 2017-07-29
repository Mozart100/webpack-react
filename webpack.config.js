const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    // plugins: [new HtmlWebpackPlugin()]

    plugins: [new HtmlWebpackPlugin(
        
        { 
            template:path.resolve(__dirname,'index.html'), //index in the root - user made
            filename: './index.html' })] //generated!!! by the plugin!


    //     plugins: [new HtmlWebpackPlugin(
    // { tempalte : path.resolve(__dirname , '/index.html'),
    //     filename: './index.html',
    // inject : 'body' })]



};