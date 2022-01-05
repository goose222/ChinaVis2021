
    function draw_wind_rose(data) {
        var chartDom = document.getElementById('windRose');
        var myChart = echarts.init(chartDom);
        var option;
        var tmp=[];
        for (var i=0;i<4;i++){
            tmp.push(Math.max.apply(null,data[i]))
        }
        var max=Math.max.apply(null,tmp);

        option = {
            color: [ '#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
            title: {
                text: ''
            },
            legend: {
                data: ['Spring','Summer','Autumn','Winter'],
                textStyle:{
                    color:'white'
                },
                orient:'vertical',
                top:20,
				right:0,
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top:'5%',
                containLabel: true
            },
            radar: [
                {
                    indicator: [
                        { text: '正北', max: max },
                        { text: '西北', max: max },
                        { text: '正西', max: max },
                        { text: '西南', max: max },
                        { text: '正南', max: max },
                        { text: '东南', max: max },
                        { text: '正东', max: max },
                        { text: '东北', max: max },
                    ],
                    center: ['50%', '45%'],
                    radius: 120,
                    name: {
                        textStyle: {
                            color: '#fff',
                            backgroundColor: '#666',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    }
                }
            ],
            series: [
                {
                    name: '成绩单',
                    type: 'radar',
                    data: [
                        {
                            value: data[0],
                            name: 'Spring',
                            areaStyle: {
                                color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                                    {
                                        color: 'rgba(255, 145, 124, 0.1)',
                                        offset: 0
                                    },
                                    {
                                        color: 'rgba(255, 145, 124, 0.9)',
                                        offset: 1
                                    }
                                ])
                            }
                        },
                        {
                            value: data[1],
                            name: 'Summer',
                            areaStyle: {
                                color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                                    {
                                        color: 'rgba(100,149,237, 0.1)',
                                        offset: 0
                                    },
                                    {
                                        color: 'rgba(100,149,237, 0.9)',
                                        offset: 1
                                    }
                                ])
                            }
                        },
                        {
                            value: data[2],
                            name: 'Autumn',
                            areaStyle: {
                                color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                                    {
                                        color: 'rgba(50,205,50, 0.1)',
                                        offset: 0
                                    },
                                    {
                                        color: 'rgba(50,205,50, 0.9)',
                                        offset: 1
                                    }
                                ])
                            }
                        },
                        {
                            value: data[3],
                            name: 'Winter',
                            areaStyle: {
                                color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                                    {
                                        color: 'rgba(218,165,32, 0.1)',
                                        offset: 0
                                    },
                                    {
                                        color: 'rgba(218,165,32, 0.9)',
                                        offset: 1
                                    }
                                ])
                            }
                        },
                    ]
                }
            ]
        };
        option && myChart.setOption(option);
    }