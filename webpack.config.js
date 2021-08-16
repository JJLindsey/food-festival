const path = require('path');
//webpack's methods and properties into the config file
const webpack  = require('webpack');

module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    //nside the empty array, need to tell webpack which plugin to use. provide plugin to define the $ and jQuery variables to use the installed npm package
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],
    mode: 'development'
};

