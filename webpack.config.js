const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('./dist/build/')
    .setPublicPath('./')
    .setManifestKeyPrefix('./')
    // .setPublicPath('/build')
    .addEntry('app', './assets/scripts/app.js')
    .addEntry('second', './assets/scripts/second.js')
    .enableSassLoader()
    // .splitEntryChunks()
    // .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications(false)
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(false)
    .configureBabel((babelConfig) => {
        babelConfig.plugins.push('@babel/plugin-transform-runtime');
    }, {
        useBuiltIns: 'usage',
        corejs: 3
    })
    .copyFiles({
        from: './assets/images',
        to: 'images/[path][name].[ext]'
    })
;

module.exports = Encore.getWebpackConfig();
