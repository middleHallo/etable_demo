//app.js
// var App = require('./utils/xmadx_sdk.min.js').xmad(App, 'App').xmApp;
App({
  onLaunch: function () {

   
  },

  onError(err){
    console.log(err)
  },

  globalData: {
    userInfo: null,
    baseurl: 'https://xcxa.guokehuyu.com/wlsx/'
  }
})