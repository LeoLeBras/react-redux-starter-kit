import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import PathRewriterPlugin from 'webpack-path-rewriter';
import Clean from 'clean-webpack-plugin';
import NyanProgressPlugin from 'nyan-progress-webpack-plugin';

const dev = process.env.NODE_ENV === 'DEV' ? true : false;
const debug = process.env.DEBUG === 'true' ? true : false;
const production = process.env.NODE_ENV === 'PROD' ? true : false;

export default {
    devTools: dev ? 'eval' : '',
    server: {
        port: 8000,
        url: 'localhost',
        hot: true,
        historyApiFallback: true
    },
    entry: production ? ['./src/index'] :
        ['webpack-hot-middleware/client', './src/index'],
    output: {
        path: path.join(__dirname, '__build__'),
        filename: production ? 'app-[hash].js' : 'app.js',
        publicPath: ''
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        modulesDirectories: [
            'node_modules',
            'src/web_modules',
            'src/assets',
            'src/assets/stylesheets/base',
            'src/scripts',
            'src/scripts/views',
            'src/scripts/containers'
        ]
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.json?$/,
            loaders: ['json']
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                'style',
                'css?modules&importLoaders=1&localIdentName=' + (dev ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:8]') + '!' +
                'postcss'
            )
        },
        {
            test: /.*\.(gif|png|jpe?g|svg)$/i,
            loaders: [
              'url?limit=1000&name=[name]-[sha512:hash:base64:7].[ext]',
              'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
            ]
        },
        {
            test: /.*\.(woff|woff2)$/i,
            loader: 'url?limit=1500&name=[name].[ext]'
        },
        {
            test: /[.]html$/,
            loader: PathRewriterPlugin.rewriteAndEmit({
                name: '[name].html'
            })
        }]
    },
    plugins: [
        new NyanProgressPlugin(),
        new PathRewriterPlugin(),
        new ExtractTextPlugin('app-[hash].css', { disable: dev }),
        new webpack.DefinePlugin({
           __PROD__: production,
           __DEV__: dev,
           __DEBUG__: debug
         })
    ].concat(
        production ? [
            new webpack.optimize.UglifyJsPlugin(),
            new Clean(['__build__'])
        ] : [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ]
    ),
    postcss: () => ([
        require('autoprefixer')({
            browsers: '> 98%'
        })
    ])
};
