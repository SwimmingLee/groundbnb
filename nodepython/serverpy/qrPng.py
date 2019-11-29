import pyzbar.pyzbar as pyzbar
import cv2
import matplotlib.pyplot as plt
#os용?
import sys

img = cv2.imread('qr.png')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
decoded = pyzbar.decode(gray)

print(decoded[0].data)