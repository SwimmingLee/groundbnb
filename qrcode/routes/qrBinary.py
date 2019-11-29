import cv2
import os
import sys
import pyzbar.pyzbar as pyzbar
import matplotlib.pyplot as plt
# JS측 stdin으로부터 데이터 읽기
lines = sys.stdin.readlines()
filepath = lines[0]
filepath = filepath.replace('\\','/')
filepath = os.path.abspath(filepath)


img = cv2.imread(filepath)
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
decoded = pyzbar.decode(gray)
url = decoded[0].data
print(url)