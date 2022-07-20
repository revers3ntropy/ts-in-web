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
    devtool: 'source-map',
};