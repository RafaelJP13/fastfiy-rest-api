const path = require( 'path' )
const NodemonPlugin = require('nodemon-webpack-plugin')


module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ]
    },
    target: "node",
    plugins:[new NodemonPlugin()]
}