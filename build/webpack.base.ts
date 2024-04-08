import { Configuration } from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from 'path';
// const path = require("path");
console.log(process.env.NODE_ENV);

const cssRegex = /\.css$/;
const lessRegex = /\.less$/;

const styleLoadersArray = [
    "style-loader",
    {
        loader: "css-loader",
    },
];


const baseConfig: Configuration = {
    entry: path.join(__dirname, '../src/index.tsx'),
    output: {
        filename: 'static/js/[name].js',
        path: path.join(__dirname, '../dist'),
        clean: true,
        publicPath: process.env.NODE_ENV === 'development' ? '/' : './'
    },
    module: {
        rules: [
            {
                test: /.(ts|tsx)$/,
                use: "babel-loader"
            },
            {
                test: cssRegex, //匹配 css 文件
                use: styleLoadersArray,
            },
            {
                test: lessRegex,
                use: [
                    ...styleLoadersArray,
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                // 如果要在less中写类型js的语法，需要加这一个配置
                                javascriptEnabled: true
                            },
                        },
                    },
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
        alias: {
            "@": path.join(__dirname, "../src")
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/index.html'),
            inject: true,
            hash: true,
            cache: false,
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ]
}


export default baseConfig