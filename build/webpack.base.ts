import { Configuration } from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from 'path';

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// const path = require("path");
console.log(process.env.NODE_ENV);

const cssRegex = /\.css$/;
const lessRegex = /\.less$/;
const styleLoadersArray = ["style-loader", "css-loader", 'postcss-loader'];

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
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // 匹配图片文件
                type: "asset", // type选择asset
                parser: {
                    dataUrlCondition: {
                        maxSize: 20 * 1024, // 小于10kb转base64
                    }
                },
                generator: {
                    filename: 'static/images/[hash][ext][query]', // 文件输出目录和命名
                },
            },
            {
                test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
                type: "asset", // type选择asset
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 小于10kb转base64
                    }
                },
                generator: {
                    filename: 'static/media/[hash][ext][query]', // 文件输出目录和命名
                },
            },
            {
                test: /\.json$/,// 匹配json文件
                type: "asset/resource", // 将json文件视为文件类型
                generator: {
                    // 这里专门针对json文件的处理
                    filename: "static/json/[name].[hash][ext][query]",
                },
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
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })
    ]
}


export default baseConfig