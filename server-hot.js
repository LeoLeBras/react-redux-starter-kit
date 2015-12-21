import path from 'path';
import express from 'express';
import webpack from 'webpack';
import config from './webpack.config.babel';

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'hot.html'));
});

app.listen(config.server.port, 'localhost', function (err) {
    if(err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:' + config.server.port);
});
