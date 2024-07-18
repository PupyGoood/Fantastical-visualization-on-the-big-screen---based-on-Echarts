document.addEventListener('DOMContentLoaded', function() {
    let isChartDisplayed = false; // 状态变量
    let myChart = null; // ECharts实例变量

    document.getElementById('toggleButton').addEventListener('click', function() {
        var originalContainer = document.getElementById('originalData');
        var chartContainer = document.getElementById('chartContainer');
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
            chartContainer.style.height = '160px';

            // 初始化ECharts实例
            myChart = echarts.init(chartContainer);

            // 配置ECharts的选项
            var option = {
                title: {
                    subtext: '用户反馈情况玫瑰饼图',
                    subtextStyle: {
                        color: '#54ffff'
                    },
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)' // 提示框中显示百分比
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    textStyle: {
                        color: '#54ffff'
                    },
                    formatter: function(name) {
                        var colorMap = {
                            '质量合格': '#54ffff',
                            '返修': '#3BA272',
                            '拒货': '#FAC858'
                        };
                        return `{name|${name}}`;
                    },
                    textStyle: {
                        rich: {
                            name: {
                                color: function(name) {
                                    var colorMap = {
                                        '质量合格': '#54ffff',
                                        '返修': '#3BA272',
                                        '拒货': '#FAC858'
                                    };
                                    return colorMap[name] || '#fff';
                                },
                                fontSize: 12
                            }
                        }
                    }
                },
                series: [
                    {
                        name: '货品用户反馈情况',
                        type: 'pie',
                        radius: ['10%', '50%'], // 设置内外半径
                        roseType: 'radius', // 设置南丁格尔玫瑰图的类型
                        data: [
                            {
                                value: 787, name: '质量合格',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1,
                                            [
                                                {offset: 0, color: '#54ffff'},
                                                {offset: 0.5, color: '#54ffff'},
                                                {offset: 1, color: '#54ffff'}
                                            ]
                                        ),
                                    },
                                },
                            },
                            {
                                value: 185, name: '返修',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1,
                                            [
                                                {offset: 0, color: '#73C0DE'},
                                                {offset: 0.5, color: '#73C0DE'},
                                                {offset: 1, color: '#3BA272'}
                                            ]
                                        ),
                                    }
                                }
                            },
                            {
                                value: 189, name: '拒货',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1,
                                            [
                                                {offset: 0, color: '#FAC858'},
                                                {offset: 0.5, color: '#FAC858'},
                                                {offset: 1, color: '#FAC858'}
                                            ]
                                        ),
                                    }
                                }
                            }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 0,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            },
                            label: {
                                show: true
                              }
                        },
                        label: {
                            show:false,
                            normal: {
                                formatter: function(params) {
                                    return `{value|${params.percent}%}`;
                                },
                                rich: {
                                    name: {
                                        color: function(params) {
                                            var colorMap = {
                                                '质量合格': '#54ffff',
                                                '返修': '#54ffff',
                                                '拒货': '#54ffff'
                                            };
                                            return colorMap[params.name] || '#fff';
                                        },
                                        fontSize: 12
                                    },
                                    value: {
                                        color: '#54ffff',
                                        fontSize: 12
                                    }
                                }
                            }
                        }
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }

        isChartDisplayed = !isChartDisplayed; // 切换状态
    });
});
