#!/usr/bin/env python
#-*-coding:utf-8-*-
#@File:server.py

import json
from flask import Flask,render_template,request
import psycopg2
import math
import numpy as np
from DNN import predict
from get_date import getAllDayPerYear
import os
import jieba
from collections import Counter
from itertools import groupby
from get_factory import get_factory_province
from quicksort import sort_data
from province_name_transverse import short_to_province,long_to_province

app = Flask(__name__)
app.config.update(DEBUG=True)

conn = psycopg2.connect(database="可视化", user="postgres", password="123", host="localhost", port="5432")##根据自己的数据库修改
cursor = conn.cursor()

cols_region={'pm10':1,'pm2_5':2,'so2':3,'no2':4,'co':5,'o3':6,'temp':7,'rh':8,'psfc':9}
col_point={'pm10':2,'pm2_5':3,'so2':4,'no2':5,'co':6,'o3':7,'temp':8,'rh':9,'psfc':10}


#空气质量计算
IAQI_dict={
    'so2':[0,50,150,475,800,1600,2100,2620],
    'no2':[0,40,80,180,280,565,750,940],
    'pm10':[0,50,150,250,350,420,500,600],
    'pm2_5':[0,35,75,115,150,250,350,500],
    'co':[0,2,4,14,24,36,48,60],
    'o3':[0,160,200,300,400,800,1000,1200]
}
def air_condiction_IAQI(type,value):
    num=0
    for i in IAQI_dict[type]:
        if value<i:
            return num
        else:
            num+=1
    return num

def AQI(IAQI_list):
    # print(max(IAQI_list))
    return max(IAQI_list)

def get_city_IAQI(level,city):
    if level=='city':
        command = "SELECT date,AVG(pm10),AVG(pm2_5),AVG(so2),AVG(no2),AVG(co),AVG(o3) from data_city where city='%s' group by date"% city
    else:
        command = "SELECT date,AVG(pm10),AVG(pm2_5),AVG(so2),AVG(no2),AVG(co),AVG(o3) from data_city where province='%s' group by date" % city
    cursor.execute(command)
    IAQIs = cursor.fetchall()
    iaqi_data={}
    months = ['01','02','03','04','05','06','07','08','09','10','11','12']
    for month in months:
        iaqi_data[month]=[0,0,0,0,0,0,0]

    for iaqi in IAQIs:
        for month in months:
            if(iaqi[0][5:7]==month):
                for i in range(6):
                    iaqi_data[month][i] += iaqi[i+1]
                iaqi_data[month][6]+=1
    print('iii',iaqi_data)
    polutions=['pm10','pm2_5','so2','no2','co','o3']
    data={'pm10':[],'pm2_5':[],'so2':[],'no2':[],'co':[],'o3':[]}
    for mon,value in iaqi_data.items():
        for i in range(6):
            #print('va',value[6])
            value[i] /= value[6]
            value[i] = air_condiction_IAQI(polutions[i],value[i])
            data[polutions[i]].append(value[i])
    print('dd',data)
    return data

def city_AQI(level,city,date):
    if level == 'city':
        command = "SELECT date,pm10,pm2_5,so2,no2,co,o3 from data_city where city='%s' and date='%s';" % (city,date)
    else:
        command = "SELECT date,pm10,pm2_5,so2,no2,co,o3 from data_city where province='%s' and date='%s';" % (city,date)
    cursor.execute(command)
    IAQIs = cursor.fetchall()
    print(IAQIs)
    polutions = ['pm10', 'pm2_5', 'so2', 'no2', 'co', 'o3']
    data = {'pm10': 0, 'pm2_5': 0, 'so2': 0, 'no2': 0, 'co': 0, 'o3': 0,'max':0}
    tmp=[]
    for i in range(len(IAQIs[0])-1):
        value = air_condiction_IAQI(polutions[i],IAQIs[0][i+1])
        data[polutions[i]]= round(IAQIs[0][i+1],2)
        tmp.append(value)
    #print('dd', data)
    data['max'] = max(tmp)
    print(data)
    return data

def get_city_air_quality(city):
    command = "SELECT pm10,pm2_5,so2,no2,co,o3,date FROM data_city WHERE city='%s';"%city
    cursor.execute(command)
    text_tumple = cursor.fetchall()
    pollutions = ['pm10','pm2_5','so2','no2','co','o3']
    res = []
    for tuple in text_tumple:
        tuple_res=[]
        for j in range(len(pollutions)):
            tuple_res.append(air_condiction_IAQI(pollutions[j],tuple[j]))
        tuple_res.append(AQI(tuple_res))
        res.append({'date':tuple[6],'pm10':tuple_res[0],'pm2_5':tuple_res[1],'so2':tuple_res[2],'no2':tuple_res[3],'co':tuple_res[4],'o3':tuple_res[5],'AQI':tuple_res[6]})

    # print(res)
    return res
########                      #########
#######################################

#获取所有省份的污染物均值
def get_province(date):
    command = "SELECT province,AVG(pm10),AVG(pm2_5),AVG(so2),AVG(no2),AVG(co),AVG(o3),AVG(temp) FROM data_city WHERE date='%s' GROUP BY province ;"%date
    cursor.execute(command)
    text_tumple = cursor.fetchall()
    province = []
    for i in text_tumple:
        # print(i)
        if i[0] == '':
            continue
        elif i[0][0] != ' ' and (i[0][0] > 'Z' or i[0][0] < 'A'):
            tmp=[]
            for j in range(len(i)):
                if j==0:
                   tmp.append(short_to_province(i[j]))
                else:
                    tmp.append(i[j])
            province.append(tmp)
            # print([i[0],i[1]])
        else:
            continue
    return province

#获取所有城市的污染物均值
def get_city(province):
    command = "SELECT city,AVG(pm10),AVG(pm2_5),AVG(so2),AVG(no2),AVG(co),AVG(o3) FROM data_city WHERE province='" + province + "' GROUP BY city ;"
    cursor.execute(command)
    text_tumple = cursor.fetchall()
    city = []
    for i in text_tumple:
        # print(i)
        if i[0] == '':
            continue
        elif i[0][0] != ' ' and (i[0][0] > 'Z' or i[0][0] < 'A'):
            tmp = []
            for j in range(len(i)):
                tmp.append(i[j])
            city.append(tmp)
            # print([i[0],i[1]])
        else:
            continue
    return city

#获取所有省份的污染物均值排名 index--按照什么排名
def getRank_province(index,date):
    province=get_province(date)
    sort_data(province,cols_region[index])
    return province

#获取所有城市的污染物均值排名
def getRank_city(province,index):
    city=get_city(province)
    sort_data(city,cols_region[index])
    return city

#获取所有的污染物点值
def get_point_country(date):
    command = "SELECT province,lat,lon,pm10,pm2_5,so2,no2,co,o3,temp,u,v FROM data2016 where date='%s';"%date
    cursor.execute(command)
    text_tumple = cursor.fetchall()
    point = []
    for i in text_tumple:
        # print(i)
        if i[0] == '':
            continue
        elif i[0][0] != ' ' and (i[0][0] > 'Z' or i[0][0] < 'A'):
            tmp = []
            for j in range(len(i)-1):
                tmp.append(i[j+1])
            point.append(tmp)
            # print([i[0],i[1]])
        else:
            continue
    return point

#获取某个省份所有的污染物点值
def get_point_province(province,date):
    command1 = "SELECT city,lat,lon,pm10,pm2_5,so2,no2,co,o3,temp FROM"+ ' data'+date[0:4]+' '
    command = command1+"WHERE province=%s and date=%s;"
    #print(command)
    cursor.execute(command,(province,date))
    text_tumple = cursor.fetchall()
    point = []
    for i in text_tumple:
        if i[0] == '':
            continue
        elif i[0][0] != ' ' and (i[0][0] > 'Z' or i[0][0] < 'A'):
            tmp = []
            for j in range(len(i)-1):
                tmp.append(i[j+1])
            point.append(tmp)
        else:
            continue
    return point

#处理获得的点的格式为主地图所需要的格式,并选择对应物质
def data_main_map_point_format(array,index):
    result=[]
    for i in array:
        dict_select = {}
        dict_select["name"] = ''
        value = []
        value.append(i[1])#log
        value.append(i[0])#lat
        value.append(i[col_point[index]])
        dict_select["value"] = value
        result.append(dict_select)
    return result

#获取主地图风向图数据
def data_main_map_flow_format(array,index_u,index_v):
    result=[]
    for i in array:
        value = []
        value.append(i[1])#log
        value.append(i[0])#lat
        value.append(i[index_u])#u
        value.append(i[index_v])#v
        result.append(value)
    return result

#处理获得的点的格式为主地图所需要的格式,并选择对应物质
def data_main_map_point_format2(array,index):
    result=[]
    for i in array:
        dict_select = {}
        dict_select["name"] = ''
        value = []
        value.append(i[1])#log
        value.append(i[0])#lat
        value.append(i[col_point[index]])
        dict_select["value"] = value
        result.append(dict_select)
    return result

#所有省份的污染物均值所需要的格式,并选择对应物质
def data_main_map_province_format(array,index):
    result=[]
    for i in array:
        tmp=[]
        tmp2={}
        # tmp2['name']=short_to_province(i[0])
        tmp2['name'] = i[0]
        tmp2['value']=i[cols_region[index]]
        tmp.append(tmp2)
        result.append(tmp)
    return result

def data_main_map_province_point_format(date,index):
    command = "SELECT province FROM data_city  GROUP BY province;"
    cursor.execute(command)
    text_tumple = cursor.fetchall()
    data={}
    for i in text_tumple:
        if i[0] == '':
            continue
        elif i[0][0] != ' ' and (i[0][0] > 'Z' or i[0][0] < 'A'):
            tmp=data_main_map_point_format2(get_point_province(i[0],date),index)
            data[short_to_province(i[0])]=tmp
        else:
            continue
    return data

#获取主页面地图所需数据
def data_main_map(index1,index2,date, index_u=-2, index_v=-1):
    data = {}
    point_data=get_point_country(date)

    print("index1:",index1,"  index2:", index2)
    if(index1==''):
        data["pollution"] = data_main_map_province_format(get_province(date), index2)
        data['province'] = data_main_map_province_point_format(date, index2)
        #print("1111111111")
        print(data)
        return data
    elif(index2==''):
        data["weather"] = data_main_map_point_format(point_data, index1)
        #print("2222222222")
        print(data["weather"])
        return data["weather"]
    else:
        data["pollution"] = data_main_map_province_format(get_province(date), index2)
        data['province'] = data_main_map_province_point_format(date, index2)
        data["weather"] = data_main_map_point_format(point_data, index1)
        data['flow'] = data_main_map_flow_format(point_data, index_u, index_v)
        # print(data['flow'])
        print(data)
        return data

#计算风的角度  城市
def cal_city_wind_angle(level,city):
    if level=='city':
        command = "SELECT date,avg(u),avg(v) from data_city where city='%s' group by date"%city
    else:
        command = "SELECT date,avg(u),avg(v) from data_city where province='%s' group by date" % city
    cursor.execute(command)
    uv_tumple = cursor.fetchall()
    angle_num = [0,0,0,0,0,0,0,0]
    angle=0

    angle_point1 = [-math.pi*7/8, -math.pi*5/8,-math.pi*3/8,-math.pi*1/8, math.pi*1/8,math.pi*3/8,math.pi*5/8,math.pi*7/8]
    for i in uv_tumple:
        angle = math.atan2(i[2],i[1])
        print(angle/math.pi*180)
        for j in range(len(angle_point1)-1):
            if angle_point1[j]<angle<=angle_point1[j+1]:
                angle_num[j]+=1
        if math.pi*7/8 < angle <= math.pi or -math.pi< angle <=-math.pi*7/8:
            angle_num[-1]+=1
    res_angle_num=angle_num[5:]
    res_angle_num+=angle_num[:5]
    print(res_angle_num)
    return res_angle_num

#计算风的角度  省
def cal_province_wind_angle(province):
    command = "SELECT date,avg(u),avg(v) from data_city where province='%s' group by date"%province
    cursor.execute(command)
    uv_tumple = cursor.fetchall()
    angle_num = [0,0,0,0,0,0,0,0]
    angle=0

    angle_point1 = [-math.pi*7/8, -math.pi*5/8,-math.pi*3/8,-math.pi*1/8, math.pi*1/8,math.pi*3/8,math.pi*5/8,math.pi*7/8]
    for i in uv_tumple:
        angle = math.atan2(i[2],i[1])
        print(angle/math.pi*180)
        for j in range(len(angle_point1)-1):
            if angle_point1[j]<angle<=angle_point1[j+1]:
                angle_num[j]+=1
        if math.pi*7/8 < angle <= math.pi or -math.pi< angle <=-math.pi*7/8:
            angle_num[-1]+=1
    res_angle_num=angle_num[5:]
    res_angle_num+=angle_num[:5]
    print(res_angle_num)
    return res_angle_num

#计算风的大小  城市
def cal_city_wind_strength(city):
    command = "SELECT date,power(u,2)+power(v,2) from data2016 where city='%s'" % city
    cursor.execute(command)
    uv_tumple = cursor.fetchall()
    command = "SELECT date,count(*) from data2016 where city='%s' group by date" % city
    cursor.execute(command)
    dates = cursor.fetchall()
    print(dates)
    res = []
    for date in dates:
        strength = 0
        for i in uv_tumple:
            if i[0]==date[0]:
                strength += math.sqrt(i[1])
        res.append({'date':date[0],'wind_strength':strength/date[1]})

    # print(res)
    return res

#得到总体折线图数据
def getLineData(index):
    command = "SELECT date,AVG(pm10),AVG(pm2_5),AVG(so2),AVG(no2),AVG(co),AVG(o3) from data_city group by date Order BY date"
    cursor.execute(command)
    data_tumple = cursor.fetchall()
    data = []
    date = []
    for i in data_tumple:
        data.append(i[cols_region[index]])
        date.append(i[0])

    return {'polution':index, 'data': data, 'date': date}

#得到城市折线图数据
def getLineData_city(level,city):
    if level=='city':
        command = "SELECT date,AVG(pm10),AVG(pm2_5),AVG(so2),AVG(no2),AVG(co),AVG(o3) from data_city WHERE city='%s' group by date Order BY date"%city
    else:
        command = "SELECT date,AVG(pm10),AVG(pm2_5),AVG(so2),AVG(no2),AVG(co),AVG(o3) from data_city WHERE province='%s' group by date Order BY date" % city
    cursor.execute(command)
    data_tumple = cursor.fetchall()
    data = []
    date = []
    for i in data_tumple:
        tmp=[]
        for j in range(6):
            tmp.append(i[j+1])
        data.append(tmp)
        date.append(i[0])
    #print(data)
    #print(city)
    return {'city':city, 'data': data, 'date': date}

#3p season_bar
def cal_season_city_air_quality(level,city):
    if level=='city':
        command = "SELECT pm10,pm2_5,so2,no2,co,o3,date FROM data_city WHERE city='%s' order by date;" % city
    else:
        command = "SELECT pm10,pm2_5,so2,no2,co,o3,date FROM data_city WHERE province='%s' order by date;" % city
    cursor.execute(command)
    text_tumple = cursor.fetchall()
    pollutions = ['pm10', 'pm2_5', 'so2', 'no2', 'co', 'o3']

    seasons=['03','06','09','12']
    data = {'1':[0]*4,'2':[0]*4,'3':[0]*4,'4':[0]*4,'5':[0]*4,'6':[0]*4,'7':[0]*4,'8':[0]*4}
    for tuple in text_tumple:
        tuple_res = []
        for j in range(len(pollutions)):
            tuple_res.append(air_condiction_IAQI(pollutions[j], tuple[j]))
        aqi_res = AQI(tuple_res)
        date = tuple[6]
        for s in range(len(seasons)-1):
            if seasons[s]<=date[5:7]<seasons[s+1]:
                data[str(aqi_res)][s]+=1
                break
        if date[5:7]=='12' or date[5:7]=='01' or date[5:7]=='02':
            data[str(aqi_res)][3]+=1

    print(data)

    return data

#climax_bar
def get_climate_data(level,city):
    if level=='city':
        command = "SELECT date,temp,rh,psfc FROM data_city WHERE city='%s' and date like '2018%%' order by date;" %city
    else :
        command = "SELECT date,temp,rh,psfc FROM data_city WHERE province='%s' and date like '2018%%' order by date;" % city
    cursor.execute(command)
    tuples = cursor.fetchall()
    dates = []
    climate_data = []
    num=0
    for tuple in tuples:
        if num%5==0:
            dates.append(tuple[0])
            climate_data.append([tuple[1], tuple[2], tuple[3]])
        num+=1
    return {'date':dates,'data':climate_data}

#相关性计算
def cal_correlation():
    command = "SELECT pm10,pm2_5,so2,no2,co,o3,temp,rh,psfc,u,v FROM data2016;"
    cursor.execute(command)
    tuples = cursor.fetchall()
    data={'pm10':[],'pm2_5':[],'so2':[],'no2':[],'co':[],'o3':[],'temp':[],'rh':[],'psfc':[],'ws':[]}
    indexs = ['pm10','pm2_5','so2','no2','co','o3','temp','rh','psfc','ws'] #ws:wind strength
    print(type(tuples),print(type(tuples[0])))
    for tp in tuples:
        for i in range(9):
            data[indexs[i]].append(tp[i])
        data['ws'].append(math.sqrt(tp[9]*tp[9]+tp[10]*tp[10]))

    res = []
    for i in range(6):
        for j in range(4):
            covv = np.corrcoef(data[indexs[i]],data[indexs[j+6]])
            res.append([i,j,round(covv[0][1],2)])
    print(res)
    return res

#2p相关性分析，散点
def get_relation(level,city):
    data = {}
    dict = ['pm10', 'pm2_5', 'so2', 'no2', 'co', 'o3', 'temp', 'rh', 'psfc']
    if level=='city':
        command = "SELECT pm10,pm2_5,so2,no2,co,o3,temp,rh,psfc FROM data_city where city='%s';" % city
    else:
        command = "SELECT pm10,pm2_5,so2,no2,co,o3,temp,rh,psfc FROM data_city where province='%s';" % city
    cursor.execute(command)
    tuples = cursor.fetchall()
    for one in range(9):
        for two in range(9):
            if one == two:
                continue
            dots = []
            for i in tuples:
                dots.append([i[one], i[two]])
            data[dict[one] + dict[two]] = dots
    # print(data)
    return data

#2p相关性分析，频数直方图
def get_histogram(level,city):
    if level=='city':
        command = "SELECT pm10,pm2_5,so2,no2,co,o3,temp,rh,psfc FROM data_city where city='%s';"%city
    else:
        command = "SELECT pm10,pm2_5,so2,no2,co,o3,temp,rh,psfc FROM data_city where province='%s';" % city
    cursor.execute(command)
    tuples = cursor.fetchall()
    dict=['pm10','pm2_5','so2','no2','co','o3','temp','rh','psfc']
    data={'pm10':[],'pm2_5':[],'so2':[],'no2':[],'co':[],'o3':[],'temp':[],'rh':[],'psfc':[]}
    num = 20;
    datarange = {}
    datarange["pm2_5"] = [0, 250]
    datarange["pm10"] = [0, 300]
    datarange["no2"] = [0, 120]
    datarange["co"] = [0, 2.5]
    datarange["o3"] = [0, 180]
    datarange["so2"] = [0, 70]
    datarange["temp"]=[230,350]
    datarange['rh']=[0,100]
    datarange['psfc']=[45400,108000 ]
    for j in range(9):
        for i in tuples:
            data[dict[j]].append(i[j])
            # tmp=air_condiction_IAQI(dict[j],i[j])
            # try:
            #     data[dict[j]][str(tmp)]+=1
            # except:
            #     data[dict[j]][str(tmp)]=1

    hisdata_all={}
    for j in range(9):
        xdata = []
        ydata = []
        # ydata = [0]*num
        # datarange[dict[j]][0]=min(data[dict[j]])
        # datarange[dict[j]][1]=max(data[dict[j]])
        # interval = (datarange[dict[j]][1] - datarange[dict[j]][0]) / (num)
        # xdata = [datarange[dict[j]][0]+i*interval for i in range(num)]
        # print(int((datarange[dict[j]][1]-datarange[dict[j]][0])/10))

        # for x in data[dict[j]]:
        #     no = int((x-datarange[dict[j]][0])/interval)
        #     print("dict[j]:", dict[j], "x:",x, "no:", no)
        #     ydata[no] += 1
        # print(ydata)
        if dict[j]=='co':interval=0.1
        else:interval=5
        for k, g in groupby(sorted(data[dict[j]]), key=lambda x: x // interval):
            len_g = len(list(g))
            # print(list(g), len(list(g)))
            # print('{}-{}: {}'.format(k * 5, (k + 1) * 5 - 1, len(list(g))))

            # if len(xdata)==0:
            #     xdata.append(k*5)
                # xdata.append((k+1)*5)
            print("len_g:", len_g)

            xdata.append((k+0.5)*interval)
            ydata.append(len_g)
        print(ydata)
        his_data = {}
        his_data['x'] = xdata
        his_data['y'] = ydata
        hisdata_all[dict[j]] = his_data

    #print(data)
    return hisdata_all

#3p season_bar
def cal_season_city_air_quality(level,city):
    if level=='city':
        command = "SELECT pm10,pm2_5,so2,no2,co,o3,date FROM data_city WHERE city='%s' order by date;" % city
    else:
        command = "SELECT pm10,pm2_5,so2,no2,co,o3,date FROM data_city WHERE province='%s' order by date;" % city
    cursor.execute(command)
    text_tumple = cursor.fetchall()
    pollutions = ['pm10', 'pm2_5', 'so2', 'no2', 'co', 'o3']

    seasons=['03','06','09','12']
    data13 = {'1':[0]*4,'2':[0]*4,'3':[0]*4,'4':[0]*4,'5':[0]*4,'6':[0]*4,'7':[0]*4,'8':[0]*4}
    data14= {'1':[0]*4,'2':[0]*4,'3':[0]*4,'4':[0]*4,'5':[0]*4,'6':[0]*4,'7':[0]*4,'8':[0]*4}
    data15= {'1':[0]*4,'2':[0]*4,'3':[0]*4,'4':[0]*4,'5':[0]*4,'6':[0]*4,'7':[0]*4,'8':[0]*4}
    data16 = {'1':[0]*4,'2':[0]*4,'3':[0]*4,'4':[0]*4,'5':[0]*4,'6':[0]*4,'7':[0]*4,'8':[0]*4}
    data17 = {'1':[0]*4,'2':[0]*4,'3':[0]*4,'4':[0]*4,'5':[0]*4,'6':[0]*4,'7':[0]*4,'8':[0]*4}
    data18 ={'1':[0]*4,'2':[0]*4,'3':[0]*4,'4':[0]*4,'5':[0]*4,'6':[0]*4,'7':[0]*4,'8':[0]*4}
    for tuple in text_tumple:
        tuple_res = []
        for j in range(len(pollutions)):
            tuple_res.append(air_condiction_IAQI(pollutions[j], tuple[j]))
        aqi_res = AQI(tuple_res)
        date = tuple[6]
        year = int(date[2:4])
        if year == 16:
            for s in range(len(seasons) - 1):
                if seasons[s] <= date[5:7] < seasons[s + 1]:
                    data16[str(aqi_res)][s] += 1
                    break
            if date[5:7] == '12' or date[5:7] == '01' or date[5:7] == '02':
                data16[str(aqi_res)][3] += 1
        else:
            if year == 17:
                for s in range(len(seasons) - 1):
                    if seasons[s] <= date[5:7] < seasons[s + 1]:
                        data17[str(aqi_res)][s] += 1
                        break
                if date[5:7] == '12' or date[5:7] == '01' or date[5:7] == '02':
                    data17[str(aqi_res)][3] += 1
            elif year == 18:
                for s in range(len(seasons) - 1):
                    if seasons[s] <= date[5:7] < seasons[s + 1]:
                        data18[str(aqi_res)][s] += 1
                        break
                if date[5:7] == '12' or date[5:7] == '01' or date[5:7] == '02':
                    data18[str(aqi_res)][3] += 1
            elif year == 15:
                for s in range(len(seasons) - 1):
                    if seasons[s] <= date[5:7] < seasons[s + 1]:
                        data15[str(aqi_res)][s] += 1
                        break
                if date[5:7] == '12' or date[5:7] == '01' or date[5:7] == '02':
                    data15[str(aqi_res)][3] += 1
            elif year == 14:
                for s in range(len(seasons) - 1):
                    if seasons[s] <= date[5:7] < seasons[s + 1]:
                        data14[str(aqi_res)][s] += 1
                        break
                if date[5:7] == '12' or date[5:7] == '01' or date[5:7] == '02':
                    data14[str(aqi_res)][3] += 1
            elif year == 13:
                for s in range(len(seasons) - 1):
                    if seasons[s] <= date[5:7] < seasons[s + 1]:
                        data13[str(aqi_res)][s] += 1
                        break
                if date[5:7] == '12' or date[5:7] == '01' or date[5:7] == '02':
                    data13[str(aqi_res)][3] += 1

    data=[data13,data14,data15,data16,data17,data18]
    #print(data)

    return data

#3p 计算风的角度  城市
def cal_city_wind_angle(level,city):
    if level=='city':
        command = "SELECT date,avg(u),avg(v) from data_city where city='%s' group by date"%city
    else:
        command = "SELECT date,avg(u),avg(v) from data_city where province='%s' group by date" % city
    cursor.execute(command)
    uv_tumple = cursor.fetchall()
    all_angle = [[0]*8,[0]*8,[0]*8,[0]*8]
    # angle_num = [0,0,0,0,0,0,0,0]
    angle=0
    seasons = ['03', '06', '09', '12']
    angle_point1 = [-math.pi*7/8, -math.pi*5/8,-math.pi*3/8,-math.pi*1/8, math.pi*1/8,math.pi*3/8,math.pi*5/8,math.pi*7/8]
    for i in uv_tumple:
        date=i[0]
        season=0
        for s in range(len(seasons)-1):
            if seasons[s]<=date[5:7]<seasons[s+1]:
                season = s
                break
        if date[5:7]=='12' or date[5:7]=='01' or date[5:7]=='02':
            season = 3

        angle = math.atan2(i[1],i[2])
        for j in range(len(angle_point1)-1):
            if angle_point1[j]<angle<=angle_point1[j+1]:
                all_angle[season][j]+=1
        if math.pi*7/8 < angle <= math.pi or -math.pi< angle <=-math.pi*7/8:
            all_angle[season][-1]+=1

    res_data=[]
    for i in range(4):
        tmp = all_angle[i][5:]
        tmp += all_angle[i][:5]
        res_data.append(tmp)

    #print(res_data)
    return res_data

# 词云
def cal_word_count():
    path="static/policy"
    files = os.listdir(path)
    stopwords = ['，', '。', '“', '”', '它', '的', '在', '不', '还', '我', '了', '你', '于', '就', '也', '吗', '是', '和', '挺', '但是',
                 '确实', '被', '觉得', '越','、','（','）','等','要','；','或','中','内','.','《','》','及','以','对','到','应',
                 '吧', '你们', '我们','(',')','为']

    all_counts = []
    for file_name in files:
        with open(path + "/" + file_name,encoding='utf-8') as file:
            text = []
            for line in file.readlines():
                x = jieba.cut(line, cut_all=False)
                x = " ".join(x)
                x = x.strip().split(' ')
                res = []
                for word in x:
                    if word != "" and word not in stopwords:
                        res.append(word)
                text += res

        count = Counter(text)
        res = []
        for key in count.keys():
            res.append({'name':key,'value':count[key]})
        print(res)
        all_counts.append({'id':file_name[:6],'res':res[:100]})

    return all_counts

def get_city_rank(province):
    command = "SELECT city,AVG(pm10),AVG(pm2_5),AVG(so2),AVG(no2),AVG(co),AVG(o3) FROM data_city WHERE province='%s' group by city;" % province
    cursor.execute(command)
    tuples = cursor.fetchall()
    res=[]
    city_names=[]
    for tp in tuples:
        city_names.append(tp[0])
        res.append([tp[1],tp[2],tp[3],tp[4],tp[5],tp[6]])

    return {'name':city_names,'data':res}

@app.route('/',methods=['POST','GET'])
def homePage():
    return render_template("1p.html",
                           line_data=getLineData('pm2_5'),
                           #api_bardata=get_city_IAQI('province','西藏自治区'),
                           city_line_data=getLineData_city('province','西藏自治区'),
                           city_AQI=city_AQI('province','西藏自治区','2013/01/01'),
                           word_count=cal_word_count()
                           )

@app.route('/2p/<city>',methods=['POST','GET'])
def homePage2p(city):
    city = long_to_province(city)
    return render_template("2p.html",
                           get_relation=get_relation('province',city),
                           get_histogram=get_histogram('province',city),
                           city={'city': short_to_province(city)},
                           factory_pos=0,
                           pollution_all=0,
                           )

@app.route('/get_factory_map',methods=['POST','GET'])
def get_factory_map():
    input = json.loads(request.form.get('data'))
    search = input['search_for']
    city = input['city']
    city = long_to_province(city)
    pie_data,factory_pos=get_factory_province(search,city)
    print(pie_data,factory_pos)

    pollution_all={'pm10':[],'pm2_5':[],'so2':[],'no2':[],'co':[],'o3':[]}
    command = "SELECT city,AVG(pm10),AVG(pm2_5),AVG(so2),AVG(no2),AVG(co),AVG(o3) from data_city where province='%s' group by city"% city
    cursor.execute(command)
    pollution_tumple = cursor.fetchall()
    for i in pollution_tumple:
        pollution_all['pm10'].append({'name':i[0],'value':i[1]})
        pollution_all['pm2_5'].append({'name': i[0], 'value': i[2]})
        pollution_all['so2'].append({'name': i[0], 'value': i[3]})
        pollution_all['no2'].append({'name': i[0], 'value': i[4]})
        pollution_all['co'].append({'name': i[0], 'value': i[5]})
        pollution_all['o3'].append({'name': i[0], 'value': i[6]})
    print(pollution_all)
    return json.dumps({'pie_data':pie_data,'factory_pos':factory_pos,'pollution_all':pollution_all})

@app.route('/3p/<city>',methods=['POST','GET'])
def homePage3p(city):
    city=long_to_province(city)
    return render_template("3p.html",
                           city_season_bar=cal_season_city_air_quality('province',city),
                           city_wind_angle = cal_city_wind_angle('province',city),
                           city={'city':short_to_province(city)},
                           city_name=short_to_province(city),
                           api_bardata=get_city_IAQI('province', city),
                           climate_data=get_climate_data('province', city),
                           city_ranklist=get_city_rank(city)
                           )

@app.route('/predict',methods=['POST','GET'])
def predict_4p():
    return render_template("predict.html",)

#3p season_pollution
@app.route('/get_season_city_pollution',methods=['POST','GET'])
def cal_season_city_pollution():
    data = json.loads(request.form.get('data'))
    pollution = data['pollution']
    city=long_to_province(data['city'])
    level=data['level']
    if level=='city':
        command = "SELECT %s,date FROM data_city WHERE city='%s' order by date;" % (pollution,city)
    else:
        command = "SELECT %s,date FROM data_city WHERE province='%s' order by date;" % (pollution, city)
    cursor.execute(command)
    text_tumple = cursor.fetchall()
    seasons = ['03', '06', '09', '12']
    season_name = ['Spring','Summer','Autumn','Winter']
    day_nums = [0]*4
    data={'Spring':[0]*6,'Summer':[0]*6,'Autumn':[0]*6,'Winter':[0]*6}
    for tuple in text_tumple:
        tuple_res = []
        date=tuple[1]
        year = int(date[2:4])-13
        # print(year)
        for s in range(len(seasons)-1):
            if seasons[s]<=date[5:7]<seasons[s+1]:
                data[season_name[s]][year]+=tuple[0]
                day_nums[s]+=1
                break
        if date[5:7]=='12' or date[5:7]=='01' or date[5:7]=='02':
            data['Winter'][year]+=tuple[0]
            day_nums[3]+=1

    for i in range(4):
        for j in range(6):
            data[season_name[i]][j]/=day_nums[i]
            round(data[season_name[i]][j],2)

    #print('season line',data)
    return json.dumps({'pollution':pollution,'data':data})

@app.route('/get_data_main_map',methods=['POST','GET'])
def get_data_main_map():
    data = json.loads(request.form.get('data'))
    print(data)
    data['city'] = long_to_province(data['city'])
    res = data_main_map(data['index1'],data['index2'],data['date'])
    if data['index2']!='':
        LineData_city = getLineData_city('province', data['city'])
        return json.dumps({'data_main_map':res,'line_data':getLineData(data['index2']),'LineData_city':LineData_city})
    else:
        return json.dumps(res)

@app.route('/get_data_province',methods=['POST','GET'])
def get_data_province():
    print('get')
    data = json.loads(request.form.get('data'))
    #print(data)
    data['name']=long_to_province(data['name'])
    #api_bardata = get_city_IAQI(data['level'],data['name'])

    LineData_city=getLineData_city(data['level'],data['name'])
    city_aqi = city_AQI(data['level'],data['name'], data['date'])
    return json.dumps({#'api_bardata':api_bardata,
                       'LineData_city':LineData_city,'city_AQI':city_aqi})

@app.route('/get_data_prediction',methods=['POST','GET'])
def get_data_prediction():
    data = json.loads(request.form.get('data'))['data']
    #print(data)
    year=data[0]
    lat=data[1]
    lon=data[2]
    input=getAllDayPerYear(year,lat,lon)
    # province=data[3]
    #  city=data[4]
    lat=18.34
    lon=109.38

    # 从数据库读往年data
    # command = "SELECT date,avg(pm2_5),avg(pm10),avg(so2),avg(no2),avg(co),avg(o3),avg(u),avg(v),avg(temp),avg(rh),avg(psfc) from data_city where province='%s' and city='%s' group by date;" % (province, city)
    command = "SELECT date,avg(pm2_5),avg(pm10),avg(so2),avg(no2),avg(co),avg(o3),avg(u),avg(v),avg(temp),avg(rh),avg(psfc) " \
              "from data2016 where lat>%0.2f and lat<%0.2f and lon>%0.2f and lon<%0.2f group by date;" % (lat-0.1, lat+0.1, lon-0.1, lon+0.1)
    # print(command)
    cursor.execute(command)
    uv_tumple = cursor.fetchall()
    # print(uv_tumple)
    res={'data':predict(input).tolist()}
    old_data = {}
    for tuple in uv_tumple:
        key = (str(int(tuple[0][8:10])), str(int(tuple[0][5:7])))  # 日，月作为key
        key = "".join(key)
        if key in old_data.keys():
            old_data[key]['num'] += 1
            list1 = list(tuple[1:])
            list2 = old_data[key]['data']
            old_data[key]['data'] = [list1[i]+list2[i] for i in range(len(list1))]
        else:
            old_data[key] = {'data':list(tuple[1:]), 'num':1}   # num记录次数，以便之后按(日，月)求平均

    # 把olddata和预测data结合
    old_weight=0.9
    for i in range(len(res['data'])):
        # print(input)
        key = (str(input[i][0]), str(input[i][1]))
        # print(key)
        key="".join(key)
        if not key in old_data.keys():
            continue
        for j in range(len(res['data'][i])):
            res['data'][i][j] = res['data'][i][j]*(1-old_weight)+old_weight*old_data[key]['data'][j]/old_data[key]['num']
    #print(res)
    return json.dumps(res)

'''def get_data_prediction():
    data = json.loads(request.form.get('data'))['data']
    #print(data)
    year=data[0]
    lat=data[1]
    lon=data[2]
    input=getAllDayPerYear(year,lat,lon)
    res={'data':predict(input).tolist()}
    #print(res)
    return json.dumps(res)'''

if __name__ == '__main__':
    app.run(debug=True)
