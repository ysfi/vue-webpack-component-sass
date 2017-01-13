var config = {

    entry: {
        login: __dirname + '/src/js/login/login.js',
    },
    output: {
        path: __dirname + '/build/js/login',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.scss'],
        alias: {
            'vue$': __dirname + '/node_modules/vue/dist/vue.min.js'
        }
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', query: { presets: ['es2015'] } },
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /(\.css|\.scss)$/, loader: 'style', 'css?sourceMap', 'sass?sourceMap' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    },

}

module.exports = config
