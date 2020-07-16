// pages/password/password.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        typeName: 'password', // 密码框的类型,用于显示密码时更改类型可看见输入的密码而非*号
        passFlag: 1,    // 密码第几次点击代表,用于显示不同的图标
        storePass: '',  // 暂存密码,用于显示密码
    },
    showPass() {     // 显示密码而非*号
        console.log(this.data.storePass)
        if (this.data.passFlag == 1) { // 第一次点击
            this.setData({ passFlag: 2, typeName: 'text' });
        } else {                        // 第二次点击
            this.setData({ passFlag: 1, typeName: 'password' });
        }
    },
    passWordInput(e) {    // 监听密码input框并把输入的密码在变量storePass下暂存起来,用于在显示密码操作展示
        console.log(e.detail.value)

        this.setData({
            storePass: e.detail.value,
            passWord: e.detail.value
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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