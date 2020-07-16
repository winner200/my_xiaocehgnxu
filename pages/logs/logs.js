//logs.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
    onShow: function () {
        app.editTabBar();
    },
    tologs: function () {     //按钮的绑定事件，点击跳转至logs
        wx.redirectTo({
            url: '../logs/logs',
        })
    },
})
