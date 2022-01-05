#!/usr/bin/env python
#-*-coding:utf-8-*-
#@File:get_city_province.py
import psycopg2
import json

conn = psycopg2.connect(database="可视化", user="postgres", password="123", host="127.0.0.1",port="5432")  ##根据自己的数据库修改
cursor = conn.cursor()
data=[]

command = "select distinct province,city from data2016;"
cursor.execute(command)
tuples = cursor.fetchall()
print(tuples)
data={}
for t in tuples:
    data[str(t[1])]=t[0]
data = {'data': data}
#with open("city_province.json", 'w', encoding='utf-8') as f:
#    json.dump(data, f)

for key  in data['data']:
    command = "update data_city SET province='%s' where city='%s';"%(data['data'][key],key)
    cursor.execute(command)
    conn.commit()

conn.close()
