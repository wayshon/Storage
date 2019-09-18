const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js', '.ts', '.json'],
    },
    mode: 'production',
    entry: {
        'index': './index.ts', // 这里可以换成 ts 或者 js
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                }
            },
            // {
            //     test: /\.tsx?$/,
            //     use: [
            //         {
            //             loader: 'tslint-loader',
            //             options: {
            //                 configFile: path.resolve(__dirname, './tslint.json'),
            //             },
            //         },
            //     ],
            //     exclude: /node_modules/,
            // },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            // 指定特定的ts编译配置，为了区分脚本的ts配置
                            configFile: path.resolve(__dirname, './tsconfig.json'),
                        },
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
};