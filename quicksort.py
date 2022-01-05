#!/usr/bin/env python
#-*-coding:utf-8-*-
#@File:quicksort.py
################  快排  ###############
########                      #########
def partition(arr, low, high,index):
    i = (low - 1)  # 最小元素索引
    pivot = arr[high][index]
    for j in range(low, high):
        # 当前元素小于或等于 pivot
        if arr[j][index] <= pivot:
            i = i + 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return (i + 1)

def quickSort(arr, low, high,index):
    if low < high:
        pi = partition(arr, low, high,index)
        quickSort(arr, low, pi - 1,index)
        quickSort(arr, pi + 1, high,index)

def sort_data(array,index):
    #print(array)
    quickSort(array,0,len(array)-1,index)
    #print(array)