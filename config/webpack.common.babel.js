import paths from './paths.babel'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import iconfont from 'webpack-iconfont-plugin-nodejs'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const isDev = process.env.NODE_ENV === 'development'
require('dotenv').config({
    path: `./.env.${process.env.NODE_ENV}`
})
export default {
    resolve: {
        modules: [paths.src, 'node_modules'],
        extensions: ['.js', '.jsx']
    },
    entry: [paths.src + '/index.js'],
    output: {
        filename: '[name]-[contenthash].js',
        chunkFilename: '[name]-[chunkhash].js',
        publicPath: `${process.env.BASE_PATH}/`
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: paths.public + '/images',
                    to: 'images',
                    globOptions: {
                        ignore: ['*.DS_Store']
                    },
                    noErrorOnMissing: true
                },
                {
                    from: paths.public + '/videos',
                    to: 'videos',
                    globOptions: {
                        ignore: ['*.DS_Store']
                    },
                    noErrorOnMissing: true
                },
                {
                    from: paths.public + '/files',
                    to: 'files',
                    globOptions: {
                        ignore: ['*.DS_Store']
                    },
                    noErrorOnMissing: true
                },
                {
                    from: paths.public + '/vendors',
                    to: 'vendors',
                    globOptions: {
                        ignore: ['*.DS_Store']
                    },
                    noErrorOnMissing: true
                },
                {
                    from: paths.public + '/static-api',
                    to: 'static-api',
                    globOptions: {
                        ignore: ['*.DS_Store']
                    },
                    noErrorOnMissing: true
                }
            ]
        }),
        new HtmlWebpackPlugin({
            locale: 'zh-tw',
            title: process.env.WEB_TITLE,
            description: process.env.WEB_DESCRIPTION,
            site_name: process.env.OG_SITE_NAME,
            og_url: process.env.WEB_URL,
            template: paths.public + '/index.html',
            filename: 'index.html'
        }),
        new iconfont({
            fontName: 'iconfont',
            cssPrefix: 'iconfont',
            svgs: paths.styles + '/svg/*.svg',
            template: paths.styles + '/template.hbs',
            fontsOutput: paths.styles + '/fonts/',
            cssOutput: paths.styles + '/_iconfont.scss',
            htmlOutput: false,
            jsOutput: false
        })
    ].filter(Boolean),

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                isDev && require.resolve('react-refresh/babel')
                            ].filter(Boolean)
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        sourceMap: isDev
                    }
                }
            },
            {
                test: /^(?!.*tailwind).*\.(css|scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDev
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            api: 'modern',
                            sassOptions: {
                                silenceDeprecations: [
                                    'import',
                                    'global-builtin',
                                    'legacy-js-api',
                                    'slash-div',
                                    'color-functions'
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /tailwind\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    //'sass-loader',
                    {
                        loader: 'postcss-loader', // postcss loader needed for tailwindcss
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [tailwindcss, autoprefixer]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/css/[contenthash][ext][query]'
                }
            },

            {
                test: /\.(woff(2)?|eot|ttf|otf|)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[contenthash][ext][query]'
                }
            }
        ]
    }
}
