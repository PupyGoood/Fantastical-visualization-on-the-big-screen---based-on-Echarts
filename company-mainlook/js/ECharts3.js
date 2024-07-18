document.addEventListener('DOMContentLoaded', function() {
    // 数据
    var months = ['7月', '8月', '9月', '10月', '11月', '12月'];
    var data = [
        [283.0, 491.0, 2041.5, 414.0, 733.0, 1649.0],
        [1413.0, 3143.0, 1045.0, 1188.0, 2381.0, 1181.0],
        [1693.0, 3020.0, 2031.0, NaN, 271.0, 343.0],
        [4.0, 28420.0, 1684.0, 2542.0, 1984.0, 2358.0],
        [20.0, 2042.0, 100.0, 3.0, 14.0, 383.0],
        [4.0, 18205.0, 2172.0, 1082.0, 350.0, 2487.0]
    ];
    var categories = ['货品1', '货品2', '货品3', '货品4', '货品5', '货品6'];
    // 自定义颜色
    var colors = ['#3876cd', '#45b4e7', '#FAC858', '#EE6666', '#73C0DE', '#3BA272'];

    // 获取容器元素
    var chartContainer3 = document.getElementById('chartContainer3');
    var myChart = echarts.init(chartContainer3);

    // ECharts配置
    var option = {
        baseOption: {
            timeline: {
                axisType: 'category',
                autoPlay: true,
                playInterval: 1000,
                data: months,
                label: {
                    formatter: function(s) {
                        return s;
                    }
                },
                top: '150',   // 顶对齐
            },
            title: {
                text: '月度货品销售量',
                left: 'center',
                textStyle: {
                    color: '#ade6f0' // 标题颜色改为 #ade6f0
                  }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: categories,
                top: '30',
                left: 'center',
                type: 'scroll',
                orient: 'horizontal',
                textStyle: {
                    color: '#ade6f0' // 标题颜色改为 #ade6f0
                  }
            },
            grid: {
                left: '0%',
                right: '0%',
                bottom: '15%',
                containLabel: true
            },
            yAxis: {
                type: 'value',
                name: '销售量(件)',
                nameLocation:  "auto",
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
            xAxis: {
                type: 'category',
                data: categories.slice().reverse(),
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
            series: categories.slice().reverse().map((category, index) => ({
                name: category,
                type: 'bar',
                
                barWidth: '50',
                label: {
                    show: true,
                    position: 'auto',
                    // width: 50, // 设置标签框宽度
                    
                },
                itemStyle: {
                    normal: {
                        barBorderRadius:[5, 5, 5, 5],
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                              { offset: 0, color: colors[index % colors.length] }, // 起始颜色
                              { offset: 1, color: colors[(index + 1) % colors.length] } // 结束颜色
                            ]
                          )
                    },
                },
                data: []  // 初始化为空数组
            }))
        },
        options: months.map((month, monthIndex) => ({
            title: { text: '月度货品销售量 - ' + month },
            series: categories.map((category, categoryIndex) => ({
                name: category,
                data: categories.map((_, i) => ({
                    value: i === categoryIndex ? data[monthIndex][categoryIndex] : 0,
                    name: categories[i]
                }))
            }))
        }))
    };

    // 显示图表
    myChart.setOption(option);
});
