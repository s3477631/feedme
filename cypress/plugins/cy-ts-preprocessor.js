const wp = require('@cypress/browserify-preprocessor')

const webpackOptions = {
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    }
}

const options = {
    webpackOptions
}

module.exports = wp(options)
