#!/usr/bin/env python
#-*-coding:utf-8-*-
#@File:get_city_month_data.py
import psycopg2
import json

conn = psycopg2.connect(database="可视化", user="postgres", password="123", host="127.0.0.1",port="5432")  ##根据自己的数据库修改
cursor = conn.cursor()
data=[]

f2 = open('data_city_name.json', 'r')
info_data = json.load(f2)
info_data=info_data['data']
print(info_data)

def get_data(city,date):
    command=" SELECT city,AVG(pm10),AVG(pm2_5),AVG(so2),AVG(no2),AVG(co),AVG(o3),AVG(temp),AVG(rh),AVG(psfc),AVG(u),AVG(v) from data2014 where city='%s' and date='%s' GROUP BY city;"%(city,date)
    cursor.execute(command)
    tuples = cursor.fetchall()
    for i in tuples:
       data.append({
           'city':i[0],
           'pm10':i[1],
           'pm2_5': i[2],
           'so2': i[3],
           'no2': i[4],
           'co': i[5],
           'o3': i[6],
           'temp': i[7],
           'rh': i[8],
           'psfc': i[9],
           'u':i[10],
           'v':i[11],
           #'province':i[10],
           'date':date
       })

for x in ['2013','2014']:
    for k in range(12):
        tmp1 = str(k + 1)
        if k + 1 < 10:
            tmp1 = '0' + tmp1
        for j in range(31):
            for i in info_data:
                tmp=str(j+1)
                if j + 1 < 10:
                    tmp='0'+tmp
                get_data(i[0],x+'/'+tmp1+'/'+tmp)
print(len(data))
data = {'data': data}
with open("data_city3.json", 'w', encoding='utf-8') as f:
    json.dump(data, f)