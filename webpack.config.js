const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/app.js', // arquivo de entrada

    output:{
        filename: 'app.js', // arquivo de saída
        path: __dirname + '/public' // pasta de destino
    },

    devServer:{ // propriedades do servidor de desenvolvimento
        contentBase: './src/assets',
        port: 1000
    },

    optimization:{ // loaders de compactação de js e css
        minimizer:[
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    plugins:[
        new MiniCssExtractPlugin({filename: 'estilo.css'}), // plugin que coloca o css em um arquivo esterno à app.js
        new CopyWebpackPlugin([ // plugin que copia diversos arquivos para a pasta de build
            {context: 'src/assets/', from: '**/*.html' },
            {context: 'src/', from: 'imgs/**/*'}
        ])
    ],

    module:{
        rules:[ // regras de processamento de moduos
            {   // css
                test: /\.s[ac]ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            { // imagens
                test: /\.(png|svg|jpg|gif)$/,
                use:   {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '/img'
                    }
                 }
            },
            { // arquivos de fontes
                test: /.(ttf|otf|eot|svg|woff(2)?)$/,
                use: ['file-loader']
            }
        ]
    }
}