function city_season_line(data,pollution){
        document.getElementById("city_season_line_label").childNodes[2].innerHTML=pollution;
        var myChart = echarts.init(document.getElementById("city_season_line"));
        myChart.setOption({
                title: {
                    text: ''
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    top:0,
                    textStyle:{
                        color:'white'
                    },
                    data:[
                            {name:'Spring',icon:'circle'},
                            {name:'Summer',icon:'circle'},
                            {name:'Autumn',icon:'circle'},
                            {name:'Winter',icon:'circle'},
                        ]
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '1%',
                    top:'3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisTick:{show:false},
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
                    data: [2013,2014,2015,2016,2017,2018]
                },
                yAxis: {
                    type: 'value',
                    axisTick:{show:false},
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
                    splitLine:{
                        show:false
                    }
                },
                series: [
                            {
                                name:'Spring',
                                type:'line',
                                itemStyle : {
                                        normal : {
                                        color:'#DB7093'
                                    },
                                    lineStyle:{
                                        normal:{
                                        color:'#DB7093',
                                        opacity:1
                                            }
                                    }
                                },
                                data:data['Spring']
                            },
                            {
                                name:'Summer',
                                type:'line',
                                itemStyle : {
                                        normal : {
                                        color:'#006AD4'
                                    },
                                    lineStyle:{
                                        normal:{
                                        color:'#006AD4',
                                        opacity:1
                                            }
                                    }
                                },
                                data:data['Summer']
                            },
                            {
                                name:'Autumn',
                                type:'line',
                                itemStyle : {
                                        normal : {
                                        color:'#F3891B'
                                    },
                                    lineStyle:{
                                        normal:{
                                        color:'#F3891B',
                                        opacity:1
                                            }
                                    }
                                },
                                data:data['Autumn']
                            },
                        {
                                name:'Winter',
                                type:'line',
                                itemStyle : {
                                        normal : {
                                        color:'#009895'
                                    },
                                    lineStyle:{
                                        normal:{
                                        color:'#009895',
                                        opacity:1
                                            }
                                    }
                                },
                                data:data['Winter']
                            }
                        ]
            }
        );
    }