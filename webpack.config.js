//webpack's methods and properties into the config file
const webpack  = require('webpack');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = {
    entry: {
        app: './assets/js/script.js',
        events: './assets/js/events.js',
        schedule: './assets/js/schedule.js',
        tickets: './assets/js/tickets.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + 'dist'
    },
    //nside the empty array, need to tell webpack which plugin to use. provide plugin to define the $ and jQuery variables to use the installed npm package
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static', //report outputs HTML file in dist folder
        })
    ],
    mode: 'development'
};

