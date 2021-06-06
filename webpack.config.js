const path = require('path');
const package = require('./package.json');
const GeneratePackageJsonPlugin = require('generate-package-json-webpack-plugin');
const nodeExternal = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const mode = process.env.NODE_ENV && process.env.NODE_ENV === 'production' ? 'production' : 'development';
const basePackage = {
    name: package.name,
    version: package.version,
    main: 'bundle.js',
    scripts: package.scripts
};

module.exports = {
    mode: mode,
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
                        path.resolve(__dirname, '.vscode'),
                        path.resolve(__dirname, '.idea')
                    ]
                ],
                options: {
                    transpileOnly: true,
                },
            },
        ],
    },
    externals: [nodeExternal()],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        library: 'commonjs',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                enabled: true,
                files: './src/**/*.{ts,tsx,js,jsx}'
            },
        }),
        // get all list import module, and export to package.json in dist folder
        new GeneratePackageJsonPlugin(basePackage, {
            debug: mode !== 'production',
            useInstalledVersions: true,
        }),
    ],
};