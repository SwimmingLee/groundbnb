import pyzbar.pyzbar as pyzbar
import cv2
import matplotlib.pyplot as plt
import sys

#표준입출력 line 받기
#받은 lines는 list type임
lines = sys.stdin.readlines()
filepath = lines[0].replace('\\x0','/')
filepath = "../"+filepath
print(filepath)
