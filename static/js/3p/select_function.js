function func_select_pollution(){
    var m = $('#select_pollution option:selected').val();
    console.log(m);
    $.ajax({
        url: "http://127.0.0.1:5000/get_season_city_pollution",//路由
        data: {data:JSON.stringify({'pollution':m,'city':city,level:'province' })},
        type: "POST",
        dataType: "json",
        success: function (p) {
            var data=p.data;
            var pollution=p.pollution;
            city_season_line(data,pollution)
        }
    })
}
