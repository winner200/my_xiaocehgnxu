//index.js
//获取应用实例
const app = getApp()
import Dialog from '../../miniprogram_npm/@vant/weapp/dist/dialog/dialog';

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
    onPullDownRefresh: function () {
        //this.dorequest()
    },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
    onShow: function () {
        app.editTabBar();    //显示自定义的底部导航
    },
    tologs: function () {     //按钮的绑定事件，点击跳转至logs
        wx.redirectTo({
            url: '../logs/logs',
        })
    },
    winner(){
        Dialog.confirm({
            title: '标题',
            message: '弹窗内容'
        }).then(() => {
            // on confirm
            console.log('我点击了确认');
        }).catch(() => {
            // on cancel
            console.log('我点击了取消了');
        });
    }
})
