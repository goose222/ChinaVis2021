  function draw_climate_bar(rawdata) {
        var chartDom = document.getElementById('climate_bar');
        var myChart = echarts.init(chartDom);
        var option;


        var data = rawdata.data;
        var dates = rawdata.date;

        option = {

            visualMap: {
                orient: 'horizontal',
                left: 'center',
                min: 0,
                max: 180,
                // Map the score column to color
                dimension: 0,
                inRange: {
                    color: ['#9370DB','#56A3F1','#65B581', '#FFCE34', '#FD665F']
                }
            },
            color: ['#FFE434', '#56A3F1', '#FF917C'],
            legend: {
                show: true,
                data: ['温度', '相对湿度','地面气压'],
                textStyle:{
                    color:'white'
                },
            },
            angleAxis: {
                type: 'category',
                data: dates,
//                show:false,
                axisLabel:{
                    textStyle:{
                        color:"white", //刻度颜色
                        fontSize:5  //刻度大小
                    }
                },
            },
            tooltip: {
                show: true,
                formatter: function (params) {
                    var id = params.dataIndex;
                    return dates[id] + '<br>气温：' + (data[id][0]-273.15)+ '<br>相对湿度：' + data[id][1] + '%<br>地面气压：' + data[id][2];
                }
            },
            radiusAxis: {
//                show:false,
                axisLabel:{
                    textStyle:{
                        color:"white", //刻度颜色
                        fontSize:10  //刻度大小
                    }
                },
            },
            polar: {
            },
            series: [ {
                type: 'bar',
                data: data.map(function (d) {
                    return (d[0]-273.15);
                }),
                coordinateSystem: 'polar',
                name: '温度',
            },{
                type: 'bar',
                data: data.map(function (d) {
                    return d[1];
                }),
                coordinateSystem: 'polar',
                name: '相对湿度',
            },{
                type: 'bar',
                data: data.map(function (d) {
                    return (d[2]-100000)/20;
                }),
                coordinateSystem: 'polar',
                name: '地面气压',
            }]
        };
        option && myChart.setOption(option);
   }
