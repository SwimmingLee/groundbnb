#라즈베리파이에서 QR을 보내주는 코드

'''
1. 카메라로부터 image를 찍어서 객체로 보관중
2. 보관된 객체를 request로 express 서버 url에 쏴주기
'''
import requests

url = "http://127.0.0.1:3000/qrpost"

files  = {'media' : open('qr1.png','rb')}

res = requests.post(url,files=files,timeout=2)
print(res.status_code)
if res.status_code == requests.codes.ok :
    exit


