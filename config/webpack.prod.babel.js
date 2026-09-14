import paths from './paths.babel'
import { merge } from 'webpack-merge'
import common from './webpack.common.babel.js'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import DotEnv from 'dotenv-webpack'
require('dotenv').config({
    path: `./.env.${process.env.NODE_ENV}`
})
export default merge(common, {
    mode: 'production',
    devtool: false,
    output: {
        path: paths.build,
        filename: 'js/[name]-[contenthash].js',
        chunkFilename: 'js/[name]-[chunkhash].js',
        publicPath: `${process.env.BASE_PATH}/`
    },
    plugins: [
        new DotEnv({
            path: './.env.production'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                '!content/**',
                '!web.config',
                '!sitemap.xml',
                '!google3b661a22e6fdb586.html'
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css'
            //chunkFilename: '[id].css'
        })
    ],
    module: {
        rules: []
    },
    optimization: {
        minimize: true,
        minimizer: [`...`, new CssMinimizerPlugin()],
        splitChunks: {
            cacheGroups: {
                styles: {
                    test: /\.(css|scss|less)$/,
                    enforce: true
                }
            }
        }
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
})
