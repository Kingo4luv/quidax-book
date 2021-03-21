var webpack = require('webpack');
module.exports = {
    plugins: [
        new webpack.DefinePlugin({
             $: 'jquery',
                 jQuery: 'jquery',
                 'window.jQuery': 'jquery'
        }),
    ],
};