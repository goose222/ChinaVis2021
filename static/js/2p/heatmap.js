function draw_correlation_heatmap(){
    var chartDom = document.getElementById('corre_heatmap');
    var myChart = echarts.init(chartDom);
    var option;

    var ys = ['pm10','pm2_5','so2','no2','co','o3'];
    var dataxs = ['temp','rh','psfc','ws'];

    var data = [[0, 0, 0.53], [0, 1, 0.04], [0, 2, 0.49], [0, 3, -0.33], [1, 0, 0.55], [1, 1, 0.1], [1, 2, 0.52], [1, 3, -0.31], [2, 0, 0.38], [2, 1, 0.07], [2, 2, 0.43], [2, 3, -0.29], [3, 0, 0.51], [3, 1, 0.06], [3, 2, 0.55], [3, 3, -0.29], [4, 0, 0.53], [4, 1, 0.14], [4, 2, 0.55], [4, 3, -0.32], [5, 0, -0.28], [5, 1, -0.26], [5, 2, -0.78], [5, 3, 0.41]]
    data = data.map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });

    option = {
        tooltip: {
            position: 'top'
        },

        grid: {
            height: '50%',
            top: '10%'
        },
        xAxis: {
            type: 'category',
            data: dataxs,
            axisLabel:
                {color:'white'},

            splitArea: {
                show: true
            }
        },
        yAxis: {
            axisLabel:
                {color:'white'},
            type: 'category',
            data: ys,
            splitArea: {
                show: true
            }
        },
        visualMap: {
            min: -1,
            max: 1,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '15%'
        },
        series: [{
            name: 'Punch Card',
            type: 'heatmap',
            data: data,
            label: {
                show: true,
                color:'white',
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'white'
                }
            }
        }]
    };

    option && myChart.setOption(option);

}