const HtmlWebpack = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
module.exports = {
    mode:"production",
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'../dist'),
        filename:'[name].js'
    },
    module:{
        rules:[{
            test:/\.js$/,
            use:['babel-loader']
        },{
            test:/\.css$/,
            use:['style-loader','css-loader']
        },{
            test:/\.(png|jpe?g|gif|webp)$/,
            use:[{
                loader:'file-loader'
            }]
        }]
    },
    plugins:[
        new HtmlWebpack({
            template: path.join(__dirname,'../public/index.html'),
            filename:'index.html'
        }),
        new CopyWebpackPlugin({
            patterns:[{
                from:'static',to:"static"
            }]
        }),
        new CleanWebpackPlugin()
    ]
}