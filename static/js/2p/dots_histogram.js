function dots(data_dots,data_histogram){
    console.log(data_dots);
    console.log(data_histogram);

    var chartDom = document.getElementById('dots_histogram');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        xAxis: [{},{},{},{},{},{},{}]
        yAxis: [{},{},{},{},{},{},{}]
        series: [{
            symbolSize: 20,
            data: data_dots['pm2_5pm10'],
            type: 'scatter',
            xAxisIndex:0,
            yAxisIndex:0,
        },{
            symbolSize: 20,
            data: data_dots['pm2_5so2'],
            type: 'scatter',
            xAxisIndex:1,
            yAxisIndex:1,
        },{
            symbolSize: 20,
            data: data_dots['pm2_5no2'],
            type: 'scatter',
            xAxisIndex:2,
            yAxisIndex:2,
        },


        ]
    };

    option && myChart.setOption(option);
}