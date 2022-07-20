import webpack from 'webpack';

export default {
    entry: './index.js',
    resolve: {
        extensions: ['.js'],
    },

    output: {
        filename: 'out.js',
        library: 'es',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    mode: 'production',
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
};