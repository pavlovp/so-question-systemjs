const path = require('path');

module.exports = {
    mode: "development",
    entry: 
    {
        app:  "./app/index.js",
        lib: "./lib"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        libraryTarget: 'system'
    },
    externals: {
        jquery: 'jQuery',
        lib: 'lib'
    },
    module: {
        rules: [
          { parser: { system: false } }
        ]
      }
}
