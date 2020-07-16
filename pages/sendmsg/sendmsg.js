let timeId = null;
Page({
    data: {
        sendmsg: "sendmsg",
        getmsg: "获取短信验证码",
    },
    sendmessg: function (e) {
        var timer = 1;
        if (timer == 1) {
            timer = 0
            var that = this
            var time = 60
            that.setData({
                sendmsg: "sendmsgafter",
            })
            var inter = setInterval(function () {
                that.setData({
                    getmsg: time + "s后重新发送",
                })
                time--
                if (time < 0) {
                    timer = 1
                    clearInterval(inter)
                    that.setData({
                        sendmsg: "sendmsg",
                        getmsg: "获取短信验证码",
                    })
                }
            }, 1000)
        }
    },
})