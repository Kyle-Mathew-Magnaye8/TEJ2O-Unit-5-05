"""
Created by: Kyle Matthew
Created on: Mar 2026
This module will tell the distance in cm to the sonar.
"""

from microbit import *
import utime

# Setup: Show a happy face at start
display.show(Image.HAPPY)

def get_distance():
    # Trigger a pulse on Pin 1
    pin1.write_digital(0)
    utime.sleep_us(2)
    pin1.write_digital(1)
    utime.sleep_us(10)
    pin1.write_digital(0)

    # Read the echo on Pin 2
    # utime.pulse_in returns the duration in microseconds
    duration = machine.time_pulse_us(pin2, 1, 116000)
    
    if duration > 0:
        # Calculate distance: (time * speed of sound) / 2
        # Speed of sound is approx 0.0343 cm/us
        distance = (duration * 0.0343) / 2
        return int(distance)
    else:
        return 0

while True:
    if button_a.is_pressed():
        display.clear()
        
        # Get distance and display it
        distance_to_object = get_distance()
        display.scroll(str(distance_to_object))
        
        # Return to happy face
        display.show(Image.HAPPY)
