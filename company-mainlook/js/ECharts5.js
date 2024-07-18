var chartDom = document.getElementById('all_present');
var myChart = echarts.init(chartDom);
var option;

// Data: 拒货率、合格率、返修率
const data1 = [ [0.45, 0.23, 0.13, 0, 0.07, 0.18] ];
const data2 = [ [0.35, 0.56, 0.79, 0.16, 0.77, 0.78] ];
const data3 = [ [0.17, 0.17, 0.08, 0.84, 0.15, 0.04] ];

const lineStyle = {
  width: 1,
  opacity: 0.5
};

option = {
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      return `${params.seriesName}<br/>${params.name}: ${params.value}`;
    }
  },
//   legend: {
//     left: 'left',
//     bottom: 5,
//     data: ['拒货率', '合格率', '返修率'],
//     itemGap: 20,
//     textStyle: {
//       color: '#fff',
//       fontSize: 14
//     },
//     selectedMode: 'single'
//   },
  radar: {
    center: ['50%', '50%'],
    radius: '55%',
    indicator: [
      { name: '货品1', max: 1 },
      { name: '货品2', max: 1 },
      { name: '货品3', max: 1 },
      { name: '货品4', max: 1 },
      { name: '货品5', max: 1 },
      { name: '货品6', max: 1 }
    ],
    shape: 'circle',
    splitNumber: 5,
    axisName: {
      color: 'rgb(238, 197, 102)'
    },
    splitLine: {
      lineStyle: {
        color: [
          'rgba(238, 197, 102, 0.1)',
          'rgba(238, 197, 102, 0.2)',
          'rgba(238, 197, 102, 0.4)',
          'rgba(238, 197, 102, 0.6)',
          'rgba(238, 197, 102, 0.8)',
          'rgba(238, 197, 102, 1)'
        ].reverse()
      }
    },
    splitArea: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(238, 197, 102, 0.5)'
      }
    }
  },
  series: [
    {
      name: '拒货率',
      type: 'radar',
      lineStyle: lineStyle,
      data: data1,
      symbol: 'circle',
      symbolSize: 4,
      itemStyle: {
        normal: {
                    barBorderRadius: [5, 5, 5, 5],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#FAC858'},
                            {offset: 0.5, color: '#FAC858'},
                            {offset: 1, color: '#FAC858'}
                        ]
                    )
                }
      },
      areaStyle: {
        opacity: 0.1
      }
    },
    {
      name: '合格率',
      type: 'radar',
      lineStyle: lineStyle,
      data: data2,
      symbol: 'circle',
      symbolSize: 4,
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
      areaStyle: {
        opacity: 0.05
      }
    },
    {
      name: '返修率',
      type: 'radar',
      lineStyle: lineStyle,
      data: data3,
      symbol: 'circle',
      symbolSize: 4,
      itemStyle: {
        normal: {
            barBorderRadius: [5, 5, 5, 5],
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    {offset: 0, color: '#3BA272'},
                    {offset: 0.5, color: '#3BA272'},
                    {offset: 1, color: '#3BA272'}
                ]
            )
        }
      },
      areaStyle: {
        opacity: 0.05
      }
    }
  ]
};

option && myChart.setOption(option);
