   function rankList(ranklist){
        var province = ranklist.name;
        var chartDom = document.getElementById('ranklist');
        var myChart = echarts.init(chartDom);

        var rank_list = ranklist.data;
        console.log(rank_list)
        var rankdata = [];

        for (var i=0;i<rank_list.length;++i){
            rankdata.push(Math.round(rank_list[i][0] * 100) / 100);
        }
        console.log(rankdata)
        var option = {
            grid: {
                 left: '3%',
                 right: '3%',
                 bottom: '4%',
                 top: 10,
                containLabel: true
            },
            xAxis: {
                show: false
            },
            yAxis: {
                type: 'category',
                inverse: true,
                //城市名称
                data: province,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    color: 'white'
                },
            },
            series: [
                {
                    type: 'bar',
                    barCategoryGap:'30%',
                    stack: 'chart',
                    z: 3,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(1,
                                0, 0, 1, [{
                                    offset: 0,
                                    color: '#043682'
                                }, {
                                    offset: 1,
                                    color: '#3493f8'
                                }])
                        }
                    },
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(180, 180, 180, 0.2)'
                    },
                    label: {
                        normal: {
                            position: 'right',
                            show: true,
                            color: 'white',
                        }
                    },
                    data: rankdata
                }]
        };

        console.log("rankdata:", rankdata);
        // console.log(option);
        myChart.setOption(option);
    }