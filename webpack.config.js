var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    NyanProgressPlugin = require('nyan-progress-webpack-plugin');

var production = process.argv.indexOf("--production") > -1;

module.exports = {
    server: {
        port: 3000,
        url: 'localhost',
        hot: true,
        historyApiFallback: true,
    },
    entry: production ? ['./src/index'] :
        ['webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server', './src/index'],
    output: {
        path: path.join(__dirname, '__build__'),
        filename: 'app.js',
        publicPath: '/__build__/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss'],
        modulesDirectories: [
            'src/web_modules',
            'node_modules',
            'src/assets',
            'src/scripts',
            'src/scripts/containers'
        ]
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: production ? ['babel'] : ['react-hot', 'babel'],
            include: path.join(__dirname, 'src')
        },{
            test: /\.(scss|css)$/,
            loader: ExtractTextPlugin.extract('style', 'css!postcss!sass?outputStyle=expanded&' +
                      'includePaths[]=' +
                        (path.resolve(__dirname, './src/assets/fonts/')) + '&' +
                      'includePaths[]=' +
                        (path.resolve(__dirname, './src/assets/stylesheets/')) + '&' +
                      'includePaths[]=' +
                        (path.resolve(__dirname, './src/assets/images/'))
        )},{
            test: /.*\.(gif|png|jpe?g|svg)$/i,
            loaders: [
              'url?limit=10000&name=[name]-[sha512:hash:base64:7].[ext]',
              'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
            ]
        },{
            test: /.*\.(ttf|woff)$/i,
            loader: 'file?name=[name].[ext]'
        }]
    },
    plugins: [
        new NyanProgressPlugin(),
        new ExtractTextPlugin('style.css', {disable: !production}),
        new webpack.DefinePlugin({
           __PROD__: production
         }),
    ].concat(
        production ? [
            new webpack.optimize.UglifyJsPlugin({
              compress: {
                warnings: false,
              },
            }),
        ] : [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ]
    ),
    postcss : function(){
        var autoprefixer = require('autoprefixer-core');
        return [
            autoprefixer({ browsers: ['last 2 versions'] })
        ];
    }

};
