import webpack from 'webpack'
import { merge } from 'webpack-merge'
import common from './webpack.common.babel.js'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import DotEnv from 'dotenv-webpack'
require('dotenv').config({
    path: `./.env.${process.env.NODE_ENV}`
})
const DOMAIN = 'https://ezgo.ardswc.gov.tw/'
const SPEECH_DOMAIN = 'https://nlms.tzuchi.com.tw/'
const basePath = new URL(process.env.BASE_PATH, 'http://localhost:3000')
    .pathname.replace(/\/$/, '')

export default merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.[js]sx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            plugins: [
                                require.resolve('react-refresh/babel')
                            ].filter(Boolean)
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new DotEnv({
            path: './.env.development'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new ReactRefreshWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        port: 3000,
        host: '0.0.0.0',
        open: [`http://localhost:3000${basePath}/`],
        /* server: {
            type: 'https'
        }, */
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
        },
        historyApiFallback: {
            rewrites: [
                {
                    from: new RegExp(`^${basePath}(?:/|$)`),
                    to: `${basePath}/index.html`
                }
            ]
        },

        proxy: [
            {
                context: ['/speech'],
                target: SPEECH_DOMAIN,
                secure: true,
                changeOrigin: true
            },
            {
                context: ['/_api'],
                target: DOMAIN,
                secure: false,
                headers: {
                    Connection: 'keep-alive'
                },
                changeOrigin: true,
                bypass: (req, res) => {
                    if (req.headers && req.headers.referer) {
                        let url = new URL(req.headers.referer)
                        url.host = new URL(DOMAIN).host
                        url.port = ''
                        req.headers.referer = url.href
                    }
                    if (req.method === 'OPTIONS') {
                        res.statusCode = 200
                        return 'ok'
                    }
                }
            },
            {
                context: ['/image/'],
                target: 'https://ezgo2024.demo.csii.com.tw/mgmt/',
                secure: false,
                headers: {
                    Connection: 'keep-alive'
                },
                changeOrigin: true,
                bypass: (req, res) => {
                    if (req.headers && req.headers.referer) {
                        let url = new URL(req.headers.referer)
                        url.host = new URL(DOMAIN).host
                        url.port = ''
                        req.headers.referer = url.href
                    }
                    if (req.method === 'OPTIONS') {
                        res.statusCode = 200
                        return 'ok'
                    }
                }
            }
        ]
    }
})
