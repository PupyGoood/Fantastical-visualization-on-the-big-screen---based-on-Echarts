document.addEventListener('DOMContentLoaded', function() {
    let isChartDisplayed = false; // 状态变量
    let myChart = null; // ECharts实例变量

    document.getElementById('toggleButton1').addEventListener('click', function() {
        var originalContainer = document.getElementById('originalData1');
        var chartContainer = document.getElementById('chartContainer1');

        if (isChartDisplayed) {
            // 显示原有组件，隐藏图表容器
            originalContainer.style.display = 'block';
            chartContainer.style.display = 'none';
            // 销毁ECharts实例
            if (myChart) {
                myChart.dispose();
                myChart = null;
            }
        } else {
            // 隐藏原有组件，显示图表容器并初始化图表
            originalContainer.style.display = 'none';
            chartContainer.style.display = 'block';

            // 确保容器有合适的尺寸
            chartContainer.style.width = '260px';
            chartContainer.style.height = '180px';

            // 初始化ECharts实例
            myChart = echarts.init(chartContainer);

            // 配置ECharts的选项
            var option = {
                title: {
                    // text: '今日运单数量',
                    // subtext: '堆叠柱状图',
                    left: "left",
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    formatter: function (params) {
                        var res = params[0].name + '<br/>';
                        for (var i = 0; i < params.length; i++) {
                            res += params[i].marker + params[i].seriesName + ': ' + params[i].value + '<br/>';
                        }
                        // 计算交货率并添加到提示框
                        var onTimeDeliveryRate = (params[0].value / (params[0].value + params[1].value)).toFixed(3);
                        res += '按时交货率: ' + onTimeDeliveryRate;
                        return res;
                    }
                },
                legend: {
                    data: ['按时交货', '晚交货'],
                    left: 'left',
                    textStyle: {
                        color: '#ade6f0' // 标题颜色改为 #ade6f0
                      }
                },
                grid: {
                    left: '1%',
                    right: '0%',
                    width: '84%',
                    bottom: '0%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    name: '月份',
                    data: ['7月', '8月', '9月', '10月', '11月', '12月'],
                    nameTextStyle: {
                        color: '#54ffff'
                    },
                    axisLine: {
                        lineStyle: {
                          color: '#ade6f0' // y轴轴线颜色改为 #ade6f0
                        }
                      },
                      axisTick: {
                        lineStyle: {
                          color: '#ade6f0' // y轴刻度线颜色改为 #ade6f0
                        }
                      },
                      axisLabel: {  
                        color: '#ade6f0' // y轴刻度标签颜色改为 #ade6f0
                      }
                },
                yAxis: {
                    type: 'value',
                    name: '数量（件）',
                    nameTextStyle: {
                        color: '#54ffff'
                    },
                    axisLine: {
                        lineStyle: {
                          color: '#ade6f0' // y轴轴线颜色改为 #ade6f0
                        }
                      },
                      axisTick: {
                        lineStyle: {
                          color: '#ade6f0' // y轴刻度线颜色改为 #ade6f0
                        }
                      },
                      axisLabel: {
                        color: '#ade6f0' // y轴刻度标签颜色改为 #ade6f0
                      }
                },
                series: [
                    {
                        name: '按时交货',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            show: true,
                            position: 'insideLeft'
                        },
                        data: [189, 218, 122, 238, 101, 146],
                        itemStyle: {
                            normal: {
                                barBorderRadius:[5, 5, 5, 5,5],
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#3876cd'},
                                        {offset: 0.5, color: '#45b4e7'},
                                        {offset: 1, color: '#54ffff'}
                                    ]
                                ),
                            },
                        },
                    },
                    {
                        name: '晚交货',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            show: true,
                            position: 'insideLeft'
                        },
                        data: [13, 35, 9, 31, 25, 18],
                        itemStyle: {
                            normal: {
                                barBorderRadius:[5, 5, 5, 5,5],
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#32ffc7'},
                                        {offset: 0.5, color: '#32ffc7'},
                                        {offset: 1, color: '#32ffc7'}
                                    ]
                                ),
                            },
                        },
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }

        isChartDisplayed = !isChartDisplayed; // 切换状态
    });
});
