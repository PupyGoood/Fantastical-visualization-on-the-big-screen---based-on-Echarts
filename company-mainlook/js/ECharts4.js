var chartDom = document.getElementById('all_orders');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: '运单数量',
        left: 'center',
        textStyle: {
            color: '#ade6f0'
        }
    },
    grid: {
        left: '15%',
        right: '10%',
        top: '20%',
        bottom: '30%'
    },
    yAxis: {
        type: 'category',
        data: ['运单数'],
        axisLine: {
            lineStyle: {
                color: '#ade6f0' // y轴颜色
            }
        },
        axisLabel: {
            textStyle: {
                color: '#ade6f0' // y轴标签颜色
            }
        }
    },
    xAxis: {
        type: 'value',
        name: '数量',
        nameLocation: 'middle',
        nameTextStyle: {
            color: '#ade6f0',
            padding: 20
        },
        axisLine: {
            lineStyle: {
                color: '#ade6f0' // x轴颜色
            }
        },
        axisLabel: {
            textStyle: {
                color: '#ade6f0' // x轴标签颜色
            }
        },
        axisTick: {
            show: true
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            return `${params[0].name} : ${params[0].value}`;
        }
    },
    series: [
        {
            data: [88699],
            type: 'bar',
            barWidth: '20%', // 条形的宽度，可以调整为你需要的比例或像素值
            itemStyle: {
                normal: {
                    barBorderRadius: [5, 5, 5, 5],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#ade6f0'},
                            {offset: 0.5, color: '#54ffff'},
                            {offset: 1, color: '#45b4e7'}
                        ]
                    )
                }
            },
            label: {
                show: true,
                position: 'inside', // 将标签显示在条形内部
                textStyle: {
                    color: '#ade6f0'
                },
                formatter: '{c}' // 显示数据值
            }
        }
    ]
};

option && myChart.setOption(option);

window.addEventListener('resize', myChart.resize);
