#!/usr/bin/env python
#-*-coding:utf-8-*-
#@File:getCityName.py
import requests
import json
import csv
import pandas
import time
import psycopg2

key='859d16285fd000feec89e9032513f8bb'
keys=['3tQaWIx5mWClV0qzMZNuw0nMpeMSzsXj','RlEghW0Y1E7L6KvGP3Fs0zZUE5C49KVV','dXUsLxoC4SxMRbrEIb8itrfNPZ5GizXH',
      'shS9Q0uoe6PdiiZrMh5T92XWX6j15ugC','TMq8VpwIEuyqM19lTlc5LNz2EHlMKbAL','wZScgPkRBZe6IkMyQGZ9ePi38IG5zGWK',
      'N1t0TXWyaXiVe8AalT6tBH5fSTBognwd','U1iDNYPXFk6SVGqEjqxyIm9BDVrqB8ct','Z3DdcFnl838YevW8mNOGXUeeuDPtXDRY',
      'mobbZmvC0xuyX3NWUKqCuPYmmposvlk5']

num=0

def getAddr():
    csv_reader = csv.reader(open("CN-Reanalysis-daily-2018013100.csv",encoding='utf-8'))
    data=[]
    for row in csv_reader:
        if row[0]=='PM2.5(微克每立方米)':
            continue
        else:
            data.append({'pm2_5':float(row[0]), 'pm10':float(row[1]),
                         'so2':float(row[2]),'no2':float(row[3]),
                         'co':float(row[4]), 'o3':float(row[5]),
                         'u':float(row[6]), 'v':float(row[7]), 'temp':float(row[8]),
                         'rh':float(row[9]),'psfc':float(row[10]),
                         'lat':float(row[11]), 'lon':float(row[12]),
                         'date':'2018/01/31'})
    #print(data)
    return data

def getCityName(lat,lng):
    baiduUrl = "http://api.map.baidu.com/reverse_geocoding/v3/?ak="
    baiduUrl= baiduUrl+ '3tQaWIx5mWClV0qzMZNuw0nMpeMSzsXj'
    baiduUrl = baiduUrl+"&output=json&coordtype=wgs84ll&location=%s,%s" % (lat, lng)
    req = requests.get(baiduUrl)
    #print(req)
    content = req.text
    print(content)
    baiduAddr = json.loads(content)
    province = baiduAddr["result"]["addressComponent"]["province"]
    city = baiduAddr["result"]["addressComponent"]["city"]
    district = baiduAddr["result"]["addressComponent"]["district"]
    print(lat,lng,province,city,district)
    #time.sleep(0.1)
    return province,city

def getAverageCity(filename="data2018011200.json"):
    with open(filename) as f:
        jsonfile=json.load(f)
    jsonfile=jsonfile['data']
    df=pandas.DataFrame(jsonfile)
    #print(df['province'])

    #print([column for column in df])
    print(df.head(n=5))
    province=df.groupby('province').agg('mean')
    print(province)
    city=df.groupby('city').agg('mean')
    print(city)
    province.to_csv('province2.csv', index=True)
    city.to_csv('city2.csv', index=True)


addr=getAddr()
try:
    '''
    conn = psycopg2.connect(database="可视化", user="postgres", password="123", host="127.0.0.1",
                            port="5432")  ##根据自己的数据库修改
    cursor = conn.cursor()
    command="UPDATE data SET date = '2018-01-03' where date = '1900-01-20';"
    cursor.execute(command)
    conn.commit()   
    '''
    num=0
    for i in addr:
        #province, city = getCityName(i['lat'], i['lon'])
        '''try:
            province,city=getCityName(i['lat'],i['lon'])
        except:
            num+=1
            i['province'] = ''
            i['city'] = ''
            continue
        i['province']=province
        i['city']=city
        #print(i)
        #break
    '''
    i['province'] = ''
    i['city'] = ''
    #print(addr)
    print(num)
    data={'data': addr }
    with open("data2018013100.json", 'w', encoding='utf-8') as f:
        json.dump(data, f)
    getAverageCity()

except:
    print('error')
    data = {'data': addr}
    with open("data2018010100.json", 'w', encoding='utf-8') as f:
        json.dump(data, f)
        print(len(addr))
        getAverageCity()


#getAverageCity()



