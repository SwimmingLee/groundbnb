import pyzbar.pyzbar as pyzbar
import cv2
import matplotlib.pyplot as plt
#os용?
import sys

#JS측 stdin으로부터 데이터 읽기
def read_in():
    lines = sys.stdin.readlines()

read_in()


img = plt.imread("../"+lines)

f = plt.figure()
plt.imshow(img)
plt.savefig("../"+lines+"3.jpg")

gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
decoded = pyzbar.decode(gray)

return decoded[0].data

# decoding된 주소를 어떻게 넘겨줄 것인가. 
# bytetype이다. 이거를 자바스크립트에 넘겨줘야되나?
'''

'''
img = cv2.imread('../uploads/42be86bb103411e8c86a7a255b0b43f0')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
decoded = pyzbar.decode(gray)

print(decoded[0].data)
'''