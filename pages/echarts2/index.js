// pages/echarts2/index.js
import * as echarts from '../../components/ec-canvas/echarts';

function initChart(canvas, width, height) {
    const chart = echarts.init(canvas, null, {
      width: width,
      height: height
    });
    canvas.setChart(chart);
    var option = {
        title: [{
            left: 'center',
            text: 'Gradient along the y axis'
        }],
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            data: ['2020-05-5','2020-05-5','2020-05-5','2020-05-5','2020-05-5','2020-05-5','2020-05-5','2020-05-5','2020-05-5','2020-05-5','2020-05-5','2020-05-5'],
            //设置X轴数据
            axisLabel:{
                interArrival:0,//数据全部显示
                rotate:50//倾斜度
            },
            axisLine:{
                lineStyle:{
                    'color':'red',
                    'width':2
                }
            }
        },
        yAxis: [{
            splitLine: {show: false},
            type: 'value',
            scale: true,
            name: '销量',
            max: 200,//最大值
            min: 0,//最小值
            splitNumber:5,
            // interval:0
            boundaryGap: [0.2,0.2],
            axisLabel:{
                formatter:'{value}钱'
            }
        }],
        grid: [
            {
                bottom: '60%'
            }, 
            {
                top: '100%'
            }
        ],
        series: [{
            type: 'line',
            showSymbol: false,
            data: [100,60,80,50,300,80,100,60,80,200,90,100,100,60,80,200,300,500]
        }]
    };
    chart.setOption(option);
    return chart;
  }
Page({

    /**
     * 页面的初始数据
     */
    data: {
        ec: {
            onInit: initChart
          }
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