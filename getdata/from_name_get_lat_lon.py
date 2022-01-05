#!/usr/bin/env python
#-*-coding:utf-8-*-
#@File:from_name_get_lat_lon.py
import requests
import json

def get_lat_lon(addr):
    url='http://api.map.baidu.com/geocoding/v3/?address='+addr
    url+='&output=json&ak='+'pho6K9HC1R19T2kS6Q9MAbw75GeClHsO'
    print(url)
    req = requests.get(url)
    # print(req)
    content = req.text
    print(content)
    baiduAddr = json.loads(content)
    return baiduAddr['result']['location']

print(get_lat_lon('北京市东城区'))
