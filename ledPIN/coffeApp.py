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

@app.route("/makeCoffe", methods=['POST'])
def makeCoffe():
    GPIO.output(LIGHT, True)
    time.sleep(2)
    GPIO.output(LIGHT, False)
    print("making your coffe")
    return "Making your coffe"

@app.route("/ledON", methods=['POST'])
def ledON():
    GPIO.output(LIGHT, True)
    return "You turned ON the LED"

@app.route("/ledOFF", methods=['POST'])
def ledOFF():
    GPIO.output(LIGHT, False)
    return "You turned OFF the LED"

if __name__ == "__main__":
    app.run(
        host='0.0.0.0', 
        port=80, 
        debug=True)
