document.getElementById('toggle1').addEventListener('click', function() {
    var table = document.querySelector('.charts-content1');
    var chartContainer = document.getElementById('sales');
    if (table.style.display === 'none') {
        table.style.display = '';
        chartContainer.style.display = 'none';
        this.textContent = '图表';
    } else {
        table.style.display = 'none';
        chartContainer.style.display = '';
        this.textContent = '表格';
        if (!chartContainer.dataset.chartInitialized) {
            initChart1();
            chartContainer.dataset.chartInitialized = 'true';
        }
    }
});

function initChart1() {
    var chartDom = document.getElementById('sales');
    var myChart = echarts.init(chartDom);

    const option = {
        title: {
            text: '产品销售情况',
            left: 'center',
            textStyle: {
                color: '#ade6f0' // 标题颜色改为 #ade6f0
            }
        },
        grid: {
            left: '0%',
            right: '3%',

            bottom: '3%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' }
        },
        xAxis: {
            type: 'category',
            data: ['货品3', '货品1', '货品2', '货品6', '货品5', '货品4'],
            axisLabel: { color: '#ade6f0' },
            axisLine: { lineStyle: { color: '#ade6f0' } }
        },
        yAxis: {
            type: 'value',
            name: '销售量(件)',
            axisLabel: { color: '#ade6f0' },
            axisLine: { lineStyle: { color: '#ade6f0' } },
            splitLine: { lineStyle: { color: '#ade6f0' } }
        },
        series: [
            {
            data: [9073, 3417, 55321, 8401, 5733, 5229],
            tooltip: {
                show: false
            },
            type: 'bar',
            showBackground: false,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            },
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#83bff6' },
                    { offset: 0.5, color: '#188df0' },
                    { offset: 1, color: '#188df0' }
                ])
            },
            label: {
                show: true,
                position: 'top',
                formatter: function(params) {
                    const amounts = [5205, 4621, 3053, 595, 304, 242];
                    return `${amounts[params.dataIndex]}万`;
                },
                color: '#ade6f0'
            }
        },
        {
            name: '销售量(件) ',
            type: 'line',
            data: [9073, 3417, 55321, 8401, 5733, 5229],
            itemStyle: {
                normal: {
                    color: '#54ffff',
                }
            },
        }
    ]
    };

    option && myChart.setOption(option);
}

document.getElementById('toggle2').addEventListener('click', function() {
    var table = document.querySelector('.charts-content2');
    var chartContainer = document.getElementById('region');
    if (table.style.display === 'none') {
        table.style.display = '';
        chartContainer.style.display = 'none';
        this.textContent = '图表';
    } else {
        table.style.display = 'none';
        chartContainer.style.display = '';
        this.textContent = '表格';
        if (!chartContainer.dataset.chartInitialized) {
            initChart2();
            chartContainer.dataset.chartInitialized = 'true';
        }
    }
});

function initChart2() {
    var chartDom = document.getElementById('region');
    var myChart = echarts.init(chartDom);

    const option = {
        title: {
            text: '各地区销售情况',
            left: 'center',
            textStyle: {
                color: '#ade6f0'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['销售数量', '销售金额'],
            top: '30',
            left: 'center',
            type: 'scroll',
            textStyle: {
                color: '#ade6f0' // 标题颜色改为 #ade6f0
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '0%',
            right: '0%',
            width: '95%',
            bottom: '15%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['华北', '华东', '华南', '西北', '马来西亚', '泰国'],
                name: '地区',
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
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '(件、元)',
                nameTextStyle: {
                    color: '#54ffff',
                    padding: 0
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
            }
        ],
        series: [
            {
                name: '销售数量',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [11900, 53811, 579, 5240, 9911, 5733],
                itemStyle: {
                    normal: {
                        barBorderRadius: [5, 5, 5, 5],
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                { offset: 0, color: '#b7db73' },
                                { offset: 0.5, color: '#b7db73' },
                                { offset: 1, color: '#b7db73' }
                            ]
                        )
                    }
                },
            },
            {
                name: '销售金额',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [63432275, 29319629, 24552774, 12706615, 7163935, 3036526],
                itemStyle: {
                    normal: {
                        barBorderRadius: [5, 5, 5, 5],
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                { offset: 0, color: '#ade6f0' },
                                { offset: 0.5, color: '#54ffff' },
                                { offset: 1, color: '#45b4e7' }
                            ]
                        )
                    }
                },
            }
        ]
    };

    option && myChart.setOption(option);
}
