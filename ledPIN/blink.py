import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
LIGHT = 4

GPIO.setup(LIGHT,GPIO.OUT)

while True:
    GPIO.output(LIGHT,True)
    time.sleep(0.5)
    GPIO.output(LIGHT,False)
    time.sleep(0.5)
