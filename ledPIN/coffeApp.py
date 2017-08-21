import RPi.GPIO as GPIO
import time
from flask import Flask

app = Flask(__name__)

GPIO.setmode(GPIO.BCM)
LIGHT = 4
GPIO.setup(LIGHT, GPIO.OUT)

@app.route("/")
def hello():
    return "I'm coffeBot!! :)"

@app.route("/ledON", methods=['POST'])
def ledON():
    GPIO.output(LIGHT, True)
    return "You turned ON the LED"

@app.route("/ledOFF", methods=['POST'])
def ledOFF():
    GPIO.output(LIGHT, False)
    return "You turned OFF the LED"

@app.route("/blink", methods=['POST'])
def blink():
    while True:    
        GPIO.output(LIGHT, True)
        time.sleep(0.5)
        #print("Led ON")
        GPIO.output(LIGHT, False)
        time.sleep(0.5)
        #print("Led OFF")

if __name__ == "__main__":
    app.run(
        host='0.0.0.0', 
        port=80, 
        debug=True)
