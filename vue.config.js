module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Css button creator";
                return args;
            })
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/button-generator/'
        : '/'
}