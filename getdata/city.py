#!/usr/bin/env python
#-*-coding:utf-8-*-
#@File:city.py

import requests
import json
import csv
import pandas
import time
import psycopg2
import os

conn = psycopg2.connect(database="可视化", user="postgres", password="123", host="127.0.0.1",
                            port="5432")  ##根据自己的数据库修改
cursor = conn.cursor()

def cal_city(lon,lat):
    command="select distinct province,city,lat,lon from data where lon='%s' and lat='%s';"%(lon,lat)
    cursor.execute(command)
    tuples = cursor.fetchall()
    print(tuples[0][0],tuples[0][1])
    return tuples[0][0],tuples[0][1]

filename='D:\\大三下\\ChinaVis2021_RawData\\年数据\\2018\\CN-Reanalysis201801\\201801\\'
filelist = os.listdir(filename)
print(filelist)
data = []
for i in filelist:
    filepath=filename+i

    csv_reader = csv.reader(open(filepath, encoding='utf-8'))
    date=i[-14:-10]+'/'+i[-10:-8]+'/'+i[-8:-6]
    print(date)

    for row in csv_reader:
        if row[0] == 'PM2.5(微克每立方米)':
            continue
        else:
            province,city=cal_city(row[12],row[11])
            data.append({'pm2_5': float(row[0]), 'pm10': float(row[1]),
                         'so2': float(row[2]), 'no2': float(row[3]),
                         'co': float(row[4]), 'o3': float(row[5]),
                         'u': float(row[6]), 'v': float(row[7]), 'temp': float(row[8]),
                         'rh': float(row[9]), 'psfc': float(row[10]),
                         'lat': float(row[11]), 'lon': float(row[12]),
                         'date': date,'city':city,'province':province})

print(len(data))
data = {'data': data}
with open("data.json", 'w', encoding='utf-8') as f:
    json.dump(data, f)
