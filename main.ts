/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Matthew
 * Created on: Mar 2026
 * This program will tell the distance in cm to the sonar.
*/

let distanceToObject: number = 0

// Setup: Show a happy face to indicate the program is ready
basic.showIcon(IconNames.Happy)

// Find the distance from sonar when Button A is pressed
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()

    // Measure distance
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    // Display the result
    basic.showNumber(distanceToObject)

    // Brief pause so the user can read the last digit before the icon returns
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
})
