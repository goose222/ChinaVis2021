function city_season_bar(data){
        var chartDom = document.getElementById('city_season_bar');
        var myChart = echarts.init(chartDom);
        var option;
        console.log(data['1']);
        var my_series=[];

        for(var year=2013;year<=2018;year++){
            for(var i=1;i<=6;i++){
                my_series.push({
                        name: i.toString(),
                        type: 'bar',
                        stack: year.toString(),
                        label: {
                            show: false
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: data[year-2013][i.toString()]
                    })
            }
        }

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // Use axis to trigger tooltip
                    type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
                }
            },
            color:['#3CB371','#F0E68C','#FF8C00','#FF6347','#A52A2A','#800000'],
            legend: {
                data: ['1', '2', '3', '4', '5','6'],
                textStyle:{
                    color:'white'
                },
            },
            grid: {
                left: '2%',
                right:'2%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['Spring','Summer','Autumn','Winter'],
                axisLabel:{
                    textStyle:{
                        color:"white", //刻度颜色
                        fontSize:8  //刻度大小
                    }
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                        color: '#0B3148',
                        width: 1,
                        type: 'solid'
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
                axisLine:{
                    show:true,
                    lineStyle:{
                        color: '#0B3148',
                        width: 1,
                        type: 'solid'
                    }
                },
            },
            series:my_series
        };
        option && myChart.setOption(option);
    }