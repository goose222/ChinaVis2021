
#!/usr/bin/env python
#-*-coding:utf-8-*-
#@File:get_factory.py
import requests
import json

def get_factory_province(place,city):
    url="http://api.map.baidu.com/place/v2/search?query=%s&region=%s&output=json&ak=3tQaWIx5mWClV0qzMZNuw0nMpeMSzsXj"%(place,city)
    req = requests.get(url)
    # print(req)
    content = req.text
    print(content)
    baiduAddr = json.loads(content)
    data=[]
    data2=[]
    for i in baiduAddr['results']:
        data.append({'name':i['name'],'value':i['num']})
        url1 = "http://api.map.baidu.com/place/v2/search?query=%s&region=%s&output=json&ak=3tQaWIx5mWClV0qzMZNuw0nMpeMSzsXj" % (place,i['name'])
        req1 = requests.get(url1)
        content1 = req1.text
        #print(content1)
        baiduAddr1 = json.loads(content1)
        for j in baiduAddr1['results']:
            data2.append({'name':j['name'],'value':[j['location']['lng'], j['location']['lat'],50]})
    print(data,'\n',data2)
    return data,data2

#get_factory('冶金厂','广东')
