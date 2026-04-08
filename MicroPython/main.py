"""
Created by: Kyle Matthew
Created on: Mar 2026
This module will tell the distance in cm to the sonar.
"""

from microbit import *
import utime

# setup
display.show(Image.HAPPY)


def get_distance():
    # trigger a pulse on Pin 1
    pin1.write_digital(0)
    utime.sleep_us(2)
    pin1.write_digital(1)
    utime.sleep_us(10)
    pin1.write_digital(0)

    # read the echo on Pin 2
    # utime.pulse_in returns the duration in microseconds
    duration = machine.time_pulse_us(pin2, 1, 116000)

    if duration > 0:
        # calculate distance
        distance = (duration * 0.0343) / 2
        return int(distance)
    else:
        return 0


while True:
    if button_a.is_pressed():
        display.clear()

        # get distance and display it
        distance_to_object = get_distance()
        display.scroll(str(distance_to_object))

        # show happy face
        display.show(Image.HAPPY)
