// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    config:{
      content :[],
      titles: ['id', '名字', '年龄', '学校'],
      props : ['id', 'name', 'age', 'school'],
      columnWidths: ['80rpx', '140rpx', '120rpx','390rpx'],
      border: true,
      stripe : true,
      // headbgcolor : '#dddddd'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let  content = [
      {
        id: 1,
        name: 'pxh',
        age: 13,
        school: '暨南大学计算机'
      },
      {
        id: 2,
        name: 'ap',
        age: 12,
        school: '中山大学'
      },
      {
        id: 3,
        name: 'cf',
        age: 12,
        school: '华南农业大学'
      },
      {
        id: 4,
        name: '林江',
        age: 14,
        school: '上海交通大学'
      }
    ]
    let that = this
    // 此处模拟网络请求
    setTimeout(function(){
      that.setData({
        'config.content' : content
      })
    },1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})