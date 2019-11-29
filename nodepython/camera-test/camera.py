#!/usr/bin/python
import time
import picamera
import os
import RPi.GPIO as GPIO
import requests

Button = 4
GPIO.setmode(GPIO.BCM)
GPIO.setup(Button, GPIO.IN,pull_up_down=GPIO.PUD_DOWN)

print("press the button")
path=os.getenv("HOME")+"/work/webproject/camera-test"  #adjust path for location of this program

while True : 
    if GPIO.input(Button) == GPIO.HIGH : 
        
        with picamera.PiCamera() as picam:
            picam.rotation=90 #adjust as necessary
            picam.start_preview()
            time.sleep(1)
            picam.capture('sent.png')
            # picam.capture(path+'/photo.jpg',resize=(640,480))
            # time.sleep(2)
            picam.stop_preview()
            picam.close()
            print("capture complete")

        url = "http://70.12.111.170:3000/qrpost"
        files  = {'media' : open('sent.png','rb')}
        res = requests.post(url,files=files,timeout=2)

        break

GPIO.cleanup()