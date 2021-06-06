const path = require('path');
const nodeExternal = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: './src/server.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(tsx?)$/,
                loader: 'ts-loader',
                exclude: [
                    [
                        path.resolve(__dirname, 'node_modules'),
                        path.resolve(__dirname, '.serverless'),
                        path.resolve(__dirname, '.webpack'),
                        path.resolve(__dirname, '.vscode'),
                    ],
                ],
                options: {
                    transpileOnly: true,
                },
            },
        ],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
          eslint: {
            enabled: true,
            files: './src/**/*.{ts,tsx,js,jsx}'
          },
        })
    ],
    // externals: [nodeExternal()],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        library: 'commonjs',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};