function api_bar(data){
    var chartDom = document.getElementById('api_bar');
    var myChart = echarts.init(chartDom);
    var option;
    console.log(data)
    var myseries=[];
    var polution = ['pm10','pm2_5','so2','no2','co','o3']

    for(var i=0;i<12;i++){
        myseries.push({ name:polution[i],type: 'bar',
                stack: 'total',
                label: {
                    show: false,
                },
                emphasis: {
                    focus: 'series'
                },
                data: data[polution[i]]})
    }

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // Use axis to trigger tooltip
                type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        legend: {
            textStyle: {
                color: '#ffffff'
            },
            data: polution
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['01','02','03','04','05','06','07','08','09','10','11','12'],
            axisLabel:{
                textStyle:{
                    color:"white", //刻度颜色
                    fontSize:8  //刻度大小
                    }
            },
        },
        yAxis: {
            type: 'value',
            axisLabel:{
                textStyle:{
                    color:"white", //刻度颜色
                    fontSize:8  //刻度大小
                    }
            },
        },
        series:myseries
    };
    option && myChart.setOption(option);
}