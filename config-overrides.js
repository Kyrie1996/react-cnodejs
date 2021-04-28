const { override, addWebpackAlias} = require('customize-cra');
const path = require('path')

 module.exports = override(
   addWebpackAlias({
     assets: path.resolve(__dirname, './src/assets'),
     components: path.resolve(__dirname, './src/components'),
     view: path.resolve(__dirname, './src/view'),
     style: path.resolve(__dirname, './src/style')
   })
);