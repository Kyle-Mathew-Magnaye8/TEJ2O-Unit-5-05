/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Matthew
 * Created on: Mar 2026
 * This program will tell the distance in cm to the sonar.
*/

// variables
let distanceToObject: number = 0

// setup: Show a happy face to indicate the program is ready
basic.showIcon(IconNames.Happy)

// find the distance from sonar when Button A is pressed
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()

    // measures distance
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    // display the result
    basic.showNumber(distanceToObject)
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
})
