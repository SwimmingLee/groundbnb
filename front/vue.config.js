module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy:{
      '/api':{
        target:'http://70.12.227.91:3000/api',
        changeOrigin: true,
        pathRewrite:{
          "^/api":''
        }
      }
    }
  }
}